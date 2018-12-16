import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
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
        <Button variant="contained" color="primary" onClick={this.addShape}>
          Add Element
        </Button>
      </Fragment>
    );
  }
}

export default App;
