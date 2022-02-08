import { Route, Switch } from "react-router-dom"
import Login from "../pages/auth/Login"
import Case from "../pages/case/Case"
import Footer from "../pages/footer/Footer"
import Header from "../pages/header/Header"
import Home from "../pages/home/Home"
import ScrollToTop from "../util/ScrollToTop"


const PrivateRoutes = () => {

    return (
        <>
            <Header />
            <div className="">
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/case/:caseName' component={Case} />
                    </Switch>
                </ScrollToTop>
                <Footer />
            </div>
        </>
    )
}

export default PrivateRoutes
