import { store } from '../e/utils/localsotage.service';

const { FusionAuthClient } = require('@fusionauth/node-client');

function authProvider(config) {
  const client = new FusionAuthClient(
    config.fusionAuthAPIKey,
    config.fusionAuthURL
  );

  // eslint-disable-next-line consistent-return
  const validateResponse = (response) => {
    if (response.statusCode === 200) {
      // Check if the applicationID is three
      const isValidUser = response.successResponse.user.registrations
        .map((s) => s.applicationId)
        .includes(config.fusionAuthApplicationId);
      const isAdmin = response.successResponse.user.registrations.filter(
        (s) => {
          if (s.roles !== undefined) return s.roles.includes('Admin');
          return false;
        }
      );

      if (isValidUser && isAdmin.length > 0) {
        if (response.successResponse.token !== undefined) {
          return store
            .setItem('user', response.successResponse)
            .then(() => Promise.resolve('Successfully Logged In'))
            .catch((e) => Promise.reject(e));
        }
        Promise.resolve('Successfully Logged In');
      } else return Promise.reject(new Error('User Invalid'));
    } else {
      return Promise.reject(new Error('Invalid Credentials'));
    }
  };

  return {
    login: (params) => {
      const { username, password } = params;
      store.setItem('username', username);
      store.setItem('password', password);
      return client
        .login({
          loginId: username,
          password,
        })
        .then(validateResponse)
        .catch((e) => {
          // console.log(e);
          return Promise.reject(e);
        });
    },
    logout: () => {
      store.removeItem('user');
      return Promise.resolve();
    },
    checkAuth: () => {
      return store.getItem('user').then((user) => {
        if (user) {
          return client
            .retrieveUserUsingJWT(user.token)
            .then(validateResponse)
            .catch((e) => {
              return Promise.reject(e);
            });
        }
        return Promise.reject(new Error('User Credentails not found'));
      });
    },
    checkError: (error) => {
      const { status } = error;
      if (status === 401 || status === 403) {
        localStorage.removeItem('token');
        return Promise.reject();
      }
      return Promise.resolve();
    },
    getPermissions: () => {
      return store
        .getItem('user')
        .then((user) => {
          if (user) return Promise.resolve('admin');
          return Promise.reject();
        })
        .catch(() => Promise.reject());
    },
  };
}

export default authProvider;
