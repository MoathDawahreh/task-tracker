import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

import AddTask from './components/AddTask'



 function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Course",
      day: "Sunday",
      reminder: false
    },
    {
      id: 2,
      text: "Movie time",
      day: "Monday",
      reminder: true
    },
      {
      id: 3,
      day: "Friday",
      text: "walk the dog",
      reminder: true
    }
  ])


  
    const deleteTask =  (id) => {
    console.log(id)
    setTasks(tasks.filter( (task) =>task.id !==id ))
  
  }


  const reminder =  (id) => {
    console.log(id)
    setTasks (tasks.map( (task)=> task.id === id ? {...task,reminder: !task.reminder } : task ))
   
  }



  

  return (
    <div className="container">
      <Header/>
      <AddTask/>

      { tasks.length > 0 ?
      <Tasks tasks ={tasks} deleteTask ={deleteTask} onToggle={reminder} />
      : "Add a Task"
      }
    </div>
  );
}

export default App;
