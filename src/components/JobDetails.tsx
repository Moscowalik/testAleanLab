import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import dataAPI from "../services/getApi";
import Benefits from "./Benefits";
import Pictures from "./Pictures";
import GetJobDetailsHeader from "./JobDetailsHeader";
import Button from "./Button";
import Map from "./Map";

export default function GetData(): JSX.Element {
  type T = {
    name: string;
    address: string;
    title: string;
    email: string;
    description: string;
    benefits: String[];
    pictures: String[];
    employment_type: String[];
    salary: string;
    updatedAt: string;
    location: {
      lat: number;
      long: number;
    };
  };

  const cardInfo = {
    name: "",
    address: "",
    title: "",
    email: "",
    description: "",
    benefits: [],
    pictures: [],
    employment_type: [],
    salary: "",
    updatedAt: "",
    location: {
      lat: 0,
      long: 0,
    },
  };

  const [dataID, setDataID] = useState<T>(cardInfo);
  const [error, setError] = useState(null);
  const { cardId } = useParams();

  useEffect(() => {
    dataAPI
      .fetchData()
      .then((data) => {
        data.forEach((element: any) => {
          if (element.id === cardId) {
            setDataID(element);
          }
        });
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (dataID !== null) {
    const {
      name,
      address,
      title,
      email,
      description,
      benefits,
      pictures,
      employment_type,
      salary,
      updatedAt,
      location,
    } = dataID;

    const num = new Date(updatedAt).getTime();
    const num2 = new Date().getTime();

    const num3 = num2 - num;
    const num4 = Math.ceil(num3 / (1000 * 3600 * 24));
    return (
      <div>
        <div className="flex gap-x-20 flex-col lg:flex-row">
          <div className="lg:w-4/6">
            <div>
              <GetJobDetailsHeader />
            </div>
            <div className="mt-10">
              <Button />
              <div className=" flex mt-8 gap-14 justify-between flex-col lg:flex-row">
                <h1 className="jobDetails-title">{title}</h1>
                <div>
                  <span className="jobDetails-salary">{salary}</span>
                  <span className="jobDetails-salary">Brutto, per year</span>
                </div>
              </div>
              <span className="jobDetails-updated">update {num4} days ago</span>
              <p className="jobDetails-description">{description}</p>
              <h2 className="jobDetails-secondTitle">Benefits</h2>
              <Benefits benefits={benefits} />
              <h2 className="jobDetails-secondTitle">Attached images</h2>
              <Pictures pictures={pictures} />
            </div>
          </div>
          <div>
            <Map location={location} />
          </div>
        </div>
        <Link className="jobDetails-returnBtn" to="/testAleanLab">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z"
              fill="#384564"
            />
          </svg>
          RETURN TO JOB BOARD
        </Link>
      </div>
    );
  }
  return <div></div>;
}
