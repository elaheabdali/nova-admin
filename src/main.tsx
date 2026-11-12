import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
=======
  <React.StrictMode><Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider></React.StrictMode>,
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
);
