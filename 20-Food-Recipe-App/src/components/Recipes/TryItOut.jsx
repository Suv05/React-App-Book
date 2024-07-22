import { CiSearch } from "react-icons/ci";

function TryItOut({}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex mt-2 mb-3">
          <input
            type="text"
            placeholder="Search recipes"
            className="w-96 rounded-2xl focus:outline-none focus:ring-0 bg-[#f5f5f5] py-1 px-2 me-2"
          />
          <span className="rounded-full bg-neutral-100 py-2 px-2">
            <button>
              <CiSearch size={20} />
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default TryItOut;
