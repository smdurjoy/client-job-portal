import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/style.css';
import './assets/css/custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
