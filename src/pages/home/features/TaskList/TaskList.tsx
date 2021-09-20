import * as React from "react";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { Task } from "..";
import { client, TASK_LIST_QUERY } from "../../../../services";
import {  gql } from "graphql-request";

function useTasks() {
  return useQuery("tasks", async () => {
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
  const tasks = useTasks();
  return (
    <Box sx={{ mt: 2 }}>
      {tasks.isLoading || tasks.isFetching || !tasks.data ? (
        <h1>Cargando datos...</h1>
      ) : (
        tasks.data.tasksList.items.map((item: any, index: number) => (
          <Task key={index} title={item.title} description={item.description} />
        ))
      )}
    </Box>
  );
};

export { TaskList };
