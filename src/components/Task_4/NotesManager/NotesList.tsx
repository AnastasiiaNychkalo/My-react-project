import React from "react";
import NoteCard from "./NotesList/NoteCard";

interface Note {
   id: number;
   title: string;
   text: string;
   category: string;
}

interface NotesListProps {
   notes: Note[];
   onDelete: (id: number) => void;
   onEdit: (note: Note) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onDelete, onEdit }) => {


   return (
      <div className={"grid sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
   )
}

export default NotesList;