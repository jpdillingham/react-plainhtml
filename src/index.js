import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux'

import App from './components/App';

import './style.css';

const Navigation = (state = { id: 'default', content: null }, action) => {
    switch (action.type) {
        case 'NAVIGATE':
            return { id: action.data.id, content: action.data.content };
        default: 
            return state;
    }
}

const Greeting = (state = 'N/A', action) => {
    switch (action.type) {
        case 'HELLO_NAME':
            return 'Hello, ' + action.name + '!';
        case 'HOLA_NAME':
            return 'Hola, ' + action.name + '!';
        default:
            return state;
    }
}

const store = createStore(combineReducers({ greeting: Greeting, navigate: Navigation }));

store.subscribe(() => {
    console.log('state:', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>, 
    document.getElementById('root')
);
