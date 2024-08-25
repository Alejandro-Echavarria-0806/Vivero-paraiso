import React from 'react';

const About = () => (
  <div className="about">
    <h2>Bienvenido a Paradise Nursery</h2>
    <p>Ofrecemos una gran variedad de plantas de interior para embellecer tu hogar.</p>
    <button onClick={() => window.location.href = '/products'}>Comenzar</button>
  </div>
);

export default About;
