import React    from 'react';
import cssStyle from './Backdrop.css';
const backDrop = (props) => (
    props.show ? ( <div className = { cssStyle.Backdrop } onClick = { props.clicked } />): null );

export default backDrop