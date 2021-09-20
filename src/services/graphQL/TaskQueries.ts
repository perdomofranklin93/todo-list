export const TASK_LIST_QUERY = `
query {
  todosList {
    items {
      id
      title
      description
    }
  }
}
`;
