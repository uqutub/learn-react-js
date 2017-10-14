import { Subject } from 'rxjs';

class TodoService {
    
    
    _todoArr = [
        { id: 0, text: 'Todo Getting from todoService 123', status: false },
        { id: 1, text: 'Todo2 .....', status: false }
    ];
    
    constructor() {
        this.mySubjectObservable = new Subject();
        console.log('TodoService Runing..................');
    }

    getTodos() {
        return this._todoArr;
    }

    addTodo(todo) {
        return this._todoArr.push(todo);
    }

    deleteTodo(todo) {
        // this._todoArr = this._todoArr.filter(t => t.id != todo.id);
        this._todoArr.splice(
            this._todoArr.indexOf(todo), 1
        );
        return this._todoArr;
    }

    getLength() {
        return this._todoArr.length;
    }

    fireMyValue(v) {
        this.mySubjectObservable.next(v);
    }
    

}

export let todoService = new TodoService();