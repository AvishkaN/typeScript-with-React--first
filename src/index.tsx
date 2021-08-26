import React from 'react';
import ReactDOM from 'react-dom';
import TodosContextProvider from './Context/context';

import './index.css';
import App from './App';

ReactDOM.render(
    <TodosContextProvider>
        <App />
    </TodosContextProvider>
,
 document.getElementById('root'));

