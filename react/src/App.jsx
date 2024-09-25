import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
);

const Main = () => {
  const location = useLocation();
  const nodeRef = useRef(null); // Use useRef for CSSTransition

  return (
    <main>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={500}
          nodeRef={nodeRef} // Pass the ref to CSSTransition
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default App;