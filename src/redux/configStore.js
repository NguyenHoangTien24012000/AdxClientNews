import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import AdxTypeReducer from './reducer/AdxTypeReducer'
import AdxDemoReducer from './reducer/AdxDemoReducer';
import AdxContactReducer from './reducer/AdxContactReducer';
const rootReducer = combineReducers({
    AdxTypeReducer,
    AdxDemoReducer,
    AdxContactReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))