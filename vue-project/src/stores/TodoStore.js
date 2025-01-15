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
                        done: false
                    },
                    {
                        id: uuidv4(2),
                        name: 'Super task',
                        done: true
                    },
                    {
                        id: uuidv4(3),
                        name: 'My new task',
                        done: false
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
                        done: true
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
                        done: true
                    },
                    {
                        id: uuidv4(6),
                        name: 'My new task',
                        done: false
                    }
                ]
            },
        ],
    }),
    getters: {
        findTodo: (state) => {
            return (id) => state.todos.find((todo) => todo.id.toString() === id)
        },
    },
    actions: {
        saveTodo(newTodo) {
            this.todos.push(
                {
                    id: newTodo.id,
                    title: newTodo.title,
                    items: newTodo.items
                }
            );

            console.log(this.todos);
        }
    }
})
