import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Errorpage from "./Components/Errorpage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
          <Switch>
              <Route exact path="/">
                    <Home />
              </Route>
              <Route exact path="/contact">
                    <Contact />
              </Route>
              <Route exact path="/about">
                    <About />
              </Route>
              <Route exact path="/signin">
                    <Signin />
              </Route>
              <Route exact path="/signup">
                    <Signup />
              </Route>
              <Route>
                    <Errorpage />
              </Route>
          </Switch>
    </Router>
  );
}

export default App;
