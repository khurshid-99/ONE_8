import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-gray-light grid place-content-center items-center ">
      <h1 className="text-48 text-dark uppercase font-RM7 text-center ">
        404 This Page not found
      </h1>
      <p className="text-18 text-dark-gray font-RM5 text-center py-10p">
        This isn't the destination you were looking for.
      </p>
      <div className="grid place-content-center ">
        <button
          onClick={() => navigate(-1)}
          className="bg-dark text-gray-light text-24 font-RM5 w-fit px-20p py-10p rounded-8 text-center border-3 border-white active:scale-105 "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
