// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

// reducers
import { counterReducer } from './reducer/counter';
import { todoReducer } from './reducer/todo';

// Application Reducers
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer
});

export let store = createStore(rootReducer);