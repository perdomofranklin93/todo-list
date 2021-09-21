import * as React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/system";
import { useTodoQueries } from "../../../../services";
import { Todo, TodoForm } from "..";
import { Card, Divider, List } from "@mui/material";
import { TodoModel } from "../../../../models";

const TodoList = (): React.ReactElement => {
  // Todo Queries hook - GraphQL
  const todosQueries = useTodoQueries();

  const [data, setData] = React.useState<TodoModel[]>([]);

  // Get todos request
  const todos = useQuery("todos", async () => await todosQueries.getTodos(), {
    enabled: false,
  });

  /**
   * Add new todo element to the list todo
   * @param {TodoModel} todo
   */
  const _handleNewTodo = (todo: TodoModel) => {
    const prepare: Array<TodoModel> = JSON.parse(JSON.stringify(data));
    prepare.unshift(todo);
    setData([...prepare]);
  };

  React.useEffect(() => {
    todos.refetch().then((response) => {
      setData([...response.data]);
    });
  }, []);

  return (
    <>
      <TodoForm onNewTodo={_handleNewTodo} />
      <Box sx={{ mt: 2 }}>
        {todos.isLoading || todos.isFetching ? (
          <h1>Cargando datos...</h1>
        ) : (
          <Card variant="outlined">
            <List>
              {data && data.length
                ? data.map((todo: TodoModel, index: number) => (
                    <React.Fragment key={index}>
                      <Todo text={todo.text} />
                      {index < data.length - 1 ? <Divider /> : null}
                    </React.Fragment>
                  ))
                : null}
            </List>
          </Card>
        )}
      </Box>
    </>
  );
};

export { TodoList };
