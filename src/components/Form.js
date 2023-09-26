// Form.js
import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

const Form = () => {
    const todoContext = useContext(TodoContext)
    const { addTodo } = todoContext;


    const [todo, setTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Ajouter une tâche"
                required
            />
            <button>Ajouter</button>
        </form>
    );
}

export default Form;






















/*import { useState } from "react";

const Form = ({ todos, addTodo }) => {

    const [todo, setTodo] = useState("");


    const handleaddTodo = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    return (
        <form onSubmit={handleaddTodo}>
            <input type="text"
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
                placeholder="Ajouter une tâche"
                required
            />
            <button>Ajouter</button>
        </form>
    )
}

export default Form;*/