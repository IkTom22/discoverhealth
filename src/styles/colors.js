import { createMuiTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import {Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


// export const theme = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: {
//       light: '#4791db',
//       main: '#1976d2',
//       dark: '#115293',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff4081',
//       main: '#f50057',
//       dark: '#c51162',
//       contrastText: '#000',
//     },
//     success: {
//         light: '#81c784',
//         main: '#4caf50',
//         dark: '#388e3c',
//         contrastText: '#000',
//     }
//   },
// });
export const ColorButton = withStyles((theme) => ({
  root: {
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
    color: green['A400'],
  //   '&:hover': {
  //     backgroundColor: purple[700],
  //   },
  },
}))(Button);

