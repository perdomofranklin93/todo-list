import * as React from "react";
import { Header } from "../../components";
import { TaskForm } from "./features";
import { Container } from "@mui/material";
import "./Home.scss";
import { TaskList } from "./features/TaskList/TaskList";

export default function Home(): React.ReactElement {
  return (
    <div>
      <Header />
      <Container fixed>
        <TaskForm />
        <TaskList />
      </Container>
    </div>
  );
}
