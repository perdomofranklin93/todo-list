import * as React from "react";
import { gql } from "@apollo/client";
import { client } from ".";

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

export const useTodoQueries = () => {
  const getTodos = async () => {
    const response = await client.query({
      query: gql`
        ${TODO_LIST_QUERY}
      `,
    });

    if (response.data) {
      response.data = response.data.todosList.items;
    } else {
      response.data = [];
    }

    return response.data;
  };

  return {
    getTodos,
  };
};
