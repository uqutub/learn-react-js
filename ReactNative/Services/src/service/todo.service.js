class TodoService {

    _todoArr = [
        { id: 0, text: 'Todo Getting from todoService ---', status: false },
        { id: 1, text: 'Todo2 .....', status: false }
    ];

    constructor() {
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

    myPromise() {
        return new Promise ((reslove, reject) => {
            setTimeout(() => {
                console.log('now resloving...');
                reslove();
            }, 2500);
        });
    }

}

export let todoService = new TodoService();