import { createAction } from 'redux-actions';

export class CounterAction {

    static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER = 'DECREMENT_COUNTER';
    static NULL = 'NULL';

    static increment() {
        return {
            type: CounterAction.INCREMENT_COUNTER,
        };
    }

    static decrement() {
        return {
            type: CounterAction.DECREMENT_COUNTER,
        };
    }


    // static dummy = createAction(
    //     CounterAction.NULL,
    //     payload => payload
    // );

}