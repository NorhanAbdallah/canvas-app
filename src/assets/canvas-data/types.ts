export type box = {
  points: Array<number>;
  text: string;
  class: string;
};
export interface CanvasData {
  _id: string;
  name: string;
  boxes: Array<box>;
  base64: string;
}
