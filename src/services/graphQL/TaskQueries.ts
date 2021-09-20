export const TASK_LIST_QUERY = `
query {
  tasksList {
    items {
      id
      title
      description
    }
  }
}
`;
