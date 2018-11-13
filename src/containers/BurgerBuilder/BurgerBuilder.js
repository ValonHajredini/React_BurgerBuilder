import React, { Component } from 'react';
import Aux                  from '../../HOC/Auc/Auc';
import Burger               from '../../components/Burger/Burger'
import BuildControls        from '../../components/Burger/BuildControlls/BuildControls';
import Modal                from '../../components/UI/Modal/Modal';
import OrderSummary         from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad:  .5,
    cheese: .4,
    meat:   1.3,
    bacon:  .7
};
class BurgerBuilder extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: {
                salad:  0,
                bacon:  0,
                cheese: 0,
                meat:   0
            },
            totalPrice:     .3,
            purchasable:    false,
            purchasing:     false
        }
    }
    updatePurchaseState = (updatedIngredients) => {
        const ingreadients = {...updatedIngredients};
        let sum  = Object.keys(ingreadients).map((igKey) => {
                return ingreadients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0});
    };
    addIngredientHandler = (type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        // console.log(newPrice);
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState (updatedIngredients);
    };
    purchaseHandler =() => {
        this.setState({purchasing: true})
    };
    purchaseCancelHandler = () => {
      this.setState({purchasing: false})
    };
    purchaseContinueHandler = () => {
      alert('Continued');
    };

    removeIngredientHandler = (type ) => {

        const oldCount              = this.state.ingredients[type];
        if(oldCount <= 0)  return;
        const updatedCount          = oldCount - 1;
        // console.log(updatedCount);
        const updatedIngredients    = {...this.state.ingredients};
        updatedIngredients[type]    = updatedCount;
        const priceDeduction        = INGREDIENT_PRICES[type];
        const oldPrice              = this.state.totalPrice;
        const newPrice              = oldPrice - priceDeduction;
        this.setState(
                        {ingredients: updatedIngredients, totalPrice: newPrice}
                    );
        this.updatePurchaseState ();
    };

    render () {
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <=0;
        }
        return (
            <Aux>
                <Modal
                    show        = { this.state.purchasing }
                    modalClosed = { this.purchaseCancelHandler } >
                    <OrderSummary
                        price               = { this.state.totalPrice }
                        ingredients         = { this.state.ingredients }
                        modalClosed         = { this.purchaseCancelHandler }
                        modalContinue       = { this.purchaseContinueHandler }


                    >

                    </OrderSummary>
                </Modal>
                <Burger ingredients={ this.state.ingredients} />
                <BuildControls
                    disabled            = { disableInfo }
                    price               = { this.state.totalPrice }
                    ingredientAdded     = { this.addIngredientHandler }
                    ingredientRemove    = { this.removeIngredientHandler }
                    purchasable         = { this.state.purchasable }
                    orderd              = { this.purchaseHandler }

                />
            </Aux>
        );
    };
}
export default BurgerBuilder