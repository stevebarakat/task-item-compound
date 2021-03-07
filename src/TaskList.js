import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { initialTasks } from './initialTasks';

const TaskList = () => {
  const [value, setValue] = useState('');
  const [taskList, setTaskList] = useState(initialTasks);

  function addTask(e) {
    e.preventDefault();
    setTaskList([...taskList,
    {
      id: "5y345h3o",
      text: value,
      completed: false,
    }]
    );
  }

  function deleteTask(index) {
    setTaskList(taskList.filter((_, i) => i !== index));
  }

  console.log(taskList);

  return (
    <div>
      <TaskForm>
        <form onSubmit={addTask}>
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
          />
          <button>+</button>
        </form>
      </TaskForm>
      <TaskItem>
        {taskList.map((task, i) => (
          <li key={task.id}>
            <input type="checkbox" />
            <span>{task.text}</span>
            <button
              onClick={() => deleteTask(i)}
            >x</button>
          </li>
        ))}
      </TaskItem>
    </div>
  );
};

export default TaskList;
