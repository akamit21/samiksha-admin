import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { store } from '../utils/localsotage.service';
import Login from './login.component';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, username: '', password: '' };
    this.getDefaultLogin = this.getDefaultLogin.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.getDefaultLogin();
  }

  submit = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.userLogin({ username: e.username, password: e.password });
  };

  getDefaultLogin = () => {
    Promise.all([store.getItem('username'), store.getItem('password')]).then(
      (result) => {
        this.setState({
          isLoaded: true,
          username: result[0],
          password: result[1],
        });
      }
    );
  };

  render() {
    // const classes = useStyles();
    const { theme } = this.props;
    const { isLoaded, username, password } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        {isLoaded && (
          <Login
            userLogin={this.submit}
            defaultUsername={username}
            defaultPassword={password}
          />
        )}
      </MuiThemeProvider>
    );
  }
}

export default connect(undefined, { userLogin })(LoginPage);
