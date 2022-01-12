import React from 'react';
import About from '../Body/About';

import Footer from '../Footer';
import Header from '../Header';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <div>
                <About />
            </div>
            <div>
                This is projects??
            </div>
            <div>
                This is skills??
            </div>
            <div>
                This is work??
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;
