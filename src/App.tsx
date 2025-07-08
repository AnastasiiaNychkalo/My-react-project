import './App.css';
import Task from "./components/Task";
import Task_3 from './components/Task_3';

function App() {

  return (
    <>
      <Task title='Вивчити React' description='Дивитися відео уроки, прочитати посібник React, вчити теорію' isComplted={true} />
      <Task title='Зробити закупки' description='Хліб, ковбаса, молоко, банани' isComplted={false} />
      <Task_3 />
    </>
  )
}

export default App
