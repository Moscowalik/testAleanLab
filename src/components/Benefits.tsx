export default function GetBenefits({ benefits }: any) {
  let data: any = [];
  if (benefits.length !== 0) {
    benefits.forEach((element: any) => {
      const elemHTML = (
        <li key={element} className="jobDetails-benefits">
          {element}
        </li>
      );
      data.push(elemHTML);
      return data;
    });
  }

  return <ul className="flex gap-x-2.5 mt-2.5">{data}</ul>;
}
