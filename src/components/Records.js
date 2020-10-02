import React from "react";
import { useSelector } from "react-redux";

function Records(props) {
  const loadRecords = useSelector((state) => state.records.loadRecords);
  return (
    <div>
      {loadRecords ? (
        "Загрузка записей"
      ) : (
        <div className="records">
          <div>{props.record.title}</div>
          <div>{props.record.introtext}</div>
        </div>
      )}
    </div>
  );
}

export default Records;
