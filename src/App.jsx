import Hero from './components/Hero/Hero';
import Header from './components/header/Header'
import './App.css'
import Companies from './components/companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import GetStarted from './components/Getstarted/GetStarted';
import Footer from './components/footer/Footer';
function App() {
  return (
  <div className='App'>
    <div>
      <div className='white-gradient' />
    <Header />
    <Hero />
</div>
   <Companies />
  <Residencies />
   <Value />
   <Contact />
  <GetStarted />
  <Footer />
  </div>
  ); 
}

export default App;
