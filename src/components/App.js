import React from 'react';
import Navbar from './Navbar';
import TableArea from './TableArea';
import '../styles/app.css';

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <TableArea/>
        </div>
    
    )
}

export default App;