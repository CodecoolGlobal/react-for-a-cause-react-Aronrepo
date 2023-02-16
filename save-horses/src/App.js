import './App.css';
import Header from './Header.js';
import Welcome from './Welcome';
import HelpUs from './HelpUs.js';
import AboutUs from './AboutUs.js';
import Carousel from './Gallery';
import {horses} from './Data';
import Footer from './Footer.js';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Welcome/>
      <Carousel images={horses}/>
      <AboutUs />
      <HelpUs />
      <Footer />
    </div>
  );
}

export default App;
