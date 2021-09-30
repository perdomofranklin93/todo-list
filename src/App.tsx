import React, { Suspense } from "react";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

export const queryClient = new QueryClient();

function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={() => <div>Cargando pagina...</div>}>
        <Router>
          <Switch>
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
