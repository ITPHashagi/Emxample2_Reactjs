import { useState } from "react";

export default function ChangeColorCar() {
  const [imgUrl, setImgUrl] = useState("./images/black-car.jpg");

  const handleChangeColor = (url) => {
    setImgUrl(url);
  };

  return (
    <div className="container mx-auto">
      <h1>ChangeColorCar</h1>

      <div className="grid grid-cols-2">
        {/* IMAGE */}
        <div>
          <img src={imgUrl} alt="" />
        </div>

        {/* BUTTON */}
        <div>
          <button
            onClick={() => {
              handleChangeColor("./images/black-car.jpg");
            }}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Black
          </button>
          <button
            onClick={() => {
              handleChangeColor("./images/red-car.jpg");
            }}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>
          <button
            onClick={() => {
              handleChangeColor("./images/silver-car.jpg");
            }}
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Silver
          </button>
        </div>
      </div>
    </div>
  );
}
