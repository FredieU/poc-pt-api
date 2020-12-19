import React from "react";

export const decorators = [
  (Story) => (
    <div style={{ fontFamily: "Calibri" }}>
      <Story />
    </div>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
};
