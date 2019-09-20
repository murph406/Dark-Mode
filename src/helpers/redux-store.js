import MainReducer from '../reducers/main-reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(MainReducer, applyMiddleware(thunk))