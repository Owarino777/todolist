// TodoContext.js
import { createContext } from "react";

const TodoContext = createContext();

export default TodoContext;


































/*import { createContext, useContext, useEffect, useState } from "react";

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
}*/
