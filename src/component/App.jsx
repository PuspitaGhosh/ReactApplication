import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){
  const [notes,setNotes]=React.useState([]);
  function insertNote(note)
{
  // console.log(note);

  setNotes(prevNotes=>{
    return [...prevNotes,note]
  })
}
function deleteNote(id)
{
  setNotes(prevNotes=>{
     return prevNotes.filter((noteItems,index)=>{
    return index!==id;
  });
})}

return (
    <div>
      <Header />
      <CreateArea addNote={insertNote} />
      {notes.map((note,index)=><Note key={index}
      id={index}
      title={note.title}
      content={note.content}
      ondelete={deleteNote}/>
      )}
      <Footer />
    </div>
  );
}

export default App;
