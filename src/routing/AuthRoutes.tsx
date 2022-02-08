import { Redirect, Route, Switch } from "react-router-dom"
import Login from "../pages/auth/Login"

const AuthRoutes = () => {
    return (
        <Switch>
            <Route path='/auth' component={Login} />
            <Redirect to='/auth' />
        </Switch>
    )
}

export default AuthRoutes
