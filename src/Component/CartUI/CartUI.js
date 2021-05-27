import React, { Component } from "react";
import "./CartUI.css";
import { connect } from "react-redux";

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
          {this.props.cart.map((cart,id) => {
            return (
              <div className="cartUI" style={
                this.props.currentid === id
                  ? { color: "blue", backgroundColor: "yellow" }
                  : { color: "black" }}>
                <div
               
              
                >
                  <span>{cart.title}</span> <br></br>
                  <span>
                    at {cart.quantity} at ${cart.price} with {cart.disc} discount
                  </span>
                </div>

                <div>
                 
                  <span>${cart.quantity*cart.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartUI);
