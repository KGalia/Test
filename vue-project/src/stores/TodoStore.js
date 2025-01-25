import {defineStore} from 'pinia';
import {v4 as uuidv4} from "uuid";

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [
            {
                id: 1,
                title: 'Add Title Todo',
                items: [
                    {
                        id: uuidv4(1),
                        name: 'Add New Todo',
                        done: false,
                        isDeleted: false
                    },
                    {
                        id: uuidv4(2),
                        name: 'Super task',
                        done: true,
                        isDeleted: false
                    },
                    {
                        id: uuidv4(3),
                        name: 'My new task',
                        done: false,
                        isDeleted: false
                    }
                ]
            },
            {
                id: 2,
                title: 'My Title Todo',
                items: [
                    {
                        id: uuidv4(4),
                        name: 'My new task',
                        done: true,
                        isDeleted: false
                    }
                ]
            },
            {
                id: 3,
                title: 'Add New Title',
                items: [
                    {
                        id: uuidv4(5),
                        name: 'Super task',
                        done: true,
                        isDeleted: false
                    },
                    {
                        id: uuidv4(6),
                        name: 'My new task',
                        done: false,
                        isDeleted: false
                    }
                ]
            },
        ],
    }),
    getters: {
        findTodo: (state) => {
            return (id) => state.todos.find((todo) => todo.id.toString() === id);
        },
    },

    actions: {
        createTodo(newTodo) {
            this.todos.push(
                newTodo.value
            );
        },

        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },

        editTodo(newTodo) {
            newTodo.items = newTodo.items.filter(item => item.isDeleted === false);

            this.todos.map(function (todo) {
                if (todo.id === newTodo.id) {
                    return newTodo;
                }
            });
        },

        addItemsTodo(newItems) {
            this.todos.items = newItems;
        },
    }
})
