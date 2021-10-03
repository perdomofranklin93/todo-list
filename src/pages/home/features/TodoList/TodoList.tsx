import { Divider, List } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactElement, useContext } from "react";
import { Todo } from "..";
import { TodoModel } from "../../../../models";
import { TodoSkeleton } from "../Todo/TodoSkeleton";
import { TodoContext } from "../TodoContext/TodoContext";

interface TodoListProps {
  data: Array<TodoModel>;
}

const TodoList: FC<TodoListProps> = (props): ReactElement => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      <Box sx={{ marginY: 3 }}>
        <Divider />
      </Box>
      <Box>
        {props.data.length ? (
          <List sx={{ paddingTop: 0 }}>
            {props.data.map((todo: TodoModel, index: number) => (
              <Todo
                key={index}
                data={todo}
                onToggle={(todo) => updateTodo(todo)}
                onDelete={() => deleteTodo(todo.id as string)}
                onUpdate={(todo) => updateTodo(todo)}
              />
            ))}
          </List>
        ) : (
          <TodoSkeleton />
        )}
      </Box>
    </>
  );
};

export { TodoList };
