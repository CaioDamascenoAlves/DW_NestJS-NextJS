import React, { ReactNode, useState } from 'react';

interface ResizableDivProps {
  children: ReactNode;
}

const ResizableDiv: React.FC<ResizableDivProps> = ({ children }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [height, setHeight] = useState('60px');

  const handleMouseDown = (_e: React.MouseEvent) => {
    setMouseDown(true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDown) {
      setHeight(`${e.clientY}px`);
    }
  };

  return (
    <div 
      style={{ height: height, resize: 'vertical', overflow: 'auto' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default ResizableDiv;
