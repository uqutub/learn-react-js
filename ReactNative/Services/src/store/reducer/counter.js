import { CounterAction } from '../action/counter';

const INITIAL_STATE = {
    count: 0,
};

export function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case CounterAction.INCREMENT_COUNTER:
            return Object.assign({}, state, { count: state.count + 1 });

        case CounterAction.DECREMENT_COUNTER:
            return Object.assign({}, state, { count: state.count - 1 });

        default:
            return state;
    }
}