import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import './index.css';
// import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        {/* <ThemeProvider theme={darkTheme}> */}
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        {/* </ThemeProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
