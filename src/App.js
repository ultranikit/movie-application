import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import routes from "./constants/routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={routes.movies.index} component={Homepage} />
          <Route
            path={routes.movies.movieDetails}
            component={MovieDetailsPage}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
