import React, { useState } from 'react';
import './App.css';
// import Task from "./components/Task";
import Header from './components/Task_4/Header';
import NotesManager from './components/Task_4/NotesManager';

const App: React.FC = () => {
  const[searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch: (query: string) => void = (query) => {
    setSearchQuery(query);
  }

  return (
    <>
      {/* <Task title='Вивчити React' description='Дивитися відео уроки, прочитати посібник React, вчити теорію' isComplted={true} />
      <Task title='Зробити закупки' description='Хліб, ковбаса, молоко, банани' isComplted={false} /> */}



      <Header onSearch={handleSearch}/>
      <NotesManager query={searchQuery}/>
    </>
  )
}

export default App
