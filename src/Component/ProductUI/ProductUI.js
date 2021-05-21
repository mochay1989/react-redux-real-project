import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  InputBase,
  Grid,
  Divider
} from "@material-ui/core";
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
           <span>Orders &nbsp; &nbsp;</span>
              <Paper  >
                <InputBase placeholder="Search Products" />
              </Paper>
            </div>
            <div>
            <i className="fas fa-wifi iconWifi" ></i>
            </div>
          </Toolbar>
        </AppBar>
        <div class="appBody">
     
      <Grid container className="grid">
        <Grid item xs={6} style={{height:"50vh"}} className="grid1">
          <Paper >6</Paper>
        </Grid>
        <Grid tiem xs={6} className="grid1">
          <Paper >6</Paper>
        </Grid>
      </Grid>
      <Divider />
     
      
        
      </div>
  
        
        
       
      </div>
    );
  }
}

export default ProductUI;
