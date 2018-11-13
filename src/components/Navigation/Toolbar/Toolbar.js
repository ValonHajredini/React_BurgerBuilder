import React            from 'react';
import cssStyle         from './Toolbar.css'
import Logo             from '../../../containers/Logo/Logo';
import NavigationItems  from '../NavigationItems/NavigationItems'
import DrawerToggle     from '../../UI/DrawerToggle/DrawerToggle';

const tolbar = (props) => (
    <header className = { cssStyle.Toolbar } >
        <DrawerToggle clicked = { props.drawerToggleClicked } />
        <div className={ cssStyle.Logo } >
            <Logo/>
        </div>
        <nav className = { cssStyle.DesktopOnly } >
            <NavigationItems  />
        </nav>
    </header>
);
export default tolbar;