import './App.css';
import Header from './Header.js';
import Welcome from './Welcome';
import HelpUs from './HelpUs.js';
import AboutUs from './AboutUs.js';
import Carousel from './Gallery';
import {horses} from './Data';

function App() {
  return (
    <div>
      <Header />
      <Welcome/>
      <AboutUs />
      <HelpUs />
      <Carousel images={horses}/>
    </div>
  );
}

export default App;
