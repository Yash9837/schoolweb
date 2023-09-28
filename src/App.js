
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/about';
import Gallery from './routes/gallery';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/schoolweb' element={<Home/>}/>
        <Route path='/schoolweb/about' element={<About/>}/>
        <Route path='/schoolweb/gallery' element={<Gallery/>}/>
        <Route path='/schoolweb/contacts' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
