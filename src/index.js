import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Greeting from './reducers';

import './style.css';

const store = createStore(Greeting);

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>, 
    document.getElementById('root')
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: 'HELLO_NAME', name: 'Bob'});
store.dispatch({ type: 'HOLA_NAME', name: "Roberto"})