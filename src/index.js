import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux'

import App from './components/App';

import './style.css';

const initialState = {
    navigation: {
        id: 'default',
        content: null
    }
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case 'NAVIGATE':
            return { navigation: { id: action.data.id, content: action.data.content }};
        default: 
            return state;
    }
}

const store = createStore(navigation);

store.subscribe(() => {
    console.log('state changed:', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>, 
    document.getElementById('root')
);
