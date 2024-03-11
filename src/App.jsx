// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Student from './Student';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Student/>
      <Footer />
    </div>
  );
}

export default App;
