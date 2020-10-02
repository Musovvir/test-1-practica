import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Broadcasts from "./Broadcasts";
import { loadBroadcasts, loadRecords } from "../redux/actions";
import Records from "./Records";

function App() {
  const opened = useSelector((state) => state.broadcasts.opened);
  const loading = useSelector((state) => state.broadcasts.loading);
  const records = useSelector((state) => state.records.records);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadRecords(records.id));
  };

  useEffect(() => {
    dispatch(loadBroadcasts());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        "Идет загрузка"
      ) : (
        <div className="page">
          <div className="broadcasts" onClick={handleClick}>
            <Broadcasts />
          </div>
          {opened === null ? (
            <div className="choice">
              <i className="fas fa-long-arrow-alt-left" />
              Выберите трансляцию
            </div>
          ) : (
            <div>
              {records.map((record) => {
                return <Records record={record} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
