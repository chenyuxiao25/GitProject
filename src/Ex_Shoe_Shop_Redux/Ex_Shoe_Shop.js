import React, { Component } from 'react';
import Cart from './Cart';
import { dataShoe } from './data_shoe';
import ListShoe from './ListShoe';

export default class Ex_Shoe_Shop extends Component {
  state = {
    listShoe: dataShoe,
    cart: [],
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    // th1 : sp chưa có trong giỏ hàng => push
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }
    // th2 : sp đã có trong giỏi hàng => update số lượng
    //  shoe.soLuong
    this.setState({
      cart: cloneCart,
    });
  };

  
  render() {
    console.log('props', this.props);
    // props.chidren : nội dung nằm giữ 2 thẻ đóng và mở
    return (
      <div className="container">
        <h2>{this.props.children}</h2>
        <Cart />
        <ListShoe/>
      </div>
    );
  }
}
