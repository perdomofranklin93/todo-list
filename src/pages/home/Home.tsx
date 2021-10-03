import { Header } from "../../components";
import { Container } from "@mui/material";
import { TodoForm, TodoList } from "./features";
import { FC, ReactElement, useContext, useEffect } from "react";
import { TodoContext, TodoState } from "./features/TodoContext/TodoContext";
import { useTodoQueries } from "../../services";

const HomePrepare: FC = (props): ReactElement => {
  // ctdx
  const { todo, setTodo, addTodo } = useContext(TodoContext);

  // service
  const { getTodos } = useTodoQueries();

  // init
  useEffect(() => {
    getTodos().then((data) => {
      setTodo([...data]);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header title={"Todo Web App"} />
      <Container maxWidth="md">
        <TodoForm onAddTodo={(todo) => addTodo(todo)} />
        <TodoList data={todo} />
      </Container>
    </div>
  );
};

export default function Home() {
  return (
    <TodoState>
      <HomePrepare />
    </TodoState>
  );
}
