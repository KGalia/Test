import {defineStore} from 'pinia';
// import {v4 as uuidv4} from "uuid";
import {ref } from "vue";

// export const useTodoStore = defineStore('todoStore', {
//     state: () => ({
//         todos: [],
//
//     }),
//
//     const todosInLocalStorage = localStorage.getItem("todos");
//
//     getters: {
//         findTodo: (state) => {
//             return (id) => state.todos.find((todo) => todo.id.toString() === id);
//         },
//     },
//
//     actions: {
//         createTodo(newTodo) {
//             this.todos.push(
//                 newTodo.value
//             );
//         },
//
//         deleteTodo(id) {
//             this.todos = this.todos.filter(todo => todo.id !== id);
//         },
//
//         editTodo(newTodo) {
//             newTodo.value = newTodo.items.filter(item => item.isDeleted === false);
//
//             this.todos.map(function (todo) {
//                 if (todo.id === newTodo.value.id) {
//                     return newTodo.value;
//                 }
//             });
//         },
//
//         addItemsTodo(newItems) {
//             this.todos.items = newItems.value;
//         },
//     }
// });

export const useTodoStore = defineStore("todoStore", () => {
    const todos = ref([]);

    const todosInLocalStorage = localStorage.getItem('todos');
    if (todosInLocalStorage) {
        todos.value = JSON.parse(todosInLocalStorage).value;
    }

    const findTodo = (id) => {
        return (id) = todos.value.find((todo) => todo.id.toString() === id);
    };

    const createTodo = (newTodo) => {
        todos.value.push(
            newTodo.value
        );
    };

    const deleteTodo = (id) => {
        todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    const editTodo = (newTodo) => {
        newTodo = newTodo.items.filter((item) => item.isDeleted === false);

        todos.value.map(function (todo) {
            if (todo.id === newTodo.id) {
                return newTodo;
            }
        });
    };
    const addItemsTodo = (newItems) => {
        todos.value.items = newItems;
    };

    return {todos, findTodo, createTodo, deleteTodo, editTodo, addItemsTodo};

});
