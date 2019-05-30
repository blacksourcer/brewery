import React from 'react'
import PropTypes from 'prop-types'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import HomeIcon from '@material-ui/icons/Home'
import GrainIcon from '@material-ui/icons/Grain'
import CategoryIcon from '@material-ui/icons/Category'

import useStyles from './layout-drawer.styles'

const LayoutDrawer = ({ open }) => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      classes={{
        paper: classes.drawerPaper
      }}
      open={open}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
          <ListItemText primary='Batches' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary='Ingridients' />
        </ListItem>
      </List>
    </Drawer>
  )
}

LayoutDrawer.propTypes = {
  open: PropTypes.bool
}

export default LayoutDrawer
