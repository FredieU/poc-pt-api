import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Divider, DividerProps } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "or",
  width: "small",
};
