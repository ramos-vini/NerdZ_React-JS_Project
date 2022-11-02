import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#FF731D',
      },
      secondary: {
        main: '#B25014',
      },
    },
  });

  const OrangeTextField = {
    '& label.Mui-focused': {
      color: '#FF731D',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF731D',
    },
    '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: '#FF731D',
      // },
      '&:hover fieldset': {
        borderColor: '#FF731D',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FF731D',
      },
    },
  };

export {OrangeTextField, theme};