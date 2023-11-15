import "./css/PostEdit.css";

import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import React, { useState } from "react";
import { useContext } from "react";
import { FiPenTool } from "react-icons/fi";
import useFetch from "../../Hooks/Fetch/useFetch";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/ModalDelete";

function PostEdit({ username, postId }) {
  const { user } = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const callEndpoint = useFetch();
  const navigate = useNavigate();

  async function handleDelete(requestState) {
    const { res, status } = await callEndpoint(
      `/posts/${postId}`,
      "DELETE",
      null,
      "application/json"
    );
    console.log(res);
    if (status !== 202) {
      //   do something here
      throw Error("Encountered a problem!");
    }
    navigate(`/${username}`);
    setShowDeleteModal(false);
  }

  return (
    <>
      {user.account.username === username ||
      user.account.role === "ROLE_ADMIN" ? (
        <div className="postEdit">
          <div className="pinned__title" style={{ color: "#1f6cb0" }}>
            <FiPenTool className="pinned__title--icon" />
            <h3>Actions</h3>
          </div>
          <div className="pinned__posts">
            <div className="friendRequest__buttons postEdit__buttons">
              {/* <button
                className="friendRequest__buttons--accept"
                onClick={() => null}
              >
                EDIT
              </button> */}
              <button
                className="friendRequest__buttons--reject"
                onClick={() => setShowDeleteModal(true)}
              >
                DELETE
              </button>
            </div>
          </div>
          {showDeleteModal ? (
            <Modal
              handleDelete={handleDelete}
              handleClose={setShowDeleteModal}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default PostEdit;
