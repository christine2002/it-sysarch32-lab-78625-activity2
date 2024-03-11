// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', textAlign: 'center', backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}> {/* Center contents within a container */}
        <p>&copy; {new Date().getFullYear()} IT-SYSARCH32-78625 Made by Christine Pepito</p>
      </div>
    </footer>
  );
}

export default Footer;
