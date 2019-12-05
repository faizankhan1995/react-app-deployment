import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css'
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import storeFactory from "./redux/store";
import { Provider } from "react-redux";


const store = storeFactory();

declare global {
  interface Window { Store: any; }
}
window.Store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
