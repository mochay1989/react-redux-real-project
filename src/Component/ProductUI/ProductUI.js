import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  InputBase,
  Grid,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BackspaceIcon from "@material-ui/icons/Backspace";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import {allProducts} from '../../redux/reducer/productsReducer'

import "./ProductUI.css";

const mapStateToProps = (state) => {
  return {
    products: state.allproducts,
  };
};

export class ProductUI extends Component {
  homeClick = () => {
    const homeClickitem = allProducts.filter(
      (product) => product.Category === "IT" || product.Category === "Electric"
    );
    this.setState({
      allProducts: homeClickitem 
    });
  };
  itClick=()=>{
    const itClickitem=allProducts.filter((product)=>product.Category==="IT");
      
    this.setState({
      allProducts:itClickitem
    })
  }
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
                <InputBase placeholder="Search Products" />
              </Paper>
            </div>
            <div>
              <i className="fas fa-wifi iconWifi"></i>
            </div>
          </Toolbar>
        </AppBar>
        <div className="appBody">
          <Grid container>
            <Grid item xs={6} style={{ height: "90vh" }} className="grid1">
              <Grid container>
                <Grid item xs={12} style={{ height: "58vh" }} className="grid1">
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
                </Grid>
                <Grid item xs={12} style={{ height: "32vh" }} className="grid1">
                  <Grid container style={{ height: "28vh", padding: "10px" }}>
                    <Grid item xs={6} className="grid1">
                      <button
                        className="customerAccountBox"
                        style={{ width: "100%", height: "7vh" }}
                      >
                        <AccountBoxIcon className="accountBoxIcon" />
                        Customer
                      </button>
                      <br />
                      <button style={{ width: "100%", height: "21vh" }}>
                        <div className="circle">
                          <ArrowForwardIosIcon
                            style={{ color: "#fff", paddingTop: "10px" }}
                          />
                        </div>
                        Payment
                      </button>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      className="grid1"
                      style={{ width: "100%", height: "28vh" }}
                    >
                      <button className="buttonNumber">1</button>
                      <button className="buttonNumber">2</button>
                      <button className="buttonNumber">3</button>
                      <button className="buttonNumber">Qty</button>
                      <br />
                      <button className="buttonNumber">4</button>
                      <button className="buttonNumber">5</button>
                      <button className="buttonNumber">6</button>
                      <button className="buttonNumber">Disc</button>
                      <br />
                      <button className="buttonNumber">7</button>
                      <button className="buttonNumber">8</button>
                      <button className="buttonNumber">9</button>
                      <button className="buttonNumber">Price</button>
                      <br />
                      <button className="buttonNumber">+/-</button>
                      <button className="buttonNumber">0</button>
                      <button className="buttonNumber">.</button>
                      <button className="buttonNumber">
                        <BackspaceIcon style={{ width: "", height: "" }} />
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
                      <a href="#" className="iconText" onClick={this.electronicClick}>
                        <ShoppingBasketIcon />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div className="cardphoto">
                    <div>
                      {this.props.products.map((product) => {
                        return (
                          <Card
                            style={{ height: "38vh", width: "15vw" }}
                            className="cardphotoeach"
                          >
                            <CardActionArea>
                              <CardMedia
                                image={product.image}
                                title=""
                                style={{
                                  height: "30vh",
                                }}
                              />

                              <CardContent
                                style={{ backgroundColor: "#226089" }}
                              >
                                <Typography style={{ color: "#fff" }}>
                                  {product.title}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              {/* <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button> */}
                            </CardActions>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
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

export default connect(mapStateToProps)(ProductUI);
