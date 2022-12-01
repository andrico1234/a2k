import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { A2kButton } from "@a2000/button";
import "@a2000/button/a2k-button.js";

export const ButtonComponent = createComponent({
  tagName: "a2k-button",
  elementClass: A2kButton,
  react: React,
  events: {
    onactivate: "activate",
    onchange: "change",
  },
});
