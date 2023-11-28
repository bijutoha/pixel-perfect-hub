import { useEffect, useState } from "react";


const useSamples = () => {
    const [samples, setSamples] = useState([]);

    useEffect(()=>{
        fetch('samples.json')
        .then(res => res.json())
        .then(data => setSamples(data))
    }, [])
    return [samples]
};

export default useSamples;