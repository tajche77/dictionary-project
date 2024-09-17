import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div>
        <strong>Example: </strong>
        {props.examples}
      </div>
    );
  } else {
    return (
      <div>
        <strong>Exapmles: </strong>none found
      </div>
    );
  }
}
