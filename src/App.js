import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./routes/profile"
import Login from "./routes/Login"
import Zoo from "./routes/zoo"
import Social from "./routes/social"
import Home from "./routes/home"

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  shadows: ["none"],
  typography: {
    fontFamily: "Nunito, Roboto, sans-serif",
    fontWeight: 700,
    button: { // Here is where you can customise the button
      fontSize: 16,
      fontWeight: 700,
    },
    

  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#D9D9D9',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    text: {
      primary: '#D9D9D9',
      secondary: '#D9D9D9',
      // disabled: styles.ttt,
      // hint: styles.tttt,
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="zoo" element={<Zoo />} />
            <Route path="social" element={<Social />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </ThemeProvider>
    </div>
    )
  }
}

export default App;
