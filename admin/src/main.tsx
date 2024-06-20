import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'store';
import { Provider } from 'react-redux';

// Components
import App from './app';

// Assets
import './assets/css/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store()}>
            <App />
        </Provider>
    </React.StrictMode>
);
