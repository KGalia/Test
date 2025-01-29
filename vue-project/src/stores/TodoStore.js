import {defineStore} from 'pinia';

const STORE_NAME = 'todoStore';

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: JSON.parse(localStorage.getItem(STORE_NAME)) ?? [],
    }),

    getters: {
        findTodo: (state) => {
            return (id) => state.todos.find((todo) => todo.id.toString() === id);
        },
    },

    actions: {
        save(){
            localStorage.setItem(STORE_NAME, JSON.stringify(this.todos));
        },

        createTodo(newTodo) {
            this.todos.push(newTodo.value);
            this.save();
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.save();
        },
        editTodo(newTodo) {
            newTodo.items = newTodo.items.filter(item => item.isDeleted === false);

            this.todos.map(function (todo) {
                if (todo.id === newTodo.id) {
                    return newTodo;
                }
            });
            this.save();
        },
    }
});

