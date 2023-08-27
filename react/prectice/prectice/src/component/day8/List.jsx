import { useState } from "react";
import ListLayout from "./ListLayout";

const List = () => {
  const [ListElem, setListElem] = useState([
    { id: 1, name: "Shankar", city: "XYZ", country: "ABC" },
    { id: 2, name: "Shivam", city: "XYZ", country: "ABC" },
    { id: 3, name: "Mitesh", city: "XYZ", country: "ABC" },
    { id: 4, name: "Gourav", city: "XYZ", country: "ABC" },
    { id: 5, name: "Abhishek", city: "XYZ", country: "ABC" },
  ]);
  const DataRender = (id) => {
    setListElem((prevState) => {
      return prevState.filter((data) => data.id !== id);
    });
  };
  return (
    <>
      {ListElem.map((data) => {
        return <ListLayout Data={data} key={data.id} onDelete={DataRender} />;
      })}
    </>
  );
};
export default List;
