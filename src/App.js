import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Council from './components/Council'
import Events from './components/Events'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Rooms from './components/Rooms'
import Header from './components/Header'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element = {<Header />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/council' element = {<Council />} />
        <Route path='/events' element = {<Events />} />
        <Route path='/gallery' element = {<Gallery />} />
        <Route path='/rooms' element = {<Rooms />} />
      </Routes>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
