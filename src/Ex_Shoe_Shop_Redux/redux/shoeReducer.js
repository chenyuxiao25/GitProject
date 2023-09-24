import dataShoe from "../data_shoe"

const initialState= {
    listShoe :dataShoe,
}

export default (state = initialState,action) => {

  return{...state}
  }

