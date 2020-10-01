import React from "react";
import { useSelector } from "react-redux";
import Broadcast from "./Broadcast";

function OpenBroadcast() {
  const broadcasts = useSelector((state) => state.broadcasts.broadcasts);

  return <div>
      {broadcasts.map(broadcast => {
          // return <Broadcast broadcast={broadcast}/>
      })}
  </div>;
}

export default OpenBroadcast;
