import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Broadcasts from "./Broadcasts";
import { loadBroadcasts } from "../redux/actions";
import Records from "./Records";

function App() {
  const loading = useSelector((state) => state.broadcasts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBroadcasts());
  }, [dispatch]);
  return (
    <div className="page">
      {loading ? "Идет загрузка..." : <Broadcasts />}
      <Records />
    </div>
  );
}

export default App;
