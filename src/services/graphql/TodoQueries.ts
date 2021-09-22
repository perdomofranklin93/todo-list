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

const DELETE_TODO_MUTATION = gql`
  mutation TodoDelete($id: ID!) {
    todoDelete(filter: { id: $id }) {
      success
    }
  }
`;

const UPDATE_TEXT_TODO_MUTATION = gql`
  mutation TodoText($id: ID!, $text: String!) {
    todoUpdate(filter: { id: $id }, data: { text: $text }) {
      id
      text
    }
  }
`;

export const useTodoQueries = () => {
  const [create] = useMutation(CREATE_TODO_MUTATION);
  const [_delete] = useMutation(DELETE_TODO_MUTATION);
  const [update] = useMutation(UPDATE_TEXT_TODO_MUTATION);

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
    const response = await create({
      variables: { data: { text: data.text } },
    });
    if (response) {
      return response.data.todoCreate as TodoModel;
    } else {
      return null;
    }
  };

  const deleteTodo = async (id: string): Promise<any> => {
    const response = await _delete({
      variables: {
        id: id,
      },
    });

    if (response) return true;
    else return false;
  };

  const updateTodo = async (todo: TodoModel): Promise<any> => {
    const response = await update({
      variables: {
        id: todo.id,
        text: todo.text,
      },
    });

    if (response) return response.data.todoUpdate;
    else return false;
  };

  return {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
  };
};
