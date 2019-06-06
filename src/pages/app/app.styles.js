import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  contentLayout: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -theme.spacing(30)
  },
  contentLayoutDrawerOpen: {
    marginLeft: 0
  },
  contentSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(200, 200, 200, .3)',
    zIndex: theme.zIndex.appBar + 1
  },
  progess: {
    margin: theme.spacing(2)
  }
}))

export default useStyles
