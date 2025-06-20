import './App.css';
import Task from "./components/Task";
import TaskList from './components/TaskList';

function App() {

  return (
    <>
      <Task title='Вивчити React' description='Дивитися відео уроки, прочитати посібник React, вчити теорію' isComplted={true} />
      <Task title='Зробити закупки' description='Хліб, ковбаса, молоко, банани' isComplted={false} />

      <TaskList />
    </>
  )
}

export default App
