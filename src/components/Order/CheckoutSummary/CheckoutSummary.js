import React from 'react';
import Burger from '../../Burger/Burger';
import cssStyle from './CheckoutSummary.css'
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={cssStyle.CheckoutSummary}>
            <h1 style={{textAlign: 'center'}}>I hope it tastes well! </h1>
            <div style={{width: '100%',  margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button buttonType="Danger"
                    clicked={props.checkoutCancel}
            >Cancel</Button>
            <Button buttonType="Success"
                    clicked={props.checkoutContinue}
            >Continue</Button>
        </div>
)
};
export default checkoutSummary;