import react from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componant/Home/Home'; 
import Projet from './Componant/Project/Projet';
import Blog from './Componant/Blog/Blog';
import About from './Componant/About/About';
import Contact from './Componant/Contact/Contact';
import Manubar from './Componant/Navbar/Manubar';




function App() {
  return (
    <div>
      <Router>
        <Manubar></Manubar>
      <Switch>
        <Route path="/home">
      <Home/>  
      </Route>
      <Route  exact path="/">
            <Home/>
            </Route>
          <Route path="/project">
            <Projet/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
