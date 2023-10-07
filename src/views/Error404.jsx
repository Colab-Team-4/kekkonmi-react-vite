import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex h-[700px] snap-center items-center p-[18px] lg:m-0 lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:p-0">
      <div className="flex w-full flex-col items-center lg:w-[631px]">
        <div className="flex h-[219px] flex-col items-center">
          <h1 className="mb-5 font-playFair text-6xl font-semibold">404</h1>
          <h1 className="font-playFair text-[34px] font-medium">
            Page Not Found
          </h1>
          <p className="text-center font-lato text-lg">
            Oops, it seems like the wedding bells are taking a break - we're on
            it!
          </p>
        </div>
        <button className="btnSolid h-[52px] w-full lg:w-[300px]">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Error404;
