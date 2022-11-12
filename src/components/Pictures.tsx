import shortid from "shortid";

export default function GetPictures({ pictures }: any) {
  let data: any = [];

  if (pictures.length !== 0) {
    pictures.forEach((element: any) => {
      const date = new Date().getTime();
      const elemHTML = (
        <li key={shortid.generate()} className="jobDetails-img">
          <img src={element} alt="pics" />
        </li>
      );
      data.push(elemHTML);
      return data;
    });
  }

  return <ul className="flex gap-x-2.5 mt-2.5">{data}</ul>;
}
