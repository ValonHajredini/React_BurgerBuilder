import React    from 'react';
import cssStyle from './DrawerToggle.css';
const drawerToggle = (props) => (
    <div
        onClick     = { props.clicked }
        className   = { cssStyle.DrawerToggle }
    >
        <div> </div>
        <div> </div>
        <div> </div>
    </div>

);
export default drawerToggle