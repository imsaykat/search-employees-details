import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Employee from './components/Employee/Employee';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import SingleEmployee from './components/SingleEmployee/SingleEmployee';

function App() {
  return (
    <div>
      <Router>                                 
        <Navbar/>
   
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route exact path="/home">
                  <Home></Home>
              </Route>
              <Route exact path="/employee">
                <Employee></Employee>
              </Route>
              <Route exact path="/employee/:id">
                <SingleEmployee></SingleEmployee>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
