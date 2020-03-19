import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import registrationReducer from './reducers/registrationReducer';
import loginReducer from './reducers/loginReducer';

let reducers  = combineReducers({
  registration: registrationReducer,
  login: loginReducer
});

let store = createStore(reducers);

export default store;
