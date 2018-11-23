import React, { Component } from "react";
// import { BrowserRouter } from 'react-router-dom'
import Layout               from './HOC/Layout/Layout';
// import Aux                  from './HOC/Auc/Auc';
// import BurgerBuilder        from './containers/BurgerBuilder/BurgerBuilder'
import Routes from "./Routes/Routes";
class App extends Component {

  render() {
    return (
          <Layout>
              <Routes/>
          </Layout>
    );
  }
}

export default App;
