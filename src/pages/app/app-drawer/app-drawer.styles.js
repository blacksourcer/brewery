import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.spacing(30),
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.spacing(30)
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(9)
  }
}))

export default useStyles
