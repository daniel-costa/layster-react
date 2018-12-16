import React, { Component, Fragment } from 'react';
import MainStage from '../MainStage';
import Light from '../Elements/Light';

class App extends Component {
  state = {
    elements: [],
  };

  addShape = () => {
    this.setState(prevState => ({
      elements: [...prevState.elements, <Light x={200} y={100} />],
    }));
  };

  render() {
    const { elements } = this.state;
    return (
      <Fragment>
        <MainStage elements={elements} />
        <button type="button" onClick={this.addShape}>
          Add element
        </button>
      </Fragment>
    );
  }
}

export default App;
