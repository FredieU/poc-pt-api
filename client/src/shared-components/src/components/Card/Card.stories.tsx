import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from ".";
import { Button } from "../Button";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <div
      style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}
    >
      Example session name
    </div>
    <div style={{ marginBottom: "1rem" }}>
      Some example description about this session.
    </div>
    <Button primary>View</Button>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
