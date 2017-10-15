import { GitAction } from '../action/github';

const INITIAL_STATE = {
   loader: false,
   repo: null,
   followers: null
};

export function githubReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GitAction.GET_REPOS:
        console.log('2')
            return Object.assign({}, state, { loader: true });

        case GitAction.GET_REPOS_SUCCESS:
            return Object.assign({}, state, { loader: false , repo: action.payload });

        case GitAction.GET_FOLLOWERS:
            return Object.assign({}, state, { loader: true });

        default:
            return state;
    }
}