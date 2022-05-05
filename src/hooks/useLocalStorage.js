import React, {useEffect, useState} from "react";

export const useLocalStorage = (key, defaultValue) => {
    let data = localStorage.getItem(key);
    data = !!data ? JSON.parse(data) : defaultValue;

    const [localStorageData, setLocalStorageData] = useState(data);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localStorageData));
    }, [localStorageData])


    return [localStorageData, setLocalStorageData];
}