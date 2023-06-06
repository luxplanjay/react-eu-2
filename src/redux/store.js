import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './accountSlice';
import { profileReducer } from './profileSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  profile: profileReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
