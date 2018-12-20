import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import CollapseListItem from '../CollapseListItem';
import Theme from './Theme';

const CustomDrawer = ({ classes }) => (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="right"
    s
  >
    <div className={classes.toolbar} />
    <List
      component="nav"
      subheader={<ListSubheader component="div">Add Shape</ListSubheader>}
      className={classes.listItemRoot}
    >
      <CollapseListItem
        text="Tables"
        content={
          <>
            <ListItem button className={classes.listItemRootNested}>
              <ListItemText primary="Desk 1 person" />
            </ListItem>
            <ListItem button className={classes.listItemRootNested}>
              <ListItemText primary="Desk 2 person" />
            </ListItem>
            <ListItem button className={classes.listItemRootNested}>
              <ListItemText primary="Desk 4 person" />
            </ListItem>
          </>
        }
      />
      <CollapseListItem
        text="Miscellaneous"
        content={
          <>
            <ListItem button className={classes.listItemRootNested}>
              <ListItemText primary="Light" />
            </ListItem>
          </>
        }
      />
    </List>
  </Drawer>
);

CustomDrawer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(Theme)(CustomDrawer);
