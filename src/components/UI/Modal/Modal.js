import React from 'react';
import cssStyle from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../HOC/Auc';
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}
            className={cssStyle.Modal}>
            {props.children}
        </div>
    </Aux>

);

export default modal