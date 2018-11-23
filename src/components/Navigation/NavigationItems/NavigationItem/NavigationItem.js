import React from 'react';
import { NavLink } from  'react-router-dom';
import cssStyle from './NavigationItem.css'
const navigationItem = (props) => (
    <li className={cssStyle.NavigationItem}>
        <NavLink exact={props.exact} to={props.link} activeClassName={cssStyle.active}>{props.children}</NavLink>
    </li>
);
export default navigationItem