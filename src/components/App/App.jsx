import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Counter from '../Counter/Counter';
import List from '../List/List';

function App () {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = () => {
    axios.get('/todo').then((response) => {
      console.log(response.data);
      setTodoList(response.data);
    })
    .catch((error) => {
      console.error("Error in GET '/todo' inside getTodoList().", error);
      alert("Error in GET '/todo' inside getTodoList(). See console.");
    })
  }

  useEffect(() => {
    getTodoList();
  }, []);
  
  return (
    <div id="app">
      <Header/>
      <hr/>
      <Form getTodoList={getTodoList}/>
      <hr/>
      <Counter todoList={todoList}/>
      <hr/>
      <List getTodoList={getTodoList} todoList={todoList}/>
    </div>
  );

}
export default App