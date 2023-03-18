import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger"
// import thunk from 'redux-thunk';

import rootReducer from './products/reducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;