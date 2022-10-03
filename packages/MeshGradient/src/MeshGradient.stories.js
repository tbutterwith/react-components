import React from "react";
import MeshGradient from "./MeshGradient";

const options = {
  title: "Components/MeshGradient",
  component: MeshGradient,
};

export default options;

const meshGradientDefaultStory = ({ meshName, width, height }) => (
  <MeshGradient style={{ height, width }} meshName={meshName} />
);

export const Mesh = meshGradientDefaultStory.bind({});

Mesh.args = {
  meshName: "default",
  width: "600px",
  height: "400px",
};
