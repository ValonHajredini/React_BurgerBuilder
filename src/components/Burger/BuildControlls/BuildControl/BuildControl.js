import React    from 'react';
import cssStyle from './BuildControl.css'
const buildControl = (props) => (
    <div className      ={cssStyle.BuildControl}>
        <div className  ={cssStyle.Label}>{props.label}</div>
        <button
            onClick     ={props.removed}
            className   ={cssStyle.Less}
            disabled    ={props.disabled}>Less</button>
        <button
            onClick     ={props.added}
            className   ={cssStyle.More}>more</button>
    </div>
);

export default buildControl;