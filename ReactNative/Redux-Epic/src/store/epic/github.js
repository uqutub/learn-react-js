import { Observable } from 'rxjs';
import { GitAction } from '../action/github';

export class GitEpic {

    static getRepoData(action$) {
        console.log(action$);
        return action$.ofType(GitAction.GET_REPOS)
            .mergeMap(() => {
                return Observable.ajax(`https://api.github.com/users/${action$.payload}/repos`)
                    .pluck("response")
                    .switchMap((jsonData) => {
                        // console.log("jsondata ==> repos ", jsonData)
                        return Observable.of(GitAction.getRepoSuccessful(jsonData));
                    });
            });
    }

    static getFollowersData(action$) {
        console.log(action$);

        return action$.ofType(GitAction.GET_FOLLOWERS)
            .mergeMap(() => {
                return Observable.ajax(`https://api.github.com/users/${action$.payload}/followers`)
                    .pluck("response")
                    .switchMap((jsonData) => {
                        // console.log("jsondata ==> followers ", jsonData)
                        return Observable.of(GitAction.getFollowersSuccessful(jsonData));
                    });
            });
    }

}