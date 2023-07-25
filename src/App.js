import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={Intro} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Intro" component={Intro} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Footer} />
        </Routes>
      </Router>
      <Intro />
      <Menu />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;