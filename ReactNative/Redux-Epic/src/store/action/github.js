import { createAction } from 'redux-actions';

export class GitAction {

    static GET_REPOS = 'GET_REPOS';
    static GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
    static GET_FOLLOWERS = 'GET_FOLLOWERS';
    static GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';

    static getRepos(uid) {
        return {
            type: GitAction.GET_REPOS,
            payload: uid
        };
    }

    static getFollowers(uid) {
        return {
            type: GitAction.GET_FOLLOWERS,
            payload: uid
        };
    }

    static getRepoSuccessful(data) {
        console.log('repo success', data);
        return {
            type: GitAction.GET_REPOS_SUCCESS,
            payload: data
        };
    }

    static getFollowersSuccessful(data) {
        console.log('follower success', data);
        return {
            type: GitAction.GET_FOLLOWERS_SUCCESS,
            payload: data
        };
    }
}