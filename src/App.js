
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
import { Listing } from "./components/Listing";

const App=()=> {
  return (
<Router>


      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">House Finder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/view/:id" exact component={View}/>
          <Route path="/listing" exact component={Listing}/>
          <Route path="/add" exact component={Add}/>
          <Route path="/update/:id" exact component={Update}/>
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
