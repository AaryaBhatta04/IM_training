// // Global CSS
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// // ======================================== Using Bootstrap CSS
// // npm i bootstrap bootstrap-icons

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import 'bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// // ======================================== Multi Components
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import 'bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ComponentOne from './components/2_multi_components/ComponentOne';
// import ComponentTwo from './components/2_multi_components/ComponentTwo';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ComponentOne />
//     <ComponentTwo />
//   </React.StrictMode>
// );

// // ======================================== Multi Components
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import 'bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ComponentOne from './components/2_multi_components/ComponentOne';
// import ComponentTwo from './components/2_multi_components/ComponentTwo';

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(
//   <React.StrictMode>
//     <ComponentOne />
//   </React.StrictMode>
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root2.render(
//   <React.StrictMode>
//     <ComponentTwo />
//   </React.StrictMode>
// );

// ======================================== Using Parent Component - Multi Component
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);