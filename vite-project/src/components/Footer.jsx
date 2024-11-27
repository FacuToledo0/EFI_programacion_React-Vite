import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <Container >
        <p>&copy; 2024 MobxTec. Todos los derechos reservados.</p>
        <p>
          <a href="#privacy">Política de Privacidad</a> | <a href="#terms">Términos de Servicio</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
