// TodoReducer.js
import {
    ADD_TODO,
    TOGGLE_DONE,
    DELETE_TODO
} from "./TodoState";

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            sessionStorage.setItem('todos', JSON.stringify([...state.path, action.payload]));
            return {
                ...state,
                path: [...state.path, action.payload]
            };

        case TOGGLE_DONE:
            const toggledTodos = state.path.map((todo, index) => {
                if (index === action.payload) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });

            sessionStorage.setItem('todos', JSON.stringify(toggledTodos));
            return {
                ...state,
                path: toggledTodos
            };


        case DELETE_TODO:
            const updatedTodos = [...state.path];
            updatedTodos.splice(action.payload, 1);

            sessionStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                path: updatedTodos
            };
        default:
            return state;
    };

};
export default todoReducer;