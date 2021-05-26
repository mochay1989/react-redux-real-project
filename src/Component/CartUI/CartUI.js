import React, { Component } from 'react';
import './CartUI.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    cart: state.cartData,
  };
};

export class CartUI extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.cart.map((cart) => {
            return (
              <div>
                <h1>{cart.title}</h1>
                <h1>{cart.price}</h1>
              </div>
            );
          })}
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartUI);
