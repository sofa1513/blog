import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { store } from './store';
createRoot(document.getElementById('root')).render(_jsx(Provider, { store: store, children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
