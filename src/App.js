import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import MainPage from './components/main'
import Home from './components/home'

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              <Route path="/">
                  <MainPage />
              </Route>
          </Switch>
        </Router>
  );
}

export default App;
