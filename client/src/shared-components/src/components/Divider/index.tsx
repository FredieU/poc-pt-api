import React from "react";
import { ReactElement } from "react";
import "./Divider.css";

export type DividerProps = {
  label: string;
  width?: "small" | "medium" | "large";
};

export function Divider({
  label,
  width = "small",
}: DividerProps): ReactElement {
  return (
    <div className={`divider divider--${width}`}>
      <div className="divider__border"></div>
      <p className="divider__label">{label}</p>
      <div className="divider__border"></div>
    </div>
  );
}
