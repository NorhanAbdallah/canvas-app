import React from "react";
import { box } from "../../assets/canvas-data/types";
import { SideBarProps } from "./types";
import { sideBarWrapper } from "./styles";

const Sidebar: React.FC<SideBarProps> = ({ boxes, onboxClick }) => {
  const groupedboxes = boxes.reduce(
    (acc, box, index) => {
      acc[box.class] = acc[box.class] || [];
      acc[box.class].push({ ...box, index });
      return acc;
    },
    {} as Record<string, (box & { index: number })[]>,
  );

  return (
    <div style={sideBarWrapper}>
      {Object.keys(groupedboxes).map((boxClass) => (
        <div key={boxClass}>
          <h3>{boxClass}</h3>
          <ul>
            {groupedboxes[boxClass].map((box) => (
              <li key={box.index} onClick={() => onboxClick(box, box.index)}>
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
