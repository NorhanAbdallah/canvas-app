import React, { useState } from "react";
import Canvas from "../Canvas";
import Sidebar from "../Sidebar";
import Popup from "../Canvas/components/Popup";
import { box } from "../../assets/canvas-data/types";
import { canvasData } from "../../assets/canvas-data";

const Landing: React.FC = () => {
    const [boxes, setBoxes] = useState<Array<box>>(canvasData.boxes);
    const [selectedBox, setSelectedBox] = useState<{
        box: box;
        index: number;
    } | null>(null);



    const handleDoubleClick = (box: box, index: number) => {
        setSelectedBox({ box, index });
    };

    const handleBoxClick = (box: box, index: number) => {
        setSelectedBox({ box, index });
    };

    const handleSave = (text: string, className: string) => {
        if (selectedBox) {
            const newBoxes = [...boxes];
            newBoxes[selectedBox.index] = {
                ...selectedBox.box,
                text,
                class: className,
            };

            setBoxes(newBoxes);
            setSelectedBox(null);
        }
    };

    const handleCancel = () => {
        setSelectedBox(null);
    };

    const handleDelete = () => {
        if (selectedBox) {
            const newBoxes = boxes.filter((_, index) => index !== selectedBox.index);
            setBoxes(newBoxes);
            setSelectedBox(null);
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar boxes={boxes} onboxClick={handleBoxClick} />
            <div style={{ position: "relative", flex: 1 }}>
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

export default Landing;
