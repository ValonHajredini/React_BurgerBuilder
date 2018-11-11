import React from 'react';
import cssStyle from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controlls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={cssStyle.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)} €</strong></p>
        {controlls.map(bc => (
            <BuildControl
                key         ={ bc.label}
                label       ={ bc.label}
                added       ={() => props.ingredientAdded(bc.type)}
                removed     ={() => props.ingredientRemove(bc.type)}
                disabled    ={ props.disabled[bc.type]}

            />
        ))}
        <button
            className={cssStyle.OrderButton}
            disabled={!props.purchasable}
            onClick={props.orderd}>Order Now</button>
    </div>
);

export default buildControls;