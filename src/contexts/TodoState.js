// TodoState.js
import React, { useReducer, useContext, useEffect } from "react";
import TodoReducer from "./TodoReducer";
import TodoContext from "./TodoContext";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_DONE = "TOGGLE_DONE";
export const DELETE_TODO = "DELETE_TODO";


const TodoState = (props) => {
    const storedTodos = JSON.parse(sessionStorage.getItem('todos') || '[]');
    console.log("getItem");
    const initialTodos = {
        path: storedTodos
    };
    const [path, dispatch] = useReducer(TodoReducer, initialTodos);

    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: { done: false, description: todo }
        });
    };

    const toggleDone = (index) => {
        console.log("toggleDone", index);
        dispatch({
            type: TOGGLE_DONE,
            payload: index
        });
    };

    const deleteTodo = (index) => {

        dispatch({
            type: DELETE_TODO,
            payload: index
        });
    };

    return (
        <TodoContext.Provider
            value={{
                path: path.path,
                addTodo,
                toggleDone,
                deleteTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;























/*import { useContext, useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = () => { }
export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(() => {
        const data = JSON.parse(localStorage.getItem('data') || '[]');
        console.log("testGetItem");
        return data;
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(todos));
        console.log("testSetItem");
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, { done: false, description: todo }]);
    };

    const toggleDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                toggleDone,
                deleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo doit être utilisé à l'intérieur de TodoProvider");
    }
    return context;
}

export default TodoState;*/
