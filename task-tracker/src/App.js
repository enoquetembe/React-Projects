import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'


function App() {
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

  return (
   <div className='container'>
      <Header />
      <Tasks tasks={tasks} /> 
   </div>
  );
}

export default App;
