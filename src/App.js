import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/portfolio">
            <Navbar />
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
