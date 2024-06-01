import React, { useEffect, useState } from "react";
import { PopupProps } from "./types";
import { popUpWrapperStyles, saveBtnStyles, deleteBtnStyles, cancelBtnStyles, btnsWrapperStyles, textInputStyles,classSelectStyles } from "./styles";

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
        <option value="Name">Name</option>
        <option value="Description">Description</option>
        <option value="Date">Date</option>
        <option value="Amount">Amount</option>
        <option value="Supplier">Supplier</option>
        <option value="Number">Number</option>
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
