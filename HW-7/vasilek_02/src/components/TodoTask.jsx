const TodoTask = ({ index, task, deleteTask, checkedTask }) => {
  return (
    <li key={index}>
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => checkedTask(index)}
        />
              
        <span className={task.done ? 'done task' : 'task'}>{task.text}</span>
      </div>
      <button className='button-delete' onClick={() => deleteTask(index)}>Delete</button>
    </li>
  )
}

export default TodoTask;
