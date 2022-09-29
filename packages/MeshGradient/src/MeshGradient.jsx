import React from "react";
import meshes from "./meshes";

const MeshGradient = (props) => {
  const { style: styleProp, ...otherProps } = props;
  const meshName =
    props.meshName && Object.keys(meshes).includes(props.meshName)
      ? props.meshName
      : "default";
  const mesh = meshes[meshName];

  const style = { ...props.style, ...mesh };

  return <div style={style} {...otherProps}></div>;
};

export default MeshGradient;
