import * as React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/system";
import { useTodoQueries } from "../../../../services";
import { Todo } from "..";
import { Card, Divider, List } from "@mui/material";
import { TodoModel } from "../../../../models";

const TodoList = (): React.ReactElement => {
  const todosQueries = useTodoQueries();
  const todos = useQuery("todos", async () => await todosQueries.getTodos());

  return (
    <Box sx={{ mt: 2 }}>
      {todos.isLoading || todos.isFetching ? (
        <h1>Cargando datos...</h1>
      ) : (
        <Card variant="outlined">
          <List>
            {todos.data && todos.data.length
              ? todos.data.map((todo: TodoModel, index: number) => (
                  <React.Fragment key={index}>
                    <Todo text={todo.text} />
                    {index < todos.data.length - 1 ? <Divider /> : null}
                  </React.Fragment>
                ))
              : null}
          </List>
        </Card>
      )}
    </Box>
  );
};

export { TodoList };
