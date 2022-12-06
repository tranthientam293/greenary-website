import { RightArrow } from "../Icons/Icons";

const Pagination = () => {
  const activeClass = "bg-green-01 text-white";

  return (
    <div className="flex justify-center items-center gap-5 mt-10">
      <button
        className={`pagination ${activeClass || "text-black-01 bg-gray-02"}`}
      >
        1
      </button>
      <button className="pagination text-black-01 bg-gray-02">2</button>
      <button className="pagination text-black-01 bg-gray-02">3</button>

      <button className={`pagination ${activeClass}`}>
        <RightArrow />
      </button>
    </div>
  );
};

export default Pagination;
