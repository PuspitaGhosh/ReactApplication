import React from "react";

function CreateArea(props) {
  const [note,setNote]=React.useState({
    title:"",
    content:""
  });
  function handleChange(event)
  {
    const {name,value}=event.target;
    setNote(prevNote=>{
    return {...prevNote,[name]:value}
    });
  }
  function handleClick(event)
  {
    // console.log(note);

   props.addNote(note);
   setNote({
     title:"",
     content:""
   })
   event.preventDefault();
  }
  return (
    <div >
      <form className="note">
        <input name="title"  onChange={handleChange} placeholder="Title" />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
