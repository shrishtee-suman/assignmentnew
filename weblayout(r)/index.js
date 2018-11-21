import React from 'react';
import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import combineReducers from './src/Reducers/rootReducer.js'
import App from './src/app';

 //const store=createStore(combineReducers,applyMiddleware(thunk));
//  const app =<Provider store={ store }>
//                 <App/>
//              </Provider>

ReactDOM.render(<App/>,document.getElementById('root'));

