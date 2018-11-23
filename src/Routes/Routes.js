import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";
import Checkout from '../containers/Checkout/Checkout';
import Orders from "../containers/Orders/Orders";
class Routes extends Component {

    render() {
        return (
            <Switch>
                {/*<Route path="/" component={BurgerBuilder}/>*/}
                <Route path="/checkout"  component={ Checkout }/>
                <Route path="/"  exact component={ BurgerBuilder }/>
                <Route path="/orders"  exact component={ Orders }/>
                {/*<Redirect from="/" to="burger-builder" />*/}
            </Switch>
        );
    }
}
export default Routes;