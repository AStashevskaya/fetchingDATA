import { createStore, applyMiddleware } from 'redux';
import dataReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(dataReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)))

export default store;