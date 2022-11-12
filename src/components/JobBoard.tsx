import { useState, useEffect } from "react";
import dataAPI from "../services/getApi";
import JobBoardItem from "./JobBoardItem";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function GetData(): JSX.Element {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    if (data === null) {
      dataAPI
        .fetchData()
        .then((data) => {
          setData(data);
          setStatus(Status.RESOLVED);
        })
        .catch((error) => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, []);

  if (status === Status.IDLE) {
    return <div className="status">No data</div>;
  }

  if (status === Status.PENDING) {
    return <div className="status">Loading...</div>;
  }

  if (status === Status.REJECTED) {
    return <div className="status">OOps... smth happened. Try again</div>;
  }

  if (status === Status.RESOLVED) {
    return <JobBoardItem info={data} />;
  }

  return <div></div>;
}
