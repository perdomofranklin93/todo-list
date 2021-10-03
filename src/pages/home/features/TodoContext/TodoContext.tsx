import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { TodoModel } from "../../../../models";

interface TodoContextProps {
  todo: Array<TodoModel>;
  setTodo: Dispatch<SetStateAction<Array<TodoModel>>>;
  addTodo: (todo: TodoModel) => void;
  updateTodo: (todo: TodoModel) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextProps>({} as any);

const TodoState: FC = (props) => {
  const [todo, setTodo] = useState<Array<TodoModel>>([]);

  const addTodo = (item: TodoModel): void => {
    const data = todo;
    data.unshift(item);
    setTodo([...data]);
  };

  const updateTodo = (todo: TodoModel): void => {
    setTodo((values) => {
      setTodo((values) => {
        // update by id
        values = values.map((item) =>
          item.id === todo.id ? { ...item, ...todo } : item
        );
        return values;
      });
      return values;
    });
  };

  const deleteTodo = (id: string): void => {
    setTodo((values) => {
      return values.filter((item, i) => (item.id !== id ? true : false));
    });
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, addTodo, updateTodo, deleteTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoState };
