import { makeStyles } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: theme.spacing(10),
    textAlign: 'center',
    color: grey[300]
  }
}))

export default useStyles
