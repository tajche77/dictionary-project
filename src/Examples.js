import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return <div>{props.examples}</div>;
  } else {
    return <div>no examples found</div>;
  }
}
