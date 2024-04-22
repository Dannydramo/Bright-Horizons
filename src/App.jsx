import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';
import Causes from './pages/Causes';

function App() {
    return (
        <Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/donate" element={<Donation />} />
                <Route path="/causes" element={<Causes />} />
            </Routes>
            <Footer />
        </Fragment>
    );
}

export default App;
