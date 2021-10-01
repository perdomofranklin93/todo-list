import { ApolloProvider } from "@apollo/client";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoForm } from "../pages/home/features";
import { client } from "../services";

export default {
  title: "Example/Todo Form",
  component: TodoForm,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof TodoForm>;

const Template: ComponentStory<typeof TodoForm> = (args) => (
  <ApolloProvider client={client}>
    <TodoForm {...args} />
  </ApolloProvider>
);

export const Perform = Template.bind({});