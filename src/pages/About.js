import React from "react";
import './About.css';

function About() {
    return (
        <main className="about-page">
            <div className="about-header">
            <h1>About our company</h1>
            <p>Learn more about our mission, vision, and values.</p>
            </div>
            <div className="about-content">
                <div className="about-cards">
                    <h2>Our Mission</h2>
                    <p>To provide top-notch freelance services that empower businesses and individuals to achieve their goals.</p>
                </div>
                <div className="about-cards">
                    <h2>Our Vision</h2>
                    <p>To be the leading platform connecting freelancers with clients worldwide, fostering innovation and creativity.</p>
                </div>
                <div className="about-cards">
                    <h2>Our Values</h2> 
                    <p>Integrity, Excellence, Collaboration, and Customer Satisfaction are at the core of everything we do.</p>
                    </div>

            </div>
        </main>
    );
}

export default About;