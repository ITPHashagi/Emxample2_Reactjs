export default function HandlingEvent() {
  const handleClick = () => {
    console.log(123);
  };

  const handleClickParam = (username, age) => {
    console.log(`Hello ${username}, ${age} tuổi`);
  };
  return (
    <div>
      <h1>HandlingEvent</h1>
      <button
        onClick={handleClick}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>

      <button
        onClick={() => {
          handleClickParam("Trần Hoàng Đức", 18);
        }}
        type="button"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Yellow
      </button>
    </div>
  );
}
