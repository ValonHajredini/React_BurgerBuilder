import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import cssStyle from './ContactDate.css';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner              from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };
    orderHandler = (event) => {
        event.preventDefault();
          this.setState({loading: true});
          const order = {
              ingredients: this.props.ingredients,
              price: this.props.price,
              costumer: {
                  name: 'Valon Hajredini',
                  address: {
                      street: 'Gjakov Berjah',
                      zipCode: 50000,
                      country: 'Germanu',
                  },
                  emailAddress: 'test@test.com',
              },
              delivery: 'fastest'
          };
        axios.post('/orders.json', order)
            .then(rezult => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({loading: false});

            });
        console.log(this.props.ingredients)
    };
    render() {
        let form  = (
            <form action="#">
                <input type="text" className={cssStyle.Input} name="name" placeholder="Your Eame"/>
                <input type="text" className={cssStyle.Input} name="email" placeholder="Your Email"/>
                <input type="text" className={cssStyle.Input} name="street" placeholder="Street"/>
                <input type="text" className={cssStyle.Input} name="postalCode" placeholder="postalCode"/>
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading === true) {
          form = (<Spinner /> );
        }
        return (
            <div className={cssStyle.ContactDate}>
                <h4>Enter yout contact date </h4>
                {form }
            </div>
        )
    }
}

export default ContactData;
// export default withRouter(ContactData);