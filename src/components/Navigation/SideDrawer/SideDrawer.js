import React                from 'react';
import cssStyle             from './SideDrawer.css';
import Logo                 from '../../../containers/Logo/Logo'
import NavigationItems      from '../NavigationItems/NavigationItems';
import Backdrop             from '../../UI/Backdrop/Backdrop'
import Aux                  from '../../../HOC/Auc/Auc';

const sideDrawer = (props) => {
    const attachedClasses = [cssStyle.SideDrawer, props.open ? cssStyle.Open : cssStyle.Close ];

 return (
     <Aux>
         <Backdrop  show = { props.open } clicked={props.closed} />
         <div className = {attachedClasses.join(' ')} >
             <div className = {cssStyle.Logo} >
                 <Logo  />
             </div>
             <nav>
                 <NavigationItems />
             </nav>
         </div>
     </Aux>

 )
};
export default sideDrawer;