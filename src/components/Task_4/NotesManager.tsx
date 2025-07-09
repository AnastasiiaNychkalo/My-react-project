import React from "react";

interface NotesManagerProps {
   query: string;
 }

const NotesManager: React.FC<NotesManagerProps> = ({ query}) => {
   return (
      <div>
         <p><strong>{query}</strong></p>
      </div>
   );
};

export default NotesManager;