import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
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
