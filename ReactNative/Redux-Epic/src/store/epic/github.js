import { Observable } from 'rxjs';
import { GitAction } from '../action/github';

export class GitEpic {

    static getRepoData(action$) {
        console.log(action$);
        return action$.ofType(GitAction.GET_REPOS)
            .mergeMap(() => {
                console.log('3')                
                return Observable.ajax(`https://api.github.com/users/${action$.payload}/repos`)
                    // .pluck("response")
                    .switchMap((jsonData) => {
                        console.log('4 got data');
                        // console.log("jsondata ==>/ repos ", jsonData)
                        // return Observable.of(GitAction.getRepoSuccessful(jsonData));
                        return Observable.of({
                            type: GitAction.GET_REPOS_SUCCESS,
                            paylaod: jsonData
                        });
                        
                    });
            });
    }

    static getFollowersData(action$) {
        console.log(action$);

        return action$.ofType(GitAction.GET_REPOS_SUCCESS)
            .mergeMap(() => {
                return Observable.ajax(`https://api.github.com/users/${action$.payload}/followers`)
                    .pluck("response")
                    .switchMap((jsonData) => {
                        console.log('5555555555555, got data', jsonData)
                        // console.log("jsondata ==> followers ", jsonData)
                        return Observable.of(GitAction.getFollowersSuccessful(jsonData));
                    });
            });
    }

}