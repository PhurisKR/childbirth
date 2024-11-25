import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import StagesPage from './pages/StagesPage';
import Footer from './components/Footer';

function App() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <Homepage />
                <StagesPage />
            </main>
            <Footer />
        </div>
    );
}

export default App;
