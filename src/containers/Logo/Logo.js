import React        from 'react';
import burgerLogo   from '../../assets/images/132 burger-logo.png';
import cssStyle     from './Logo.css';
const logo = (props) => (
    <div
        className   = { cssStyle.Logo }
        style       = { { height: props.height } }
    >
        <img src = { burgerLogo} alt="My logo" />
    </div>
);
export default logo