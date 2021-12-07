import './App.css';
import Nav from './nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Createpoll from './components/createpoll';

function App() {
  return (
   <Router>
      <>
      <Nav/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/createpoll' component={Createpoll}/>
      </Switch>
      </>
      </Router>
  );
}

export default App;
