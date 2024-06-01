import React, { useRef, useEffect, useState } from "react";
import { box } from "../../assets/canvas-data/types";
import useCanvas from "./useCanvas";

interface Props {
  base64Image: string;
  boxes: box[];
  onDoubleClick: (box: box, index: number) => void;
}

const Canvas: React.FC<Props> = ({ base64Image, boxes, onDoubleClick }) => {
  const { canvasRef, handleDoubleClick } = useCanvas({
    base64Image,
    boxes,
    onDoubleClick,
  });

  return <canvas ref={canvasRef} onDoubleClick={handleDoubleClick} />;
};

export default Canvas;
