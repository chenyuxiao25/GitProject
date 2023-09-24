import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import reportWebVitals from './reportWebVitals';
import { rootReducer_Ex_Shoe_Shop_Redux } from './Ex_Shoe_Shop_Redux/redux/rootReducer';
import allReducers from "./Redux/reducers/index"
import { Provider } from 'redux';
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />

</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
