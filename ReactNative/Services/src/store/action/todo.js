import { createAction } from 'redux-actions';

export class TodoAction {

    static ADD_TODO = 'ADD_TODO';
    static DEL_TODO = 'DEL_TODO';
    static NULL = 'NULL';

    static addTodo(todo) {
        return {
            type: TodoAction.ADD_TODO,
            payload: todo
        };
    }

    static delTodo(todo) {
        return {
            type: TodoAction.DEL_TODO,
            payload: todo
        };
    }


    // static addTodo2 = createAction(
    //     TodoAction.ADD_TODO,
    //     payload => payload
    // );

}