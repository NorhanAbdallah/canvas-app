import { CSSProperties } from "react";

export const sidebarStyles: CSSProperties = {
  width: "250px",
  borderRight: "1px solid #ccc",
  padding: "15px",
  backgroundColor: "#f7f7f7",
  boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
};
export const classGroupStyles: CSSProperties = {
  marginBottom: "20px",
};
export const classTitleStyles: CSSProperties = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#333",
  borderBottom: "2px solid #ddd",
  paddingBottom: "5px",
};
export const boxListStyles: CSSProperties = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};
export const boxItemStyles: CSSProperties = {
  padding: "8px",
  marginBottom: "5px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  maxWidth: "inherit",
  textOverflow: "ellipsis",
  overflow: "hidden",
};
export const boxItemHoverStyles: CSSProperties = {
  backgroundColor: "#f0f0f0",
};
