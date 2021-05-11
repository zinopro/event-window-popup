import { useState, useEffect } from "react";

export const useEventInfo = (url) => {

    const [events, setEvent] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url, {method: "GET"})
            .then(response => response.json())
            .then(json => {
                setEvent(json)
                setLoading(false);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return {events, isLoading }
}

