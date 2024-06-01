import React from 'react';
import useCanvas from './useCanvas';
import { CanvasProps } from './types';

const Canvas: React.FC<CanvasProps> = ({
  base64Image,
  boxes,
  onDoubleClick,
}) => {
  const { canvasRef, handleDoubleClick } = useCanvas({
    base64Image,
    boxes,
    onDoubleClick,
  });

  return <canvas ref={canvasRef} onDoubleClick={handleDoubleClick} />;
};

export default Canvas;
