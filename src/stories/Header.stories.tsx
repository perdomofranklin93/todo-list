import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../components";
import { ThemeProvider } from "@mui/material";

export default {
  title: "Example/Header",
  component: Header,
  args: {
    title: "Todo Web App",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...args }) => (
    <Header {...args} />
);

export const Title = Template.bind({});
Title.args = {};
