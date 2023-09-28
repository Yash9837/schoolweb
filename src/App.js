
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
        <Route path='/dummy' element={<Home/>}/>
        <Route path='/dummy/about' element={<About/>}/>
        <Route path='/dummy/gallery' element={<Gallery/>}/>
        <Route path='/dummy/contacts' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
