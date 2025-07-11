import React, { useState, useEffect} from "react";

interface Note {
   id: number;
   title: string;
   text: string;
   category: string;
}

interface NoteFormProps {
   onSubmit: (note: Note) => void;
   noteToEdit: Note | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, noteToEdit }) => {
   const [title, setTitle] = useState<string>("");
   const [text, setText] = useState<string>("");
   const [category, setCategory] = useState("General");

   useEffect(() => {
      if(noteToEdit) {
         setTitle(noteToEdit.title);
         setText(noteToEdit.text);
         setCategory(noteToEdit.category);
      }
   }, [noteToEdit]);


   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newNote: Note = {
         id: noteToEdit?.id || Date.now(),
         title,
         text,
         category,
      };
      onSubmit(newNote);
      setTitle("");
      setText("");
      setCategory("General");
   };

   return(
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md space-y-4">

         <input
         type="text"
         placeholder="Title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         className="w-full border px-3 py-2 rounded-md"
         required
         />

      <textarea
      placeholder="Note text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-full border px-3 py-2 rounded-md"
      required
      />

      <select value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full border px-3 py-2 rounded-md"
      >
         <option value="General">General</option>
         <option value="Work">Work</option>
         <option value="Personal">Personal</option>
         <option value="Study">Study</option>
      </select>

      <button type="submit" className={"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"}>
         {noteToEdit ? "Update" : "Add"} Note
      </button>
      </form>
   );
};

export default NoteForm;