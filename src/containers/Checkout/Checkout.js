import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import  ContactData  from '../BurgerBuilder/ContactData/ContactData';
class Checkout extends Component {
    state={
        ingredients: null,
        totalPrice: 0
    };
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if (param[0] === 'price') {
                price = param[1];
            }else {
                ingredients[param[0]] = +param[1];
            }
        }
        // console.log('result',this.state.ingredients);
        this.setState({ingredients: ingredients, totalPrice: price});
    }
    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };
    checkoutContinueHandler  = () => {
        this.props.history.replace('/checkout/contact-data')
    };
    render () {
        return (
            <div>
                <CheckoutSummary
                    ingredients={ this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                {/*<ContactData />*/}
                <Route path={this.props.match.path + '/contact-data'}
                       render={ (props) => (<ContactData
                            price={ this.state.totalPrice }
                            ingredients={this.state.ingredients }
                            {...props}
                       />)}
                />
            </div>
        )
    }
}

export default Checkout;