import React from 'react'

const AddTask = () => {
    return (
        <form className="add-form">
            <div className='form-control'>
                <label>task</label>
                <input type='text' placeholder='add'/> 

            </div>
            <div className='form-control'>
                <label>day</label>
                <input type='text' placeholder='add day'/> 

            </div>
            <div className='form-control form-control-check'>
                <label> Set reminder</label>
                <input type='checkbox'/> 

            </div>

            <input className='btn btn-block' type='submit' value='Save Task'/>
            
        </form>
    )
}

export default AddTask
