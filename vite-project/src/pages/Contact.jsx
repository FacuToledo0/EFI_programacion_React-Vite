import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div className="container mt-5">

      <h2>Sobre Nosotros</h2>
      <p>En MobxTec, nos dedicamos a proporcionar las mejores soluciones tecnológicas para nuestros clientes. Nuestra misión es innovar constantemente para satisfacer las necesidades de un mundo en constante cambio. Valoramos la calidad, el servicio al cliente y la integridad en todo lo que hacemos.</p>
      <h3>Misión</h3>
      <p>Proveer productos tecnológicos de alta calidad que mejoren la vida de nuestros clientes.</p>
      <h3>Visión</h3>
      <p>Ser líderes en el mercado de tecnología, reconocidos por nuestra innovación y excelencia en el servicio.</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 text-center">
          <p><strong>Dirección:</strong> Calle Falsa 123, Córdoba, Argentina</p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <p><strong>Teléfono:</strong> +54 351 123 4567</p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <p><strong>Email:</strong> contacto@mobxtec.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
