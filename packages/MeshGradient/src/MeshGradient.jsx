import React from "react";
import { LargeMeshes } from "./meshes";

const MeshGradient = (props) => {
  const { style: styleProp, ...otherProps } = props;

  const meshName =
    props.meshName && Object.keys(LargeMeshes).includes(props.meshName)
      ? props.meshName
      : "default";
  const mesh = LargeMeshes[meshName];

  const style = { ...props.style, ...mesh };

  return <div style={style} {...otherProps}></div>;
};

export default MeshGradient;
