import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#FF3D5A',
      light: '#ff546d',
      
    },
    secondary: {
      main: '#c31761',
      light:'#FFB3D4'
    },
    verylight: {
      main: '#FFB3D4'
    },
  },
};

const theme=createTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
