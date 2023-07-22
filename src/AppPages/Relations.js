import "./css/Relations.css";

import FriendsAndFollowing from "../Components/Relations/FriendsAndFollowing";
import PendingRequests from "../Components/Relations/PendingRequests";
import React from 'react'

function Relations() {
    return (
        <div className="relations">
            <h1>Relations</h1>
            <PendingRequests />
            <FriendsAndFollowing />
        </div>
    )
}

export default Relations
