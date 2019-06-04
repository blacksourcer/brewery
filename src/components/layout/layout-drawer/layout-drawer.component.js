import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'

import HomeIcon from '@material-ui/icons/Home'
import GrainIcon from '@material-ui/icons/Grain'
import CategoryIcon from '@material-ui/icons/Category'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import useStyles from './layout-drawer.styles'

const LayoutDrawer = ({ open }) => {
  const classes = useStyles()

  const [ ingridientsOpen, setIngridientsOpen ] = useState(false)

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
        <ListItem component={Link} to='/' button>
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
        <ListItem button onClick={() => setIngridientsOpen(!ingridientsOpen)}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary='Ingridients' />
          {ingridientsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={ingridientsOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem component={Link} to='/nicotines' button className={classes.nested}>
              <ListItemText primary='Nicotines' />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  )
}

LayoutDrawer.propTypes = {
  open: PropTypes.bool
}

export default LayoutDrawer
