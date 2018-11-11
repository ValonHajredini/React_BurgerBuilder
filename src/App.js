import React, { Component } from "react";
import Layout from './components/Layout/Layout';
import Aux from './HOC/Auc';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <Aux>
          <Layout>
              <BurgerBuilder />
          </Layout>
      </Aux>
    );
  }
}

export default App;
