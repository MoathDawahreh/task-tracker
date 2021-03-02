import {FaTimesCircle} from 'react-icons/fa'

import React from 'react';


const Task = ({task , deleteTask,onToggle}) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>  onToggle(task.id) }>
            <h3>
                {task.text}
                <FaTimesCircle  style={{color:"red" }} 
               onClick={() => deleteTask(task.id) }
                /> 
                
            </h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
