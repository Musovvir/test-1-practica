import React from "react";
import "./Record.css"

function Record({record}) {
  return (
    <div className="record">
      <div className="titleRecord">{record.title}</div>
      <div className="content">{record.content}</div>
    </div>
  );
}

export default Record;
