import "./css/SortBy.css";

import React from 'react';

function SortBy({setSort, noCommentsOption}) {
    return (
        <div className="sortBy">
            {/* <span>Sort by</span> */}
            <select name="sortby" id="sortby" onChange={(e) => setSort(e.target.value)}>
                <option value="timestamp">Recent</option>
                <option value="likes">Most liked</option>
                <option value="dislikes">Most disliked</option>
                {!noCommentsOption? <option value="commentsLength">Comments</option>: null}
                {/* <option value="mostcomments">Comments</option> */}
            </select>
        </div>
    )
}

export default SortBy
