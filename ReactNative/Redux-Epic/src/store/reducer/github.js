import { GitAction } from '../action/github';

const INITIAL_STATE = {
   repo: null,
   followers: null
};

export function githubReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GitAction.GET_REPOS:
            return Object.assign({}, state, { count: state.count + 1 });

        case GitAction.GET_FOLLOWERS:
            return Object.assign({}, state, { count: state.count - 1 });

        default:
            return state;
    }
}