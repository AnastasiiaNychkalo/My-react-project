import React, { useState } from "react";
import FilterPanel from "./NotesManager/FilterPanel";
import NoteForm from "./NotesManager/NoteForm";
import NotesList from "./NotesManager/NotesList";

interface Note {
   id: number;
   title: string;
   text: string;
   category: string;
}

interface Props {
   searchQuery: string;
}

const NotesManager: React.FC<Props> = ({ searchQuery }) => {
   const [notes, setNotes] = useState<Note[]>([]);
   const [filteredCategory, setFilteredCategory] = useState<string>("");
   const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

   const handleAddOrUpdate = (note: Note) => {
      setNotes((prev) => {
         const existing = prev.find((n) => n.id === note.id);
         return existing ? prev.map((n) => (n.id === note.id ? note : n)) : [note, ...prev];
      });
      setNoteToEdit(null);
   }

   const handleDelete = (id: number) => {
      setNotes((prev) => prev.filter((note) => note.id !== id));
   };

   const filterdNotes = notes.filter((note) => {
      const matchesCategory = filteredCategory === "All" || note.category === filteredCategory;
      const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.text.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
   });

   return (
      <div>
         <NoteForm onSubmit={handleAddOrUpdate} noteToEdit={noteToEdit} />
         <div className="mt-6">
            <FilterPanel selected={filteredCategory} onSelect={setFilteredCategory} />
         </div>
         <div className="mt-6">
            <NotesList
            notes={filterdNotes}
            onDelete={handleDelete}
            onEdit={setNoteToEdit}/>
         </div>
      </div>
   );
};

export default NotesManager;