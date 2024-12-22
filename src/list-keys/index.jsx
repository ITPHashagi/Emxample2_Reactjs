import { useState } from "react";
import data from "./data.json";

export default function ListKey() {
  // eslint-disable-next-line no-unused-vars
  const [fruits, setFruits] = useState(data);

  const handleChangeColor = (name) => {
    console.log(name);
  };
  return (
    <div>
      <ul>
        {fruits.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                handleChangeColor(item.name);
              }}
            >
              id: {item.id} - name: {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
