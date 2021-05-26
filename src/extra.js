clickProducts = (id) => {
    const clickitem = allProducts.find((product) => product.id === id);
    const cart = this.props.cart;

    if (cart.find((item) => item.id === id)) {
    } else {
      console.log(clickitem);
      this.props.addToCart(clickitem);
    }
  };