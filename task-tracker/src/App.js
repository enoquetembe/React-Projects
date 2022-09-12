import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react'


function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState(
    [
        {
            id:1,
            text: 'Studying',
            day: 'May 7th at 3:15pm',
            reminder: false
        },
    
        {
            id:2,
            text: 'Go to shop',
            day: 'Jul 23th at 1:00pm',
            reminder: true
        },
    ]
    
) 

  const deleteTask = (id) => {
    setTask(tasks.filter((task)=>
      task.id !== id
    ))
  }
  
  const toggleReminder = (id) => {
    setTask(
      tasks.map(
        (task) => task.id === id? {...task, reminder:!task.reminder }: task
      )
    )
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}

    setTask([...tasks, newTask])
  }

  return (
   <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks' }
   </div>
  );
}

export default App;
