import React            from 'react'

import NavigationItem   from './NavigationItem/NavigationItem'
import cssStyle         from './NavigationItems.css';
const navigationItems = (props) => (
    <ul className = {  cssStyle.NavigationItems }>
        <NavigationItem link={'/'} exact> Burger Builder </NavigationItem>
        <NavigationItem link={'/orders'} exact >Orders </NavigationItem>
    </ul>
);
export default navigationItems;