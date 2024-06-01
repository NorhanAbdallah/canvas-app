import { box } from "../../../../assets/canvas-data/types";
import { CSSProperties } from "react";

export const popUpWrapperStyles = (box: box): CSSProperties => ({
  position: "absolute",
  top: box.points[1],
  left: box.points[0],
  backgroundColor: "white",
  border: "1px solid #ccc",
  padding: "10px",
  zIndex: 1000,
  borderRadius: "4px",
});

const btnStyles = {
  border: "none",
  borderRadius: "4px",
  padding: "2px 13px",
  color: "white",
};

export const saveBtnStyles: CSSProperties = {
  ...btnStyles,
  background: "green",
  marginRight: "5px",
};

export const deleteBtnStyles: CSSProperties = {
  ...btnStyles,
  background: "red",
  marginRight: "5px",
};

export const cancelBtnStyles: CSSProperties = {
  ...btnStyles,
  background: "grey",
  marginRight: "5px",
};

export const btnsWrapperStyles: CSSProperties = {
  display: "flex",
  marginTop: "10px",
  justifyContent: "space-between",
};

export const textInputStyles: CSSProperties = {
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginRight: "10px",
};

export const classSelectStyles: CSSProperties = {
  padding: "4px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
