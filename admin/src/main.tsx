import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import { store } from 'store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import './i18n';

// Components
import App from './app';

// Assets
import './assets/css/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Provider store={store()}>
                <App />
            </Provider>
        </I18nextProvider>
    </React.StrictMode>
);
