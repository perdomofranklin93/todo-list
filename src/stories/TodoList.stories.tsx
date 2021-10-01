import { ApolloProvider } from "@apollo/client";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../App";
import { TodoList } from "../pages/home/features";
import { client } from "../services";

export default {
  title: "Example/Todo List",
  component: TodoList,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
      <TodoList {...args} />
    </QueryClientProvider>
  </ApolloProvider>
);

export const Perform = Template.bind({});