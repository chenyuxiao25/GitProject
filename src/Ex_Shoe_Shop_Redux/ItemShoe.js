import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCartAction } from './redux/action/shoeAction';
import { ADD_TO_CART } from './redux/constants/shoeContants';

class ItemShoe extends Component {
  render() {
    let { image, name, price } = this.props.item;
    return (
      <div className="col-3 p-4">
        <div className="card ">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            <a
              onClick={() => {
                this.props.handleOnclick(this.props.item);
              }}
              href="#"
              className="btn btn-primary"
            >
              Add to card
            </a>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handlePushToCart: (shoe) => {
      // let action = {
      //   type: ADD_TO_CART,
      //   payload: shoe,
      // };
      // dispatch(action);

      dispatch(addToCartAction(shoe));
    },
  };
};

// callback js

export default connect(null, mapDispatchToProps)(ItemShoe);

let introduce = (username, dispatch) => {
  console.log(`  🚀: introduce -> username`, username);
  let action = {
    type: ADD_TO_CART,
    payload: "shoe",
  };

  dispatch("Si2");
  // sayHello("bob")
};

let sayHello = (name) => {
  console.log("hello", name);
};

sayHello("Si1");

introduce("alice", sayHello);
