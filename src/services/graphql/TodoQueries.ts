import { gql, useMutation } from "@apollo/client";
import { client } from ".";
import { TodoModel } from "../../models";

export const TODO_LIST_QUERY = gql`
  query TodoList {
    todosList(orderBy: [completed_ASC, createdAt_DESC]) {
      items {
        id
        text
        completed
      }
    }
  }
`;

export const CREATE_TODO_MUTATION = gql`
  mutation TodoCreate($data: TodoCreateInput!) {
    todoCreate(data: $data) {
      id
      text
      completed
    }
  }
`;

export const useTodoQueries = () => {
  const [todoCreate] = useMutation(CREATE_TODO_MUTATION);

  const getTodos = async () => {
    const response = await client.query({
      query: TODO_LIST_QUERY,
    });

    if (response.data) {
      response.data = response.data.todosList.items;
    } else {
      response.data = [];
    }

    return response.data;
  };

  const createTodo = async (data: TodoModel): Promise<TodoModel | null> => {
    const response = await todoCreate({
      variables: { data: { text: data.text } },
    });
    if (response) {
      return response.data.todoCreate as TodoModel;
    } else {
      return null;
    }
  };

  return {
    getTodos,
    createTodo,
  };
};
