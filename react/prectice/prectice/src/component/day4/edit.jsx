import { useState } from "react";
import styled from "styled-components";

const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const EditInput = styled.input`
  width: 100%;
  outline: none;
`;

const EditListRender = () => {
  const [editing, setEditing] = useState({});
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      brand: "Apple",
    },
    {
      id: 2,
      title: "iPhone 13 Pro Max",
      brand: "Apple",
    },
    {
      id: 3,
      title: "iPhone 12 Pro Max",
      brand: "Apple",
    },
  ]);

  console.log("Editing Elem: ", editing);

  const onEditProduct = (e) => {
    const { value } = e.target;
    setEditing((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  };

  const onSaveProduct = () => {
    setProducts((prevState) => {
      return prevState.map((item) => {
        if (item.id === editing.id) {
          return editing;
        }
        return item;
      });
    });
    setEditing({});
  };

  return (
    <>
      <p>My Products</p>
      <ul>
        {products.map((item) => {
          return (
            <li>
              <ProductDiv>
                {editing.id === item.id ? (
                  <>
                    <EditInput
                      placeholder="Edit details"
                      value={editing.title}
                      onChange={onEditProduct}
                    />
                    <button onClick={onSaveProduct}>Save</button>
                  </>
                ) : (
                  <>
                    <p>
                      {item.brand} | {item.title}
                    </p>
                    <button onClick={() => setEditing(item)}>Edit</button>
                  </>
                )}
              </ProductDiv>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EditListRender;
