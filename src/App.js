import Nav from './landingcomps/Nav';
import Hero from './landingcomps/Hero';
import About from './landingcomps/About';
import How from './landingcomps/How';
import Tech from './landingcomps/Tech';
import Team from './landingcomps/Team';
import Faq from './landingcomps/Faq';
import Fray from './landingcomps/Fray';
import './App.css';

function App() {
  return (
    <div className="App xsm:overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <How />
      <Tech />
      <Team />
      <Faq />
      <Fray />
    </div>
  );
}

export default App;
