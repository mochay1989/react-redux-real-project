import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  InputBase,
  Grid,
  Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import "./ProductUI.css";

export class ProductUI extends Component {
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
            <Grid item xs={6} style={{ height: "100vh" }} className="grid1">
              <Grid container>
                <Grid item xs={12} style={{ height: "50vh" }} className="grid1">
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
                <Grid
                  item
                  xs={12}
                  style={{ height: "50vh" }}
                  className="grid1"
                ></Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className="grid1">
              <Grid container>
                <Grid
                  item
                  xs={2}
                  className="grid1"
                  style={{ height: "7vh", }}
                >
                  <paper>
                    <a href="#">
                      <HomeIcon />
                    </a>
                  </paper>
                </Grid>

                <Grid item xs={5} className="grid1">
                  <a href="#" className="iconText">
                    IT
                  </a>
                </Grid>

                <Grid item xs={5} className="grid1">
                  <a href="#" className="iconText">
                    Electronic
                  </a>
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

export default ProductUI;
