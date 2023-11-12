import { ImSad } from "react-icons/im";
import "./css/ErrorFallback.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="errorFallback">
      <div className="errorFallback__wrapper">
        <ImSad style={{ fontSize: "4em" }} />
        <h1>Something went wrong</h1>
        {/* <pre>{error.message}</pre> */}
        <p>Click the button below to return to your feed</p>
        <button onClick={() => (window.location.href = "/")}>Go back</button>
      </div>
    </div>
  );
}

export default ErrorFallback;
