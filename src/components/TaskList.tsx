import React, {useState} from "react";

type Task = {
   id: number;
   title: string;
   isCompleted: boolean;
}

const TaskList: React.FC = () => {
   const [tasks, setTasks] = useState<Task[]>([
      {id: 1, title: "Вивчити React", isCompleted: false},
      {id: 2, title: "Зробити закупки", isCompleted: false},
      {id: 3, title: "Почитати книгу", isCompleted: false},
   ]);

   const toggleComplete = (id: number) => {
      setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted } : task));
   };

   return(
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
         <h2 className="text-2xl font-bold mb-4 text-center">Список задач!</h2>
         <ul className="space-y-3">
            {tasks.map(task => (
               <li key={task.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                  task.isCompleted ? 'bg-green-100 text-gray-500 line-through' : 'bg-gray-100'}`}>
                  {task.title}
                  <button onClick={() => toggleComplete(task.id)}>
                     {task.isCompleted ? "Cancel" : "Complete"}
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TaskList;