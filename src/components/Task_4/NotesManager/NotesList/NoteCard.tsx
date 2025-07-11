import React from "react";

interface Note {
   id: number;
   title: string;
   text: string;
   category: string;
}

interface NoteCardProps {
   note: Note;
   onDelete: (id: number) => void;
   onEdit: (note: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onEdit }) => {
   return (
     <div className="bg-white p-4 shadow rounded-md">
       <h3 className="font-bold text-lg">{note.title}</h3>
       <p className="text-gray-700 mb-2">{note.text}</p>
       <p className="text-sm text-gray-500 mb-1">Category: {note.category}</p>
       <div className="flex justify-end gap-2 mt-3">
         <button
           onClick={() => onEdit(note)}
           className={"text-blue-500 hover:underline"}
         >
           Edit
         </button>
         <button
           onClick={() => onDelete(note.id)}
           className={"text-red-500 hover:underline"}
         >
           Delete
         </button>
       </div>
     </div>
   );
 };

export default NoteCard;