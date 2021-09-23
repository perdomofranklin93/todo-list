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

  // init
  React.useEffect(() => {
    todos.refetch().then((response) => {
      setData([...(response.data as TodoModel[])]);
    });
    // eslint-disable-next-line
  }, []);


  /**
   * Add new todo element to the list todo
   * @param {TodoModel} todo
   */
   const _handleNewTodo = (todo: TodoModel) => {
    const prepare: Array<TodoModel> = JSON.parse(JSON.stringify(data));
    prepare.unshift(todo);
    setData([...prepare]);
  };

  // Update the data state after update
  const handleUpdateState = React.useCallback(
    (index: number) => {
      setData((values) => {
        return values.filter((item, i) => (i !== index ? true : false));
      });
    },
    [data, setData]
  );

  // Update the data state after delete
  const handleDeleteState = React.useCallback(
    (todo: Partial<TodoModel>, index: number) => {
      const values = JSON.parse(JSON.stringify(data));
      values[index].text = todo.text as string;
      setData([...values]);
    },
    [data, setData]
  );

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
                      <Todo
                        id={todo.id}
                        text={todo.text}
                        onDelete={() => {
                          handleUpdateState(index);
                        }}
                        onUpdate={(todo) => {
                          handleDeleteState(todo, index);
                        }}
                      />
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
