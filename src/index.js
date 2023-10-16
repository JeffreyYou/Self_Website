import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/global.css"

import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/*' element={<App />} />
    //     </Routes>
    // </BrowserRouter>
    <App/>
);



