import { useState } from "react";
import "./Poem.css";

function Poem({ data }) {
  return <div className="poem-container">{data.title}</div>;
}

export default Poem;
