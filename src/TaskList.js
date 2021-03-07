import React from 'react'
import TaskItem from './TaskItem';
import {initialTasks} from './initialTasks';

const TaskList = () => {
  return initialTasks.map(task => {
    console.log(task.text)
    return (
      <TaskItem>
        <li>
          <input type="checkbox"/>
          <span>{task.text}</span>
          <button>x</button>
        </li>
      </TaskItem>
    )
  })
}

export default TaskList
