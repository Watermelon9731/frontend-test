import { applyMiddleware, combineReducers, createStore } from 'redux';
// Redux-Thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer'

const rootReducer = combineReducers({
    movieReducer: movieReducer,
});

const middleware = [
    reduxThunk,
];

const customCompose = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, customCompose);