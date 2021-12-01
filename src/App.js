import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import error from './error'
import About from './About'
import Results from './Results'
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
const App = () => {
 const[click,setClick]=useState(false)
 const[showButton,setShowButton]=useState(true);
  const showBurger = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false)

    } else {
      setClick(false)
      setShowButton(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showBurger)
    return () => {
      window.removeEventListener('resize', showBurger)
    }
  }, [])
  return (
      <Router>
      <h2 className="logo">EVOTE</h2>
        <div className={showButton?"laptop":"hidden"}>
          <ul className="nav-items">
           
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Login'>Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/AboutUs'>AboutUs</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Results'>Results</Link></li>
          </ul>
        </div>
         
        <div className={showButton ? "hidden" : "mobile"}>
          <button className="Bar" onClick={()=>setClick(!click)}>{!click?<FaBars/>:<CgClose/>}</button>
          <div className={click?"show":"hidden"}>
            <ul className="nav-items1">
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Login'>Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/AboutUs'>AboutUs</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Results'>Results</Link></li>
          </ul>
          </div>
        </div>
        

        <Switch>
          <Route exact path='/'>{Home}</Route>
          <Route exact path='/Login'>{Login}</Route>
          <Route exact path='/AboutUs'>{About}</Route>
          <Route exact path='/Results'>{Results}</Route>
          <Route exact path='*'>{error}</Route>
        </Switch>
      </Router>
  );
}

export default App;
