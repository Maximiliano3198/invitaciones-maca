import React, { useState, useEffect } from 'react';
import LeafletMap from '../LeafletMap'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('lazy-section');
      if (section && window.scrollY + window.innerHeight >= section.offsetTop) {
        setShowSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-3">Home Page</h1>
        <p className="lead">Welcome to the Home Page!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius? Veritatis maiores sapiente fugiat facere explicabo minima molestias, fuga ratione quaerat vitae error iste aut id minus eveniet quas provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit, repellat magni accusantium, earum temporibus, at totam nam natus ratione ab tempore ea dicta placeat sit mollitia eligendi! Assumenda, iure!</p>
        <img src="descarga.jpg" alt="img" className="responsive-image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius? Veritatis maiores sapiente fugiat facere explicabo minima molestias, fuga ratione quaerat vitae error iste aut id minus eveniet quas provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit, repellat magni accusantium, earum temporibus, at totam nam natus ratione ab tempore ea dicta placeat sit mollitia eligendi! Assumenda, iure!</p>
      </div>
      <div id="lazy-section" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
        {showSection ? <LazySection /> : <p>Scroll down to load more content...</p>}
      </div>
    </div>
  );
};

const LazySection = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
      <h2>Info</h2>
      <h3>Fecha</h3>
      <h3>Ubicación</h3>
      <LeafletMap />
      <br />
      <button className='bg-success'>Confirmar asistencia</button>
    </div>
  );
};

export default Home;
