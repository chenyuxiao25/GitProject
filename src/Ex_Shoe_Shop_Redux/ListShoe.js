import React, { Component } from 'react';
import ItemShoe from './ItemShoe';
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    console.log('<ListShoe/>', this.props);

    return (
      <div className="row">
        {this.props.list.map((shoe) => {
          return (
            <ItemShoe  item={shoe} />
          );
        })}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.listShoe,
  };
};
export default connect(mapStateToProps)(ListShoe);

