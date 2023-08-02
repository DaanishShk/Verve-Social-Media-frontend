import { FaSadCry } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { Navigate } from "react-router-dom";

function ErrorFallback({ error,resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={() => window.location.href = '/'}>Go back</button>
    </div>
  );
}

export default ErrorFallback;