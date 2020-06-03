# Routing

Page routing can be of two types:
1. Resource Routing
2. Custom page routing

## 1 Resource routing
Resource routing is handled automatically by [react-admin](https://marmelab.com/react-admin/Resource.html)
**For example**: If you create a resource 'user', following routes will be created automatically:

    /user                 // for users List Component
    /user/:id             // for user Edit Component 
    /user/create          // for new user Create component
    /user/:id/show        // for users Show component
* See also : Create resources in  [react-admin](https://marmelab.com/react-admin/Resource.html)
* Example:
    `<Resource  
  name="user"  
  list={UserList}  
    show={UserShow}  
    edit={UserEdit}  
    create={UserCreate}  
    icon={ComponentsIcon}  
/>`
	
	Here we have created a resource with name *user*, with this resource added inside the admin selector in App.js, [react-admin](https://marmelab.com/react-admin/Resource.html) will automatically create above mentioned route.

## 2 Custom page routing
For custom page routing we have a lazy loaded module i.e. *ExternalModule* which consists of all the external routing components with their separate redux.
* Routing in external module is implemented using [react-redux-dom](https://reacttraining.com/react-router/web/guides/quick-start)
* Path to the Externak module : `src/e/`
* Example : 
 `<Route  
  path="/e/dashboard"  
  component={DashboardPage}  
  icon={ComponentsIcon}  
/>`
In the above example we have defined a route  `/e/dashboard` which will navigate to *Dashboard* page component and sidebar will have an Icon of *Component Icon*
