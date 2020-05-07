import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(true);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.addNote(note);
              event.preventDefault();
              setNote((prevState) => {
                return {
                  title: "",
                  content: "",
                };
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
