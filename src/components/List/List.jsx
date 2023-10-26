import React from 'react';
import Item from '../Item/Item.jsx';
import './List.css';

function List(props){
    return(
        <div id="task-list">
            {props.todoList.map((task) => (<Item key={task.id} getTodoList={props.getTodoList} task={task}/>))}
        </div>
    )
}
export default List;