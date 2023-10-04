import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { createRoot } from 'react-dom';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root')); 
root.render(
    <Router> {/* Wrap your App component with Router */}
    <App />
  </Router>
)
