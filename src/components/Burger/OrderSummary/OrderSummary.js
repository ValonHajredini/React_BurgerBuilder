import React, { Component } from 'react';
import Aux                  from '../../../HOC/Auc/Auc';
import Button               from '../../UI/Button/Button';
class OrderSummary extends Component{

    componentWillUpdate() {
        // console.log('[OrderSummary] componentWillUpdate()')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map((igKey, index) => {
            return (
                <li key={index}>
                    <span style={{textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        });
        return (
                <Aux>
                    <h3>Your order </h3>
                    <p>A delicious with the folowing ingredient:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <span style={{fontSize: '16px'}}>Total Price: <b>{this.props.price.toFixed(2)} €</b></span>
                    <p>Continue to checkout</p>
                    <Button clicked={this.props.modalClosed} buttonType="Danger">CANCLE</Button>
                    <Button clicked={this.props.modalContinue} buttonType="Success">CONTINUE</Button>
                </Aux>
        )
    }
}

export default OrderSummary;