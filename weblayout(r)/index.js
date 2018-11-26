import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/Reducers/index';
import App from './src/app';

let middleWare = () => {
    let _compose = compose;
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
        _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    return _compose(applyMiddleware(thunk));
}
 const store=createStore(rootReducer,middleWare());

 
 const app =<Provider store={ store }>
              <App/>
           </Provider>

ReactDOM.render(app,document.getElementById('root'));

