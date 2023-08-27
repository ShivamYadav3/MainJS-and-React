import { useState } from "react";

const ListRender = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "shivam",
      city: "jabalpur",
    },
    {
      id: 2,
      name: "shankar",
      city: "jabalpur",
    },
    {
      id: 3,
      name: "satyam",
      city: "np",
    },
    {
      id: 4,
      name: "amit",
      city: "bv",
    },
  ]);
  return (
    <>
      <div>
        {product.map((item) => {
          return (
            <div key={item.id}>
              {item.name} | {item.city}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ListRender;
