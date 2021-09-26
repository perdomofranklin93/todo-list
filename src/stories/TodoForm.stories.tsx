import { ApolloProvider } from "@apollo/client";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoForm } from "../pages/home/features";
import { client } from "../services";

export default {
  title: "Example/TodoForm",
  component: TodoForm,
  parameters: {
    docs: [],
  },
} as ComponentMeta<typeof TodoForm>;

export const Template: ComponentStory<typeof TodoForm> = (args) => (
  <ApolloProvider client={client}>
    <TodoForm {...args} />
  </ApolloProvider>
);

export const Perform = Template.bind({});