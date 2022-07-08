import { Fragment } from "react"
import { Route } from "react-router"
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export const HomeTemplate = ({
    comp: Component,
    ...rest
}) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                <Fragment>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </Fragment>
            )
        }} />
    )
}