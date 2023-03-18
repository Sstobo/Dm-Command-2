import { createStore, combineReducers } from 'redux';
import rootReducer from './Reducers';


const initialState = {
};

const store = createStore(rootReducer, initialState);

export default store;
