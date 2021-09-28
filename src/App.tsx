import React, { Suspense } from "react";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RootModules } from "./pages/routers";

const RenderModules = () => {
  const modules = RootModules;
  return (
    <Suspense fallback={() => (<div>loading...</div>)}>
      <Router>
        <Switch>
          {modules.map((page, index) => (
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
};

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RenderModules />
    </QueryClientProvider>
  );
}

export default App;
