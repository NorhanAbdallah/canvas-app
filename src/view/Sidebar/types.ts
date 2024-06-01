import { box } from "../../assets/canvas-data/types";

export interface SideBarProps {
  boxes: box[];
  onboxClick: (box: box, index: number) => void;
}
