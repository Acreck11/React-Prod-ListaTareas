import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {ContextoTareaProvider} from './Contexto/ContextoTarea';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextoTareaProvider>

    <App />
    </ContextoTareaProvider>

  </React.StrictMode>,
)
