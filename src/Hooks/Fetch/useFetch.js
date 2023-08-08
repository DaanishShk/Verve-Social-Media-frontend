import { AuthContext } from "../Auth/AuthContext";
import { useContext } from "react";

function useFetch() {
  const { baseUrl, user, setIsAuth } = useContext(AuthContext);   // since the function is called within the children of authContext, no need to pass explicitly

  async function callEndpoint(endpoint, method, body, contentType) {
    // console.log(
    //   `Fetching from endpoing ${endpoint} with method ${method} and body `,
    //   body
    // );

    let header = { Authorization: `Bearer ${user.token}` };
    if (contentType) header["Content-Type"] = contentType;

    let obj = {
      method: method || "GET",
      headers: header,
      mode: "cors", // without this cannot send anything other than plain text,
      // JSON deserialization error was being caused because of lack of stringify here
    };

    if (body) obj.body = body;

    let status;

    try {
      let res = await fetch(baseUrl + endpoint, obj); // TODO add better error handling

      // if(!res.ok) {
      //     setUser(false);
      //     return;
      // }

      status = res.status;
      // may have to revisit this for optimization
      res = await res.json();

      if (status === 401 && res.message === "JWT token expired") {
        localStorage.clear();
        sessionStorage.clear();
        setIsAuth(false);
        return { status };
      }

      return { res, status };
    } catch (error) {
      console.log(error);
      return { status }; // similar changes made above
    }
  }

  return callEndpoint;
}

export default useFetch;
