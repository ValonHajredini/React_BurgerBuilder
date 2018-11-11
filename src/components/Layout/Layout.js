import React from 'react';
import Aux from '../../HOC/Auc';
import cssStyle from './Layout.css';
const layout = (props) => (
    <Aux>

        <div>Toolbar, sideDrawer, Backdrop</div>
        <main className={cssStyle.Content}> {props.children} </main>
    </Aux>
);
export default layout;
