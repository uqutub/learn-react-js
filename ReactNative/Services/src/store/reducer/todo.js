import { TodoAction } from '../action/todo';

const INITIAL_STATE = {
    todo: [
        { id: 0, text: 'Todo Getting from Store ---', status: false },
        { id: 1, text: 'Todo2 .....', status: false }
    ]
 };

export function todoReducer(state = INITIAL_STATE, action) {
    let newState = null;
    switch (action.type) {

        case TodoAction.ADD_TODO:
            arr = [...state.todo, action.payload];
            return Object.assign({}, state, { todo: arr });

        case TodoAction.DEL_TODO:
            arr = state.todo.filter(todo => {
                return todo.id != action.payload.id;
            });
            return Object.assign({}, state, { todo: arr });

        default:
            return state;
    }
}