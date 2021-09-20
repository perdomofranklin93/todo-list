import * as React from "react";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { Todo } from "..";
import { client, TASK_LIST_QUERY } from "../../../../services";
import {  gql } from "graphql-request";

function useTasks() {
  return useQuery("todos", async () => {
    const {
      posts: { data },
    } = await client.request(
      gql`
        ${TASK_LIST_QUERY}
      `
    );
    return data;
  });
}

const TaskList = () => {
  const todos = useTasks();
  return (
    <Box sx={{ mt: 2 }}>
      {todos.isLoading || todos.isFetching || !todos.data ? (
        <h1>Cargando datos...</h1>
      ) : (
        todos.data.todosList.items.map((item: any, index: number) => (
          <Todo key={index} title={item.title} description={item.description} />
        ))
      )}
    </Box>
  );
};

export { TaskList };
