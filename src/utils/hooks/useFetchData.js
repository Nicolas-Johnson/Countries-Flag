import { useEffect, useState } from "react";

const allUrl = 'https://restcountries.com/v3.1/all';
const byRegionUrl = `https://restcountries.com/v3.1/region/`;
const countrieByNameUrl = `https://restcountries.com/v3.1/name/`

export const useFectchData = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [ erro, setErro] = useState();

    useEffect(()=> {
        const controler = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(allUrl, {signal: controler.signal});
                const data = await response.json();
                setData(data);
                setErro(undefined);
            } catch (err) {
                setErro(err);
            } finally {
                setLoading(false); 
            }       
        };
        fetchData();

        return () => controler.abort();
    }, []);

    return {data, loading, erro};
};

export const useFectchDataByRegion = (region) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState();

    useEffect(() => {
        const controler = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const url = `${byRegionUrl}${region}`;
                const response = await fetch(url, {signal: controler.signal});
                const data = await response.json();
                setData(data);
                setErro(undefined);
            } catch (err) {
                setErro(err);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();

        return () => controler.abort();
    }, [region]);

    return {data, loading, erro};
}

export const useFectchDataByName = (name) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState();

    useEffect(() => {
        const controler = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const url = `${countrieByNameUrl}${name}`;
                const response = await fetch(url, {signal: controler.signal});
                const data = await response.json();
                setData(data);
                setErro(undefined);
            } catch (err) {
                setErro(err);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();

        return () => controler.abort();
    }, [name]);

    return {data, loading, erro};
}