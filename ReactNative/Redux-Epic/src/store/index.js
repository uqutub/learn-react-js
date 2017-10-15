// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

// reducers
import { counterReducer } from './reducer/counter';
import { todoReducer } from './reducer/todo';
import { githubReducer } from './reducer/github';


// actions
import { GitEpic } from './epic/github';

// Application Reducers
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer,
    gitReducer: githubReducer
});

export const rootEpic = combineEpics(
    GitEpic.getRepoData,
    GitEpic.getFollowersData
    // more epics functions go here
)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);

export let store = createStore(rootReducer, createStoreWithMiddleware);