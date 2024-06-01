import React from 'react';
import { box } from '../../assets/canvas-data/types';
import { SideBarProps } from './types';
import {
  sidebarStyles,
  classGroupStyles,
  classTitleStyles,
  boxListStyles,
  boxItemStyles,
} from './styles';

const Sidebar: React.FC<SideBarProps> = ({ boxes, onboxClick }) => {
  const groupedBoxes = boxes.reduce(
    (acc, box, index) => {
      acc[box.class] = acc[box.class] || [];
      acc[box.class].push({ ...box, index });
      return acc;
    },
    {} as Record<string, (box & { index: number })[]>,
  );

  return (
    <div style={sidebarStyles}>
      {Object.keys(groupedBoxes).map((className) => (
        <div key={className} style={classGroupStyles}>
          <h3 style={classTitleStyles}>{className}</h3>
          <ul style={boxListStyles}>
            {groupedBoxes[className].map((box) => (
              <li
                key={box.index}
                style={boxItemStyles}
                onClick={() => onboxClick(box, box.index)}
              >
                {box.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
