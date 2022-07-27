import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'; // biblioteca Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ícones Bootstrap
import App from './App'; // contêiner do aplicativo

const local = document.getElementById('raiz');  // div que grava o app
const raiz = ReactDOM.createRoot(local);        // local da div

// Renderizando o app
raiz.render(
    <App />
);