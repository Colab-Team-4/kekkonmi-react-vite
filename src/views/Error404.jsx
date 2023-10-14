import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex h-[700px] items-center p-[18px] lg:m-0 lg:flex lg:h-full lg:items-center lg:justify-center lg:p-0">
      <div className="flex w-full flex-col items-center lg:w-[631px]">
        <div className="flex gap-4 flex-col items-center">
          <h1 className="font-playFair text-6xl font-semibold text-[#616161]">
            404
          </h1>
          <h1 className="font-playFair text-[34px] font-medium">
            Page Not Found
          </h1>
          <p className="text-center font-lato text-lg text-[#9E9E9E] w-11/12">
            Oops, it seems like the wedding bells are taking a break -
            we&apos;re on it!
          </p>
        </div>
        <Link
          to="/"
          className="btnSolid flex h-[52px] mt-8 w-full items-center justify-center lg:w-[300px]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error404;
