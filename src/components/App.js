import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import Broadcasts from "./Broadcasts";
import {loadBroadcasts} from "../redux/actions";
import OpenBroadcast from "./OpenBroadcast";
// import Records from "./Records";

function App() {
  const loading = useSelector(state => state.broadcasts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBroadcasts());
  }, [dispatch]);

  return <div className="App">
    {loading ? "Идет загрузка" : (
        <div className="page">
          <div className="broadcasts">
            <Broadcasts />
          </div>
          <div className="choice">
            <i className="fas fa-long-arrow-alt-left"/>
            Выберите трансляцию
          </div>
          {/*<Records />*/}
          <OpenBroadcast />
        </div>
    )}
  </div>;
}

export default App;
