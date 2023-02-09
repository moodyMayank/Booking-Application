import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] space-y-5">
      <h1>Oops !</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="font-semibold m-5 p-5 bg-[#7115CD] text-white">
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
