// App.js
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
import TodoState from './contexts/TodoState';

function App() {
  return (
    <TodoState>
      <Fragment>
        <Header />
        <main>
          <Form />
          <List />
        </main>
        <Footer />
      </Fragment>
    </TodoState>
  );
}

export default App;

































/*import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';



function App() {
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
  }

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <Header todos={todos}></Header>
      <main>
        <Form todos={todos} addTodo={addTodo} />
        <List todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;*/












/*function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadData();
    console.log("getItemEffet");
  }, [todos])

  useEffect(() => {
    saveTodos();
    console.log("setItemEffet");
  })

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem('data') || '[]');
    console.log("getItem");
    return data;
  }

  const saveTodos = () => {
    const data = JSON.stringify(todos);
    localStorage.setItem("data", data);
  }

  const addTodo = (todo) => {
    setTodos([...todos, { done: false, description: todo }]);
  }

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    console.log(newTodos);
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <Header todos={todos}></Header>
      <main>
        <Form todos={todos} addTodo={addTodo} />
        <List todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;*/
