import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class CollapseListItem extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { text, content } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {content}
        </Collapse>
      </Fragment>
    );
  }
}

CollapseListItem.propTypes = {
  text: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};

export default CollapseListItem;
