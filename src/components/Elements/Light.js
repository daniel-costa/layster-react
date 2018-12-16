import React from 'react';
import { Group, Circle, Line } from 'react-konva';
import PropTypes from 'prop-types';

const Light = ({
  x, y, rotation, diameter,
}) => {
  const lineOffsetMin = (Math.sqrt(2) * diameter - diameter) / 2;
  const lineOffsetMax = diameter - lineOffsetMin;

  return (
    <Group x={x} y={y} rotation={rotation} draggable>
      <Circle
        x={diameter / 2}
        y={diameter / 2}
        width={diameter}
        height={diameter}
        fill="white"
        stroke="black"
        strokeWidth={1}
      />
      <Line
        points={[lineOffsetMin, lineOffsetMin, lineOffsetMax, lineOffsetMax]}
        stroke="#FFAA00"
        strokeWidth={4}
        lineCap="round"
        lineJoin="round"
      />
      <Line
        points={[lineOffsetMin, lineOffsetMax, lineOffsetMax, lineOffsetMin]}
        stroke="#FFAA00"
        strokeWidth={4}
        lineCap="round"
        lineJoin="round"
      />
    </Group>
  );
};

Light.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  diameter: PropTypes.number,
  rotation: PropTypes.number,
};

Light.defaultProps = {
  x: 0,
  y: 0,
  diameter: 100,
  rotation: 0,
};

export default Light;
