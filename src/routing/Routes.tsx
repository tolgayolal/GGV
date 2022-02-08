import { Redirect, Route, Switch } from "react-router-dom"
import AuthRoutes from "./AuthRoutes"
import PrivateRoutes from "./PrivateRoutes"


const AppRoutes: React.FC = () => {
    const isAuthenticated = true
    return (
        <>
            <Switch>
                {
                    !isAuthenticated
                        ?
                        <Route>
                            <AuthRoutes />
                        </Route>
                        :
                        <Redirect from='/auth' to='/home' />
                }

                {
                    !isAuthenticated
                        ?
                        <Redirect to='/auth' />
                        :
                        <PrivateRoutes />
                }
            </Switch>
        </>
    )
}

export default AppRoutes
