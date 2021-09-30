import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services";
import Home from "./pages/home/Home";
import "./App.scss";

export const queryClient = new QueryClient();

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Cargando pagina...</div>}>
          <Router>
            <Switch>
              <Route path={"/"}>
                <Home />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
