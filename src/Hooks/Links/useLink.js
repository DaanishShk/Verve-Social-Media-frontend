import React, { useEffect, useState } from 'react'

function useLink(site, initialValue, links, setLinks) {

    const [link, setLink] = useState(initialValue)
    
    useEffect(() => {
        let obj = {...links}
        if(link) {
            obj[site] = link
            setLinks(obj)
        }
        else {
            delete obj[site]
            setLinks(obj)
        }
    }, [link])
    
    return [link, setLink]
}

export default useLink
