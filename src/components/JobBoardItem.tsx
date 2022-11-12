import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Bookmark from "./Bookmark";

const DataView = ({ info }: any) => {
  let data: any = [];
  if (info) {
    info.forEach((element: any) => {
      const num = new Date(element.updatedAt).getTime();
      const num2 = new Date().getTime();
      const num3 = Math.ceil((num2 - num) / (1000 * 3600 * 24));

      const elemHTML = (
        <div
          className="card flex flex-col-reverse lg:flex-row gap-8 mb-2 py-6 px-4"
          key={element.id}
        >
          <div className="basis-3/4">
            <img
              className="card-img float-left mr-8 rounded-full aspect-square"
              src={element.pictures[0]}
              alt=""
            />

            <Link to={`/${element.id}`} className="card-title">
              {element.title}
            </Link>
            <div className="card-info flex flex-row gap-2">
              <span>{element.name}</span>
              <span>&#183;</span>
              <span>{element.address}</span>
            </div>
          </div>
          <div className="card-details flex flex-col justify-between items-end basis-1/4">
            <Bookmark />
            <span>Updated {num3} days ago</span>
          </div>
        </div>
      );
      data.push(elemHTML);
      return data;
    });
  }
  return <div>{data}</div>;
};

export default DataView;
