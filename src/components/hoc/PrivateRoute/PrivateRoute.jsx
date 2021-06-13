import { Route, Redirect } from "react-router-dom";
import { authService } from "../../../services/AuthenticationService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    const authInfo = authService.authInfoValue;
    if (!authInfo || !authService.isAuthenticated()) {
        // not logged in so redirect to require page with the return url
        return <Redirect to="/require" />
    }

    // authorised so return component
    return <Component {...props} />
}} />
)

export default PrivateRoute;