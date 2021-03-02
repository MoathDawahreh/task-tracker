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

  const [ShowAdding,setShowAdding] = useState(false)


  
    const deleteTask =  (id) => {
     setTasks(tasks.filter( (task) =>task.id !==id ))
  
  }


  const reminder =  (id) => {
     setTasks (tasks.map( (task)=> task.id === id ? {...task,reminder: !task.reminder } : task ))
   
  }

  const Addtask =  (task) => {
    console.log(task)
    const id = Math.floor(Math.random()*1000 )+1

    const newtask = {id, ...task}
    setTasks([...tasks,newtask])
    
  }

  

  return (
    <div className="container">
      <Header OnAdd ={()=> setShowAdding(!ShowAdding) }/>
      { ShowAdding &&
      <AddTask onAdd = {Addtask} />
      }
      { tasks.length > 0 ?
      <Tasks tasks ={tasks} deleteTask ={deleteTask} onToggle={reminder} />
      : "Add a Task"
      }
    </div>
  );
}

export default App;
