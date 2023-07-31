import "./css/PostEdit.css";

import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import React from "react";
import { useContext } from "react";
import { FiPenTool } from "react-icons/fi";
import useFetch from "../../Hooks/Fetch/useFetch";

function PostEdit({ username, postId }) {
  const { user } = useContext(AuthContext);
  const callEndpoint = useFetch();

  async function handleDelete(requestState) {
      const { res, status } = await callEndpoint(
      `/posts/${postId}`,
      "DELETE",
      null,
      "application/json"
      );
      console.log(res);
      if (status === 202) {
        //   do something here
      }
  }

  return (
    <>
      {user.account.username === username ? (
        <div className="postEdit">
          <div className="pinned__title" style={{ color: "#1f6cb0" }}>
            <FiPenTool className="pinned__title--icon" />
            <h3>Actions</h3>
          </div>
          <div className="pinned__posts">
            <div className="friendRequest__buttons postEdit__buttons">
              <button
                className="friendRequest__buttons--accept"
                onClick={() => null}
              >
                EDIT
              </button>
              <button
                className="friendRequest__buttons--reject"
                onClick={handleDelete}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PostEdit;
