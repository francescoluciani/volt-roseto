import { Switch, Route } from "react-router";
import { useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Home/Banner";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Join from "./components/Join/Join";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MemberList from "./components/Members/MembersList";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare);

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div>
        <NavBar />
        <Banner location={location.pathname} />

        <Switch>
          <Route path="/chi-siamo">
            <About />
          </Route>
          <Route path="/progetti">
            <Projects />
          </Route>
          <Route path="/membri">
            <MemberList />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/unisciti">
            <Join />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
