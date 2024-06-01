import React, { useState } from "react";
import { box } from "../../assets/canvas-data/types";
import { canvasData } from "../../assets/canvas-data";

const useBox = () => {
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
    return { handleBoxClick, handleDoubleClick, handleSave, handleCancel, handleDelete, boxes, selectedBox };
};

export default useBox;
