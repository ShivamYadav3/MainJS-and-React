import { useState } from "react";

const DynamicListRender = () => {
  const [profile, setprofile] = useState([
    {
      id: 1,
      name: "shivam",
      city: "Jabalpur",
    },
    {
      id: 2,
      name: "okk",
      city: "okk",
    },
  ]);
  const AddDynamic = () => {
    setprofile((okkk) => {
      return [
        ...okkk,
        { id: new Date().getTime(), name: "dynamic", city: "ehfueh" },
      ];
    });
  };
  return (
    <>
      {profile.map((data) => {
        return (
          <div key={data.id}>
            {data.name} | {data.city}
          </div>
        );
      })}
      <button onClick={AddDynamic}>Add Name</button>
    </>
  );
};
export default DynamicListRender;
