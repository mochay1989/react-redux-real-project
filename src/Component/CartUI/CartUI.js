import React, { Component } from 'react';
import './CartUI.css';
import { connect } from 'react-redux';
import { currentIDid } from '../../redux/action/productAction';

const mapStateToProps = (state) => {
  return {
    cart: state.cartData,
    currentid: state.currentid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentId: (id) => dispatch(currentIDid(id)),
  };
};

export class CartUI extends Component {
  changeCurrentId = (id) => {
    this.props.setCurrentId(id);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.cart.map((cart) => {
            return (
              <div
                className="cartUI"
                style={
                  this.props.currentid === cart.id
                    ? { color: 'blue', backgroundColor: 'yellow' }
                    : { color: 'black' }
                }
                onClick={() => this.changeCurrentId(cart.id)}
              >
                <div>
                  <span>{cart.title}</span> <br></br>
                  <span>
                    at {cart.quantity} at ${cart.price} with {cart.disc}{' '}
                    discount
                  </span>
                </div>

                <div>
                  <span>${cart.quantity * cart.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartUI);
