import React from 'react';
import './Item.css';
import axios from 'axios';

function Item(props){

    const translate = () =>{
        if (props.task.priority == '1'){
            return("High");
        }
        else if(props.task.priority == '2'){
            return("Medium");
        }
        else if(props.task.priority == '3'){
            return("Low");
        }
    }
    
    const toggleComplete = () => {
        axios.put(`/todo/${props.task.id}`).then((response) => {
            console.log(`Task id:${props.task.id} marked complete`)
            props.getTodoList();
        })
        .catch((error) => {
            console.error("Error in PUT '/todo/:id' inside markComplete().", error);
            alert("Error in PUT '/todo/:id' inside markComplete(). See console.");
        })
    }

    const removeTask = () => {
        axios.delete(`/todo/${props.task.id}`).then((response) => {
            console.log(`Task id:${props.task.id} deleted`)
            props.getTodoList();
        })
        .catch((error) => {
            console.error("Error in DELETE '/todo/:id' inside removeTask().", error);
            alert("Error in DELETE '/todo/:id' inside removeTask(). See console.");
        })
    }

    const timeDue = () => {
        if (Number(props.task.daysuntildue) > 0){
            return(`Due in ${props.task.daysuntildue} days`);
        }
        else if (Number(props.task.daysuntildue) == 0){
            return("Today");
        }
        else if (Number(props.task.daysuntildue) < 0){
            return("Overdue");
        }
    }

    if (props.task.complete == false){
        return(
            <div className={`task-${translate()} ${timeDue()}`}>
                <h3 className='task-title'>{props.task.title}</h3>
                <div className='duedate-div'>
                    <label htmlFor='duedate' className='duedate-label'>Due Date: </label>
                    <h5 className='duedate'>{timeDue()}: {props.task.duedate}</h5>
                </div>
                <div className='priority-div'>
                    <label className='priority-label' htmlFor='priority'>Priority: </label>
                    <h5 id='priority'>{translate()}</h5>
                </div>
                <br></br>
                <div className='description-div'>
                    <label className='description-label' htmlFor='description'>Description: </label>
                    <h5>{props.task.description}</h5>
                </div>
                <br></br>
                <div className='buttons-div'>
                    <button className="complete-btn" onClick={toggleComplete}>Complete</button>
                    <button className="remove-btn" onClick={removeTask}>Remove</button>
                </div>
            </div>
        )
    }
    else if (props.task.complete == true){
        return(
            <div className={`task-complete ${timeDue()}`}>
                <h3 className='task-title'>{props.task.title}</h3>
                <div className='duedate-div'>
                    <label htmlFor='duedate' className='duedate-label'>Due Date: </label>
                    <h5 className='duedate'>{timeDue()}: {props.task.duedate}</h5>
                </div>
                <div className='priority-div'>
                    <label className='priority-label' htmlFor='priority'>Priority: </label>
                    <h5 id='priority'>{translate()}</h5>
                </div>
                <br></br>
                <div className='description-div'>
                    <label className='description-label' htmlFor='description'>Description: </label>
                    <h5>{props.task.description}</h5>
                </div>
                <br></br>
                <div className='buttons-div'>
                    <button className="complete-btn" onClick={toggleComplete}>Mark Incomplete</button>
                    <button className="remove-btn" onClick={removeTask}>Remove</button>
                </div>
            </div>
        )
    }  
}
export default Item;