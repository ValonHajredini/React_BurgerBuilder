import React                from 'react'
import BurgerIngredient     from './BurgerIngredient/BurgerIngredient';
import { withRouter }       from 'react-router-dom';
import cssStyle             from './Burger.css';
const burger = (props) => {
    // console.log('Burger', props);
    let transformedIngredient = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])]
                .map(( _ , i) => {
                  return <BurgerIngredient key={igKey + i} type={igKey }/>
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        },[]);
    if(transformedIngredient.length === 0) {
        transformedIngredient = <p>Start ading something in your burger</p>
    }
    return (
        <div className={cssStyle.Burger}>
            <BurgerIngredient type="bred-top" />
            {transformedIngredient }
            <BurgerIngredient type="bred-bottom" />
        </div>
    );
};
export default withRouter(burger);