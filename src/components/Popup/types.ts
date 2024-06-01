import { box } from "../../assets/canvas-data/types";

export interface PopupProps {
  box?: box;
  onSave: (text: string, className: string) => void;
  onCancel: () => void;
  onDelete: () => void;
}
