import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
