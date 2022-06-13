import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import LoadingComponent from './components/loadingComponent/LoadingComponent';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import HomeTemplates from './templates/HomeTemplates/HomeTemplates';
import UserTemplates from './templates/UserTemplates/UserTemplates';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <LoadingComponent />
      <Switch>

        <HomeTemplates path='/home' exact Component={Homepage} />

        <UserTemplates path='/login' exact Component={Login} />
        <UserTemplates path='/register' exact Component={Register} />

        <HomeTemplates path='/' exact Component={Homepage} />

      </Switch>
    </Router>
  );
}

export default App;
