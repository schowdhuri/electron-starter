import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../Header";

export default {
  title: "atoms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => {
  return <Header />;
};

export const Default = Template.bind({});
Default.args = {};
