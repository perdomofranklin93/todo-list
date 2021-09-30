import { ApolloProvider } from "@apollo/client";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Todo } from "../src/pages/home/features";
import { client } from "../src/services";
export default {
  title: "Example/Todo",
  component: Todo,
  args: {
    data: {
      id: "0",
      text: "Mock Todo",
      completed: false,
    },
  },
  parameters: {
    docs: {
      page: null
    },
  },
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => (
  <ApolloProvider client={client}>
    <Todo {...args} />
  </ApolloProvider>
);

export const Data = Template.bind({});
