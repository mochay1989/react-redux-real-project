import React, { Component } from 'react'
import './ProductDisplay.css';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    CardActions,
    Typography,
  } from "@material-ui/core";
export class ProductDisplay extends Component {
    render() {
        return (
            <div>
                <div className="cardphoto">
                    <div>
                      {this.props.products.map((product) => {
                        return (
                          <Card
                            style={{ height: "38vh", width: "15vw" }}
                            className="cardphotoeach"
                            
                            key={product.id}
                            onClick={()=>this.props.clickProducts(product.id)}
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
            </div>
        )
    }
}

export default ProductDisplay


