import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { initialTasks } from './initialTasks';

const TaskList = () => {
  const [value, setValue] = useState('');
  const [taskList, setTaskList] = useState(initialTasks);

  function handleSubmit(e) {
    e.preventDefault();
    setTaskList([...taskList,
    {
      id: "5y345h3o",
      text: value,
      completed: false,
    }]
    );
  }

  console.log(taskList);

  return (
    <div>
      <TaskForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
          />
          <button>+</button>
        </form>
      </TaskForm>
      <TaskItem>
        {taskList.map(task => (
          <li key={task.id}>
            <input type="checkbox" />
            <span>{task.text}</span>
            <button>x</button>
          </li>
        ))}
      </TaskItem>
    </div>
  );
};

export default TaskList;
