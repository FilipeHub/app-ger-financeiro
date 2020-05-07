import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from "./styles/global";
import GlobalLayout from './pages/_layouts/global';
import {store, persistor} from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalLayout>
          <Router history={history}>
              <Routes />
              <GlobalStyle />
          </Router>
        </GlobalLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
