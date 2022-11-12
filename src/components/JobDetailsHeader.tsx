import "../index.css";

export default function GetJobDetailsHeader() {
  return (
    <div className="flex justify-between border-b-[2px] border-[#D8D8D8] pb-2">
      <h1 className="jobDetailsHeader-title">Job Details</h1>
      <div className="flex">
        <button className="flex jobDetails-btn stroke-[#70778B] hover:text-[#55699E] hover:stroke-[#55699E]">
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z"
              strokeWidth="2"
            />
          </svg>
          Save to my list
        </button>
        <button className="flex jobDetails-btn fill-[#70778B] ml-6 hover:text-[#55699E] hover:fill-[#55699E]">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_545_1463)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_545_1463">
                <rect
                  width="18"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}
