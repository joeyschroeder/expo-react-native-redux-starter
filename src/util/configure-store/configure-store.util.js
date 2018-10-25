import { applyMiddleware, createStore } from 'redux';

import { reducers } from '../../ducks/index';
import thunk from 'redux-thunk';

export const configureStore = () => createStore(reducers, applyMiddleware(thunk));
