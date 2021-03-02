import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Enger a Value")
            return
        }

        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false) 

    }

    return (
        <form className="add-form" onSubmit={onSubmit} > 
            <div className='form-control'>
                <label>task</label>
                <input type='text' placeholder='add' value={text} onChange={ (e)=> setText(e.target.value)} /> 

            </div>
            <div className='form-control'>
                <label>day</label>
                <input type='text' placeholder='add day' value={day} onChange={ (e)=> setDay(e.target.value)} /> 

            </div>
            <div className='form-control form-control-check'>
                <label> Set reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={ (e)=> setReminder(e.currentTarget.checked)} /> 

            </div>

            <input className='btn btn-block' type='submit' value='Save Task'/>
            
        </form>
    )
}

export default AddTask
