import React, { useState } from "react";
import cloneDeep from "lodash.cloneDeep";

const numbers = [];
for (let i = 1; i < 10; i++) {
  numbers.push({
    id: i,
    value: `${i}`,
  });
}

export default function AppList() {
  const [numbersList1, setNumbersList1] = useState({ numbers, sortBy: "ASC" });
  const [numbersList2, setNumbersList2] = useState({ numbers, sortBy: "ASC" });

  function getSortedList({ numbers, sortBy }) {
    const numbersList = cloneDeep(numbers);
    if (sortBy === "ASC") {
      // Sort in Descending Order
      numbersList.sort((a, b) => b.id - a.id);
      return { numbers: numbersList, sortBy: "DSC" };
    } else {
      // Sort in Ascending Order
      numbersList.sort((a, b) => a.id - b.id);
      return { numbers: numbersList, sortBy: "ASC" };
    }
  }
  function getfilteredList({ numbers, sortBy }, id) {
    const numbersList = numbers.filter((item) => item.id !== id);
    return { numbers: numbersList, sortBy };
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          setNumbersList1((state) => getSortedList(state));
        }}
      >
        Sort List 1
      </button>
      <button
        onClick={() => {
          setNumbersList2((state) => getSortedList(state));
        }}
      >
        Sort List 2
      </button>
      <h3>Using Key as index</h3>
      <ul>
        {numbersList1.numbers.map((item, index) => {
          return (
            <li key={index + 1} data-index={index + 1}>
              {item.value}
              <button
                onClick={() => {
                  setNumbersList1((state) => getfilteredList(state, item.id));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <h3>Using Key as id</h3>
      <ul>
        {numbersList2.numbers.map((item) => {
          return (
            <li key={item.id} data-id={item.id}>
              {item.value}
              <button
                onClick={() => {
                  setNumbersList2((state) => getfilteredList(state, item.id));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
