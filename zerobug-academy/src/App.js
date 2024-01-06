
import './App.css';
import Home from './pages/home';
import Python from './pages/python';
import About from './pages/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
         <Route path='/' element={<Home />}/> 
         <Route path='/About' element={<About/>}/>

         <Route path='/blog' element={<Python/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
