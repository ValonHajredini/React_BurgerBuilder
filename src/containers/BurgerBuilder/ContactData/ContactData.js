import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import cssStyle from './ContactDate.css';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner              from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street...'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email...'
                },
                value: ''
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                        ]
                },
                value: ''
            }
        },
        loading: false
    };
    orderHandler = (event) => {
        event.preventDefault();
          this.setState({loading: true});
          const order = {
              ingredients: this.props.ingredients,
              price: this.props.price,

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
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        // console.log('Value: ', formElementsArray[6].config.value);
        let form  = (
            <form action="#">
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        Label={formElement.id}
                    />
                ))}
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