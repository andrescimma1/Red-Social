import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/test"
            render={() => {
              return (
                <div>
                  <Profile />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
