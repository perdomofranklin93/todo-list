import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PagesModules } from "./pages/routers";

function App() {
  const pages = PagesModules;

  return (
    <Suspense fallback={<div>...loading</div>}>
      <Router>
        <Switch>
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              exact={page.exact}
              component={page.module}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
