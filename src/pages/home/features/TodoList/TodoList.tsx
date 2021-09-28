import * as React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/system";
import { useTodoQueries } from "../../../../services";
import { Todo, TodoForm } from "..";
import { List } from "@mui/material";
import { TodoModel } from "../../../../models";
import { TodoSkeleton } from "../Todo/TodoSkeleton";

const TodoList: React.FC<any> = () => {
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
      setData([...(response?.data as TodoModel[])]);
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
  const handleDeleteState = React.useCallback(
    (index: number) => {
      setData((values) => {
        return values.filter((item, i) => (i !== index ? true : false));
      });
    },
    [setData]
  );

  // Update the data state after delete
  const handleUpdateState = React.useCallback(
    (todo: Partial<TodoModel>, index: number) => {
      const values = JSON.parse(JSON.stringify(data));
      values[index] = { ...values[index], ...todo };
      setData([...values]);
    },
    [data, setData]
  );

  return (
    <>
      <TodoForm onNewTodo={_handleNewTodo} />
      <Box sx={{ mt: 2 }}>
        {todos.isLoading || todos.isFetching ? (
          <TodoSkeleton />
        ) : (
          <List>
            {data && data.length
              ? data.map((todo: TodoModel, index: number) => (
                  <React.Fragment key={index}>
                    <Todo
                      data={todo}
                      onToggle={(todo) => {
                        handleUpdateState(todo, index);
                      }}
                      onDelete={() => {
                        handleDeleteState(index);
                      }}
                      onUpdate={(todo) => {
                        handleUpdateState(todo, index);
                      }}
                    />
                  </React.Fragment>
                ))
              : null}
          </List>
        )}
      </Box>
    </>
  );
};

export { TodoList };
