import * as React from "react";
import { Header } from "../../components";
import { Container } from "@mui/material";
import "./Home.scss";
import { TodoList } from "./features";

export default function Home(): React.ReactElement {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <TodoList />
      </Container>
    </div>
  );
}
