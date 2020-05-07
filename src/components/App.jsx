import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });
  };

  const removeNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((eachNote, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          removeNote={removeNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
