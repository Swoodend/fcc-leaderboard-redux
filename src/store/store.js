import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userData } from '../reducers/reducers';

let store = createStore(userData, applyMiddleware(logger, thunk));

export default store;