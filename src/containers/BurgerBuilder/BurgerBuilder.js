import React, { Component } from 'react';
import Aux                  from '../../HOC/Auc/Auc';
import Burger               from '../../components/Burger/Burger'
import BuildControls        from '../../components/Burger/BuildControlls/BuildControls';
import Modal                from '../../components/UI/Modal/Modal';
import OrderSummary         from '../../components/Burger/OrderSummary/OrderSummary';
import axios                from '../../axios-orders';
import Spinner              from '../../components/UI/Spinner/Spinner';
import WithErrorHandller    from '../../HOC/withErrorHandler/withErrorHandler';
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
            ingredients: null,
            totalPrice:     .3,
            purchasable:    false,
            purchasing:     false,
            loading:        false
        }
    }
    componentDidMount() {
        // console.log(this.props);
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
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

        const queryParams = [];
        // const queryParams = {...this.state.ingredients};
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+ this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?'+queryString
        });
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
        let orderSummary = null;
        if (this.state.ingredients) {

        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        let burger =  <Spinner/>;
        if (this.state.ingredients) {
            burger =  <Aux>
                <Burger ingredients={ this.state.ingredients} />
                <BuildControls
                    disabled            = { disableInfo }
                    price               = { this.state.totalPrice }
                    ingredientAdded     = { this.addIngredientHandler }
                    ingredientRemove    = { this.removeIngredientHandler }
                    purchasable         = { this.state.purchasable }
                    orderd              = { this.purchaseHandler }
                />
            </Aux>;
            orderSummary = <OrderSummary
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                modalClosed={this.purchaseCancelHandler}
                modalContinue={this.purchaseContinueHandler}
            />;
        }
        if(this.state.loading) {
            orderSummary = <Spinner/>;
        }
        return (
            <Aux>
                <Modal
                    show        = { this.state.purchasing }
                    modalClosed = { this.purchaseCancelHandler } >
                    { orderSummary }
                </Modal>

                {burger}

            </Aux>
        );
    };
}
export default  WithErrorHandller(BurgerBuilder,axios);