import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// __________Pasos para desplegar en GithubPage
// 1er. Instalar " npm install --save-dev gh-pages "
// 2do. Configurar el package.json
    
//     "scripts": {
//       "start": "react-scripts start",
//       "build": "react-scripts build",
//       "test": "react-scripts test",
//       "eject": "react-scripts eject",
//       "predeploy": "npm run build",    ////nuevo
//       "deploy": "gh-pages -d build"    ////nuevo
//     },
//     "homepage": "https://Ronald803.github.io/practice-api-soundcloud"
// 3ero. npm run deploy
// 4to.  git add .
// 5to.  git commit -m 'deploying to githubpages'
// 6to.  git push