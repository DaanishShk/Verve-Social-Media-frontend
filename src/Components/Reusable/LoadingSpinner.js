import "./css/LoadingSpinner.css"

import {CgSpinner} from "react-icons/cg"
import React from 'react'

function LoadingSpinner() {
    return (
        <div className="loadingSpinner">
            <CgSpinner />
        </div>
    )
}

export default LoadingSpinner
