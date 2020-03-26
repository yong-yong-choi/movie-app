import React from 'react';
import Header from '../components/Header';

function About(props) {
    console.log(props);
    return (
        <section className="container">
            <Header title="About" />
            <p className="about-para">About this page : I built it because I love movies.</p>
        </section>
    )
}

export default About;