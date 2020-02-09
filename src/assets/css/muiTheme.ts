import { createMuiTheme } from '@material-ui/core/styles'

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F3852B',
      contrastText: "#fff"
    },
    secondary: {
      // boxHead: '#EDEDED',
      light: '#444854',
      main: '#1B1E24'
    }
  }
})

export default muiTheme
