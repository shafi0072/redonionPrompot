import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
