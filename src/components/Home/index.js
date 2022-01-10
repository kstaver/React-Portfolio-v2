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
                <Footer />
            </div>
        </div>
    )
}

export default Home;
