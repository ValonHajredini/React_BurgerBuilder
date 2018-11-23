import React from 'react';
import cssStyle from './Order.css';
 const order = (props) => {
     const ingridients = [];
    for (let ingredientName in props.ingredients) {
        ingridients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });

    }
     const ingredientOutput = ingridients.map(ig => {
         return ( <span
             style={
                 {textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px'}
             }
             key={ig.name}> {ig.name} ( <b> {ig.amount} </b> ) </span>  )
     });
    console.log(ingridients);
    return (
        <div className={cssStyle.Order}>
            <p>Ingredients: { ingredientOutput }</p>
            <p>Price: <b>USD {Number.parseFloat(props.price).toFixed(2)}$</b></p>
        </div>
    );
};
export default order;