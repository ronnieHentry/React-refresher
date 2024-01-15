import React from "react";
import { createRoot } from "react-dom/client";

const firstElement = React.createElement(
  "div",
  {},
  React.createElement(
    "p",
    { style: { border: "2px solid black" } },
    "Hello first project sss"
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(firstElement);
