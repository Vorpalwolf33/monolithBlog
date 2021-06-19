import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AuthenticateReducer from './reducers/authenticatedReducer';

const configStore = () => {
    const store = createStore(combineReducers({
        auth: AuthenticateReducer
    }), applyMiddleware(thunk))
    return store;
}

export default configStore;