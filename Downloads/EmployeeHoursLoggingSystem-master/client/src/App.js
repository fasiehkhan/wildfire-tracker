//import Navbar from './components/Navbar';
import { Login } from './components/LoginView/Login';
import ManagerView from './components/ManagerView';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
      <Router>
          <div className="landing-page">
            <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                    <Login />
              </Route>
              <Route exact path="/manager">
                    <ManagerView />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
