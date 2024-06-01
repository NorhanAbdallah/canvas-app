import React from 'react';
import Canvas from '../Canvas';
import Sidebar from '../Sidebar';
import Popup from '../Canvas/components/Popup';
import { canvasData } from '../../assets/canvas-data';
import { mainWrapperStyles, canvasWrapperStyles } from './styles';
import useBox from './useBox';

const Home: React.FC = () => {
  const {
    handleBoxClick,
    handleDoubleClick,
    handleCancel,
    handleDelete,
    handleSave,
    boxes,
    selectedBox,
  } = useBox();

  return (
    <div style={mainWrapperStyles}>
      <Sidebar boxes={boxes} onboxClick={handleBoxClick} />
      <div style={canvasWrapperStyles}>
        <Canvas
          base64Image={canvasData.base64}
          boxes={boxes}
          onDoubleClick={handleDoubleClick}
        />
        <Popup
          box={selectedBox?.box}
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Home;
