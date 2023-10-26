import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Form(props){
    const [title, setTitle] = useState("");
    const [duedate, setDuedate] = useState("");
    const [priority, setPriority] = useState(3);
    const [description, setDescription] = useState("");

    const addTask = () => {
        let newTask = {
            title: title,
            duedate: duedate,
            priority: priority,
            description: description
        }

        axios.post('/todo', newTask).then((response) =>{
            setTitle('');
            setDuedate('');
            setPriority(3);
            console.log('Response from server: ', response.data);
            props.getTodoList();
        })
        .catch((error) => {
            console.error("Error in POST '/todo' inside addTask().", error);
            alert("Error in POST '/todo' inside addTask(). See console.");
        })
    }

    return(
        <form onSubmit={addTask}>
            <label htmlFor='title'>Title:</label>
            <input id='title' type="text" maxLength="50" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br/>
            <label htmlFor='date'>Due Date:</label>
            <input id='duedate' type="date" value={duedate} onChange={(e) => setDuedate(e.target.value)}/>
            <br/>
            <label htmlFor='priority'>Priority:</label>
            <select id='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value={3}>Low</option>
                <option value={2}>Medium</option>
                <option value={1}>High</option>
            </select>
            <br/>
            <label htmlFor='description'>Description:</label>
            <input id='description' type='text' maxLength="500" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <button>Add Task</button>
        </form>
    )
}
export default Form;