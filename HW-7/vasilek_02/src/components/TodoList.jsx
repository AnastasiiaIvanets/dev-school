import { useState } from 'react';
import TodoTask from './TodoTask.jsx';


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim().length !== 0) {
      setTasks(tasks.concat({ text: newTask, done: false }));
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.slice();
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const checkedTask = (index) => {
    const updatedTasks = tasks.slice();
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  }

  return (
    <div>
      <input
        className='input-task'
        type='text'
        placeholder='Add a new task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />

      <p className='counter'>You have {tasks.length} tasks.</p>

      <ul>
        {tasks.map((task, index) => (
          <TodoTask
            key={index}
            index={index}
            task={task}
            deleteTask={deleteTask}
            checkedTask={checkedTask}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
