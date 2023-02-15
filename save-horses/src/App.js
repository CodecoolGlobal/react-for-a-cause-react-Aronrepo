import './App.css';
import Header from './Header.js';
import Welcome from './Welcome';
import HelpUs from './HelpUs.js';
import AboutUs from './AboutUs.js'

function App() {
  return (
    <div>
      <Header />
      <Welcome/>
      <AboutUs />
      <HelpUs />
    </div>
  );
}

export default App;
