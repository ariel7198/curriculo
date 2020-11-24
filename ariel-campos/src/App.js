import logo from './logo.svg';
import './App.css';

import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'
import Technologies from './components/pages/Technologies'

import Profilecard from './components/Profilecard'
import Menu from './components/Menu'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Profilecard />
      <Menu />
      <div className='container'>
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/experiencia' component={Experience} />
        <Route path='/tecnologias' component={Technologies} />
        <Route path='/contato' component={Contact} />
      </Switch>

      </div>
    </div>
  );
}

export default App;
