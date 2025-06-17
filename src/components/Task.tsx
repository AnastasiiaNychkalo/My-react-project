import React from "react";

interface TaskProps {
   title: string;
   description: string;
   isComplted: boolean;
}

const Task: React.FC<TaskProps> = ({title, description, isComplted}) => {

   return (
   <>
      <h3 style={{color: isComplted ? "green" : "red"}}>Задача: {title}!</h3>
      <p>Опис: {description}.</p>
   </>
   )
};

export default Task;