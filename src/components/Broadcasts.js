import React from "react";
import { useSelector } from "react-redux";
import "./Broadcasts.css";

function Broadcasts() {
  const broadcasts = useSelector((state) => state.broadcasts.broadcasts);

  return (
    <div>
      {broadcasts.map((broadcast) => {
        return (
          <div key={broadcasts.id} className="title">
            {broadcast.title}
          </div>
        );
      })}
    </div>
  );
}

export default Broadcasts;
