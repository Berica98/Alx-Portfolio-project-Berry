import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Dashboard />
            <Payment />
            <Footer />
        </div>
    );
}

export default App;
