
import ReactDOM from 'react-dom/client';
import './Components/styles/index.css';
import App from './App';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(
  root ?? document.createElement("div")
);
rootContainer.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

