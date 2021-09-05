import Navbar from "./components/Nav/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./components/Home/Search";
import Movie from "./components/Home/Movie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />{" "}
          <Route path="/movie/:id" component={Movie} />{" "}
        </Switch>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
