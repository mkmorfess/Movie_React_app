import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from '../reducers/search';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            search: searchReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}