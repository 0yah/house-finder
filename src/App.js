
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Login } from "./components/Login";
import { View } from "./components/View";
import { Home } from "./components/Home";
import { Add } from "./components/Add";
import { Update } from "./components/Update";


const App=()=> {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/view/:id" exact component={View}/>
          <Route path="/add" exact component={Add}/>
          <Route path="/update/:id" exact component={Update}/>
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
