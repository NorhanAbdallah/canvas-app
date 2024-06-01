import { useRef, useEffect } from 'react';
import { UseCanvasProps } from './types';

const getClassColor = (className: string) => {
  switch (className) {
    case 'Name':
      return 'red';
    case 'Description':
      return 'blue';
    case 'Date':
      return 'green';
    case 'Amount':
      return 'orange';
    case 'Supplier':
      return 'purple';
    case 'Number':
      return 'brown';
    default:
      return 'black';
  }
};

const useCanvas = (props: UseCanvasProps) => {
  const { base64Image, boxes, onDoubleClick } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      const img = new Image();
      img.src = base64Image;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        boxes.forEach((box) => {
          ctx.strokeStyle = getClassColor(box.class);
          ctx.strokeRect(
            box.points[0],
            box.points[1],
            box.points[2] - box.points[0],
            box.points[3] - box.points[1],
          );
          ctx.font = '16px Arial';
          ctx.fillStyle = getClassColor(box.class);
          ctx.fillText(box.text, box.points[0], box.points[1] - 5);
        });
      };
    }
  }, [base64Image, boxes]);

  const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    boxes.forEach((box, index) => {
      const [x1, y1, x2, y2] = box.points;
      if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        onDoubleClick(box, index);
      }
    });
  };
  return { canvasRef, handleDoubleClick };
};

export default useCanvas;
