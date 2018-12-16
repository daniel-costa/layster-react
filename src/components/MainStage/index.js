import React, { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import PropTypes from 'prop-types';
import Light from '../Elements/Light';

class MainStage extends Component {
  state = {};

  render() {
    const { elements } = this.props;
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {elements.map(item => item)}
          <Text text={`Currently ${elements.length} elements`} />
        </Layer>
      </Stage>
    );
  }
}

MainStage.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.instanceOf(Light)).isRequired,
};

export default MainStage;
