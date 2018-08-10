import React, { Component } from 'react';
import ReactPaymentRequest from 'react-payment-request';
import logo from './logo.svg';
import './App.css';

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handlePayment = this.handlePayment.bind(this);
      }

    render() {
        const details = {total: {
            label: 'Total',
            amount:{
                currency: 'USD',
                value: 100
            }
        }};
        const methodData = [{
            supportedMethods: 'basic-card',
          }];
        const options = {};
        return (
             <div className="form-group">
            
                <div className="form-group">
                    <label htmlFor="amount">Amount (in USD):</label>
                    <input className="form-control" id="amount" type="text" placeholder="$100"/><br/>
                </div>
                <div className="form-group">
                    <label htmlFor="merchant">Merchant:</label>
                    <input className="form-control" id="merchant" type="text" name="merchant" placeholder="Contoso"/><br/>
                </div>
                <button onClick={this.handlePayment} className="btn btn-primary">Buy</button>
            
        </div>
            // <ReactPaymentRequest
            //     details={details}
            //     methodData={methodData}
            //     onError={error => console.log('💩', error)}
                
            //     onSuccess={result => result.complete('success')}
            //     options={options}
            // >
            // <button>Pay</button>
            // </ReactPaymentRequest>
                        
        );
    }

    handlePayment() {
        console.error('Done~!');

        if (window.PaymentRequest) {
            // Use Payment Request API

            const supportedPaymentMethods = [
                {
                  supportedMethods: 'basic-card',
                }
            ];
            const paymentDetails = {
            total: {
                label: 'Total',
                amount:{
                    currency: 'USD',
                    value: 100
                }
            }
            };
            // Options isn't required.
            const options = {};
            
            const request = new window.PaymentRequest(
                supportedPaymentMethods,
                paymentDetails,
                options
            );
            
            console.error('Done~!');
              // Call when you wish to show the UI to the user.
            return request.show()
                .then((result) => {
                    console.error('Done~!');
                    return result.complete('success');
                })
                .catch((err) => {
                    console.error('PaymentRequest error: ', err);
            });
        } 
    } 
}

export default Checkout;
