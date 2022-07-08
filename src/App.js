import './App.css';
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import Home from './pages/home/home';
import { HomeTemplate } from './templates/homeTemplate/homeTemplate';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path='/home' comp={Home}/>
        <HomeTemplate exact path='/' comp={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
