import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '../src/components/App';
import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux';
import productReducer from './store/reducers/productReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=legacy_createStore(productReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
