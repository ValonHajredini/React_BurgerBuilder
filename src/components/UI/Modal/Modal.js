import React, { Component }     from 'react';
import cssStyle                 from './Modal.css';
import Backdrop                 from '../Backdrop/Backdrop';
import Aux                      from '../../../HOC/Auc/Auc';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
       return nextProps.show !== this.props.show
    }
    componentWillUpdate() {
        console.log('[Modal] componentWillUpdate()');
    }
    render() {
        return (
            <Aux>
                <Backdrop
                    show    = { this.props.show }
                    clicked = { this.props.modalClosed }
                />
                <div
                    style       = { { transform: this.props.show  ? 'translateY(0)': 'translateY(-100vh)', opacity: this.props.show ? '1': '0' }}
                    className   = { cssStyle.Modal } >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Modal