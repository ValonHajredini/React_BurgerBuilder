import React from 'react';
import Aux from '../../../HOC/Auc';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey, index) => {
        return (
            <li key={index}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        )
    });
    return (
        <Aux>
            <h3>Your order </h3>
            <p>A delicious with the folowing ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <span style={{fontSize: '16px'}}>Total Price: <b>{props.price.toFixed(2)} €</b></span>
            <p>Continue to checkout</p>

            <Button clicked={props.modalClosed} buttonType="Danger">CANCLE</Button>
            <Button clicked={props.modalContinue} buttonType="Success">CONTINUE</Button>
        </Aux>
    )
};
export default orderSummary;