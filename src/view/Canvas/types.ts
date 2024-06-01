import { box } from "../../assets/canvas-data/types";

export interface UseCanvasProps {
  base64Image: string;
  boxes: Array<box>;
  onDoubleClick: (box: box, index: number) => void;
}


export interface CanvasProps {
  base64Image: string;
  boxes: box[];
  onDoubleClick: (box: box, index: number) => void;
}