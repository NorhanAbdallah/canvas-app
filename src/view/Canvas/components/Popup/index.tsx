import React, { useEffect, useState } from "react";
import { PopupProps } from "./types";
import { popUpWrapperStyles, saveBtnStyles, deleteBtnStyles, cancelBtnStyles, btnsWrapperStyles, textInputStyles, classSelectStyles } from "./styles";
import { classes } from "./consts";

const Popup: React.FC<PopupProps> = ({ box, onSave, onCancel, onDelete }) => {

  const [text, setText] = useState(box?.text || "");
  const [className, setClassName] = useState(box?.class || "");

  const handleSave = () => {
    onSave(text, className);
  };

  // We can use a form handler like react-hook-form and add text as initial value
  useEffect(() => {
    if (box?.text) {
      setText(box.text)
    }
  }, [box?.text])


  useEffect(() => {
    if (box?.class) {
      setClassName(box.class)
    }
  }, [box?.class])


  if (!box) return null;

  return (
    <div style={popUpWrapperStyles(box)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={textInputStyles}
      />

      <select value={className} onChange={(e) => setClassName(e.target.value)} style={classSelectStyles}>
        {classes.map((classType) => <option value={classType.value}>{classType.name}</option>)}
      </select>


      <div style={btnsWrapperStyles}>

        <div>
          <button onClick={handleSave} style={saveBtnStyles}>Save</button>
          <button onClick={onDelete} style={deleteBtnStyles}>Delete</button>
        </div>

        <button onClick={onCancel} style={cancelBtnStyles}>Cancel</button>

      </div>
    </div>
  );
};

export default Popup;
