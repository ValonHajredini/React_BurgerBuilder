import React, { Component } from "react";
import Layout               from './HOC/Layout/Layout';
import Aux                  from './HOC/Auc/Auc';
import BurgerBuilder        from './containers/BurgerBuilder/BurgerBuilder'
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
