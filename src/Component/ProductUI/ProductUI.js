import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  InputBase,
  Grid,
  Divider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BackspaceIcon from '@material-ui/icons/Backspace';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';
import { allProducts } from '../../redux/reducer/productsReducer';
import {
  setProducts,
  searchText,
  cartShow,
  addItemToCart,
  changeItemToCart,
} from '../../redux/action/productAction';

import './ProductUI.css';
import CartUI from '../CartUI/CartUI';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { changeItem } from '../../redux/type/productType';

const mapStateToProps = (state) => {
  return {
    products: state.allData,
    cart: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
    searchText: (products) => dispatch(searchText(products)),
    addToCart: (product) => dispatch(addItemToCart(product)),
    changeItemToCart: (products) => dispatch(changeItemToCart(products)),
  };
};

export class ProductUI extends Component {
  searchText = (value) => {
    const searchValue = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    this.props.searchText(searchValue);
  };
  homeClick = () => {
    const homeClickitem = allProducts.filter(
      (product) => product.Category === 'IT' || product.Category === 'Electric'
    );
    this.props.setProducts(homeClickitem);
  };
  itClick = () => {
    const itClickitem = allProducts.filter(
      (product) => product.Category === 'IT'
    );

    this.props.setProducts(itClickitem);
  };
  electronicClick = () => {
    const electronicClickitem = allProducts.filter(
      (product) => product.Category === 'Electric'
    );

    this.props.setProducts(electronicClickitem);
  };
  clickProducts = (id) => {
    const clickitem = allProducts.find((product) => product.id === id);
    const cart = this.props.cart;
    console.log(cart, id);
    const item = cart.find((item) => item.id === id);
    console.log(item);
    if (!item) this.props.addToCart({ ...clickitem, quantity: 1, disc: 0 });
    else this.props.changeItemToCart({ ...item, quantity: item.quantity + 1 });
  };

  render() {
    return (
      <div>
        <AppBar className="appBar">
          <Toolbar className="navBar">
            <div>
              <Typography className="headerTitle">Odoo</Typography>
            </div>
            <div>
              <span className="titleOrders">Orders &nbsp; &nbsp;</span>
              <Paper>
                <InputBase
                  placeholder="Search Products"
                  onChange={(e) => this.searchText(e.target.value)}
                />
              </Paper>
            </div>
            <div>
              <i className="fas fa-wifi iconWifi"></i>
            </div>
          </Toolbar>
        </AppBar>
        <div className="appBody">
          <Grid container>
            <Grid item xs={6} style={{ height: '90vh' }} className="grid1">
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ height: '58vh', overflowY: 'auto' }}
                  className="grid1"
                >
                  <div className="order-container">
                    <div className="order">
                      <div className="order-empty">
                        <i
                          role="img"
                          aria-label="Shopping cart"
                          title="Shopping cart"
                          class="fa fa-shopping-cart"
                        ></i>
                        <h1>This order is empty</h1>
                      </div>
                    </div>
                  </div>
                  <CartUI
                    cart={this.props.cart}
                    title={this.props.cart.title}
                    id={this.props.cart.id}
                    price={this.props.price}
                    quantity={this.props.quantity}
                    disc={this.props.disc}
                  />
                </Grid>
                <Grid item xs={12} style={{ height: '32vh' }} className="grid1">
                  <Grid container style={{ height: '28vh', padding: '10px' }}>
                    <Grid item xs={6} className="grid1">
                      <button
                        className="customerAccountBox"
                        style={{ width: '100%', height: '7vh' }}
                      >
                        <AccountBoxIcon className="accountBoxIcon" />
                        Customer
                      </button>
                      <br />
                      <button style={{ width: '100%', height: '21vh' }}>
                        <div className="circle">
                          <ArrowForwardIosIcon
                            style={{ color: '#fff', paddingTop: '10px' }}
                          />
                        </div>
                        Payment
                      </button>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      className="grid1"
                      style={{ width: '100%', height: '28vh' }}
                    >
                      <button className="buttonNumber">1</button>
                      <button className="buttonNumber">2</button>
                      <button className="buttonNumber">3</button>
                      <button className="buttonNumber1">Qty</button>
                      <br />
                      <button className="buttonNumber">4</button>
                      <button className="buttonNumber">5</button>
                      <button className="buttonNumber">6</button>
                      <button className="buttonNumber1">Disc</button>
                      <br />
                      <button className="buttonNumber">7</button>
                      <button className="buttonNumber">8</button>
                      <button className="buttonNumber">9</button>
                      <button className="buttonNumber1">Price</button>
                      <br />
                      <button className="buttonNumber">+/-</button>
                      <button className="buttonNumber">0</button>
                      <button className="buttonNumber">.</button>
                      <button className="buttonNumber1">
                        <BackspaceIcon style={{ width: '', height: '' }} />
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className="grid1">
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={2} className="grid1 gridText">
                      <paper>
                        <a href="#" onClick={this.homeClick}>
                          <HomeIcon />
                        </a>
                      </paper>
                    </Grid>

                    <Grid item xs={5} className="grid1 gridText">
                      <a href="#" className="iconText" onClick={this.itClick}>
                        <DesktopMacIcon />
                      </a>
                    </Grid>

                    <Grid item xs={5} className="grid1 gridText">
                      <a
                        href="#"
                        className="iconText"
                        onClick={this.electronicClick}
                      >
                        <ShoppingBasketIcon />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ProductDisplay
                    products={this.props.products}
                    image={this.props.products.image}
                    title={this.props.products.title}
                    id={this.props.products.id}
                    clickProducts={this.clickProducts}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductUI);
