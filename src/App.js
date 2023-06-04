import {Nav, Hero,About, How, Tech, Team, Faq, Fray, Footer} from './landingcomps/Components'
import './App.css';

function App() {
  return (
    <div className="App overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <How />
      <Tech />
      <Team />
      <Faq />
      <Fray />
      <Footer />
    </div>
  );
}

export default App;
