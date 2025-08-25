import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => (
    <Layout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
    </Layout>
);

export default App;