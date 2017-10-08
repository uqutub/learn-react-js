class TodoService {

    _todoArr = [
        { id: 0, text: 'Todo Getting from todoService ---', status: false },
        { id: 1, text: 'Todo2 .....', status: false }
    ];

    arrLength = 0;

    constructor() {
        console.log('TodoService Runing..................');
    }

    getTodos() {
        return this._todoArr;
    }

    addTodo(todo) {
        this._todoArr.push(todo);
        this.updateArrayLength();
        //
        //
        //
    }

    updateArrayLength() {
        this.arrLength = this._todoArr.length;
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

    myCallback(cb) {
        console.log('fireee calback')
        setTimeout(() => {
            // got data
            cb('cccccccccdata');
        }, 1500);
    }

    myPromise() {
        return new Promise ( (res, rej) => {
            setTimeout(() => {
                console.log('now resloving...');
                rej('failure');
            }, 2500);
        } );
    }

}

// static ( fucntions / variables )

export let todoService = new TodoService();
