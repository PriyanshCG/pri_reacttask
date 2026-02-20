import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-hero">
                <h1>Innovation Store</h1>
                <p>Your premier destination for high-quality products powered by the latest web technologies.</p>
            </header>

            <div className="about-features">
                <div className="about-card">
                    <h3>Context State</h3>
                    <p>Utilizing React's Context API for seamless global state management across the entire shopping experience.</p>
                    <div className="api-badge">React 18+</div>
                </div>

                <div className="about-card">
                    <h3>Swirl Graphics</h3>
                    <p>High-performance canvas-based particle swirl animation for a truly immersive and premium aesthetic.</p>
                    <div className="api-badge">HTML5 Canvas</div>
                </div>

                <div className="about-card">
                    <h3>Dynamic Inventory</h3>
                    <p>Real-time data synchronization with the FakeStore REST API, delivering hundreds of unique products instantly.</p>
                    <div className="api-badge">FakeStore API</div>
                </div>
            </div>

            <div className="about-card" style={{ marginTop: '3rem', width: '100%' }}>
                <h3>Technical Architecture</h3>
                <p>
                    This application is built with a focus on performance and visual excellence.
                    By combining custom Canvas animations with a robust React Router navigation system,
                    we ensure a zero-lag experience that looks just as good as it performs.
                </p>
            </div>
        </div>
    );
};

export default About;
