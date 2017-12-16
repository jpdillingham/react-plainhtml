import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux'

import App from './components/App';
import Greeting from './reducers/Greeting';
import Navigate from './reducers/Navigate';

import './style.css';

const store = createStore(combineReducers({ greeting: Greeting, navigate: Navigate }));

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>, 
    document.getElementById('root')
);

store.subscribe(() => {
    console.log('subscription:', store.getState());
});