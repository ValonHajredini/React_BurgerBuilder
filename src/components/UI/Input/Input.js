import React from 'react';
import cssStyle from './Input.css';
const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case('input'):
            inputElement = <input
                className={cssStyle.InputElement}
                {...props.elementConfig}
                defaultValue={props.value} />;
            break;
        case('textarea'):
            inputElement = <textarea
                className={cssStyle.InputElement}
                {...props.elementConfig}
                defaultValue={props.value}/>;
            break;
        default: 
            inputElement = <input
                className={cssStyle.InputElement}
                {...props.elementConfig}
                defaultValue={props.value}/>;
    }
    return (
      <div className={cssStyle.Input}>
          <label className={cssStyle.Label} htmlFor="">{props.Label.charAt(0).toUpperCase() + props.Label.substr(1)}</label>
          {inputElement}
      </div>
    );
};
export default input;