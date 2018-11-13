import React    from 'react';
import cssStyle from './Button.css';
const button = (props) => (
    <button
        className   = { [ cssStyle.Button, cssStyle[props.buttonType ] ].join(' ') }
        onClick     = { props.clicked }
    >{props.children}</button>
);

export default button;