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

const TOGGLE_TODO_MUTATION = gql`
  mutation TodoUpdate($id: ID!, $completed: Boolean!) {
    todoUpdate(filter: { id: $id }, data: { completed: $completed }) {
      id
      completed
    }
  }
`;

export const useTodoQueries = () => {
  /* CRUD mutations */
  const [create] = useMutation(CREATE_TODO_MUTATION);
  const [_delete] = useMutation(DELETE_TODO_MUTATION);
  const [update] = useMutation(UPDATE_TEXT_TODO_MUTATION);
  const [toggle] = useMutation(TOGGLE_TODO_MUTATION);

  /**
   * Get todos list
   * @returns {Promise<TodoModel[]>}
   */
  const getTodos = async (): Promise<TodoModel[]> => {
    // make request
    const response = await client.query({
      query: TODO_LIST_QUERY,
    });

    // map and return response
    if (response.data) return response.data.todosList.items;
    else return [];
  };

  /**
   * Create a todo
   * @param  {TodoModel} data
   * @returns {Promise<TodoModel | null>}
   */
  const createTodo = async (data: TodoModel): Promise<TodoModel | null> => {
    // make request
    const response = await create({
      variables: { data: { text: data.text } },
    });

    // map and return response
    if (response) return response.data.todoCreate as TodoModel;
    else return null;
  };

  /**
   * Delete a todo
   * @param {string} id
   * @returns {Promise<boolean>}
   */
  const deleteTodo = async (id: string): Promise<boolean> => {
    // make request
    const response = await _delete({
      variables: {
        id: id,
      },
    });

    // map and return response
    if (response) return true;
    else return false;
  };

  /**
   * Update todo text
   * @param {TodoModel} todo
   * @returns
   */
  const updateTodo = async (todo: TodoModel): Promise<TodoModel | boolean> => {
    // make request
    const response = await update({
      variables: {
        id: todo.id,
        text: todo.text,
      },
    });

    // map and return response
    if (response) return response.data.todoUpdate as TodoModel;
    else return false;
  };

  const toggleTodo = async (todo: TodoModel): Promise<any | null> => {
    const response = await toggle({
      variables: { id: todo.id, completed: todo.completed },
    });
    if (response) return response.data.todoUpdate;
    else return null;
  };

  return {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    toggleTodo
  };
};
