import * as React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../components";

export default {
  title: "Example/Header",
  component: Header,
  args: {
    title: "Todo Web App",
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...args }) => (
  <Header {...args} />
);

export const Title = Template.bind({});
Title.args = {};