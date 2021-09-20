import * as React from "react";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/system";
import { TODO_LIST_QUERY } from "../../../../services";
import { Todo } from "..";
import { Card, Divider, List } from "@mui/material";
import { TodoModel } from "../../../../models";

const TodoList = (): React.ReactElement => {
  const todos = useQuery(TODO_LIST_QUERY);

  return (
    <Box sx={{ mt: 2 }}>
      {todos.loading ? (
        <h1>Cargando datos...</h1>
      ) : (
        <Card variant="outlined">
          <List>
            {todos.data.todosList.items.map(
              (todo: TodoModel, index: number) => (
                <React.Fragment key={index}>
                  <Todo text={todo.text} />
                  {index < todos.data.todosList.items.length - 1 ? (
                    <Divider />
                  ) : null}
                </React.Fragment>
              )
            )}
          </List>
        </Card>
      )}
    </Box>
  );
};

export { TodoList };
