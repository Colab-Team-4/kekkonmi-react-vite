import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="mb-20 mt-40 flex items-center p-[18px] lg:m-0 lg:flex lg:h-full lg:items-center lg:justify-center lg:p-0">
      <div className="flex w-full flex-col items-center lg:w-[631px]">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-playFair text-6xl font-semibold text-[#616161]">
            404
          </h1>
          <h1 className="font-playFair text-[34px] font-medium">
            Page Not Found
          </h1>
          <p className="w-11/12 text-center font-lato text-lg text-[#9E9E9E]">
            Oops, it seems like the wedding bells are taking a break -
            we&apos;re on it!
          </p>
        </div>
        <Link
          to="/"
          className="btnSolid mt-8 flex h-[52px] w-full items-center justify-center lg:w-[300px]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error404;
