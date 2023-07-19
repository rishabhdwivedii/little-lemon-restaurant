import './App.css';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Menu />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;