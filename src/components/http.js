import { useState, useEffect, useRef } from "react";

export const useHttp = (url, dependencies) => {

    const [data, setData] = useState(null);
    const isFirstRun = useRef(true);

    /* http://www.omdbapi.com/?s=${search}&plot=full&apikey=22b41965 */

    useEffect(() => {
        console.log('https.js run')

        if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
        }
        
        fetch(url)
            .then(response => {console.log('fetch run');
                if (!response.ok) {
                    throw new Error('Failed to fetch data.');
                }
                return response.json();
            })
            .then(result => {
                setData(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, dependencies);

    return data;
}