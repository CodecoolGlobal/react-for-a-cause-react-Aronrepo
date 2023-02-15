import './App.css';
import Header from './Header.js';
import Welcome from './Welcome';
import HelpUs from './HelpUs.js';
import AboutUs from './AboutUs.js'
import Footer from './Footer.js'

function App() {
  return (
    <div>
      <Header />
      <Welcome/>
      <AboutUs />
      <HelpUs />
      <Footer />
    </div>
  );
}

export default App;
