import React from "react";
import { createRoot } from "react-dom/client";

const Title = () => {
  return <p>I'm a front end developer</p>;
};

const Jsx = () => {
  return <h1>Hi Ronnie{Title()}</h1>;
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Jsx />);
