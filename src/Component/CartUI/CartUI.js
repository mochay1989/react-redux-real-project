import React, { Component } from 'react'
import './CartUI.css';

export class CartUI extends Component {
    render() {
        return (
            <div>
               <div>
               {this.props.cart.map((cart)=>{
                   return( 
                      
                       <div>
                            key={cart.id}
                     <h1>{cart.title}</h1> 
                     <h1>{cart.id}</h1> 
                     console.log({cart.title})

                       </div>
                   )
               })}
            </div>
            </div>
        )
    }
}

export default CartUI
