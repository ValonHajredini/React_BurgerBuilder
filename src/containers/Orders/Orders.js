import React, { Component } from 'react';
import Order from '../../components/Order/Order';
// import Aux from '../../HOC/Auc/Auc';
import axios from '../../axios-orders';
import cssStyle from './Orders.css';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };
    componentDidMount(){
        axios.get('/orders.json').then(res => {

            const fetchedOrders = [];
            for(let key  in res.data) {
                fetchedOrders.push({
                    id: key,
                    ...res.data[key]
                })
            }
            console.log(fetchedOrders);
            this.setState({loading: false, orders: fetchedOrders})
        })
        .catch(err => {
            this.setState({loading: false});
        })
    }
    render () {
        return (
            <div className={cssStyle.Orders}>
                {/*<p>Orders</p>*/}
                {this.state.orders.map((order, index) => {
                    return (<Order
                        key         ={order.id}
                        costumer    ={order.costumer}
                        delivery    ={order.delivery}
                        price       ={+order.price}
                        ingredients ={order.ingredients}
                    />);
                })}


            </div>

        );
    }
}
export default withErrorHandler(Orders, axios);