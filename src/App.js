import './App.css';
import { initialTasks } from './initialTasks';

const TaskList = () => {
  return initialTasks.map(task => {
    return (
      <TaskItem>
        <li>
          <input type="checkbox" />
          <span>{task.text}</span>
          <button>x</button>
        </li>
      </TaskItem>
    );
  });

};

const TaskItem = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  );
};

const App = () => <TaskList />;

export default App;
