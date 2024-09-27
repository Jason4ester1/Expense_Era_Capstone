import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../services/apiService';

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    const handleAddData = async (newData) => {
        const result = await postData(newData);
        setData([...data, result]);
    };

    return (
        <div>
            <h1>Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={() => handleAddData({ name: 'New Data' })}>Add Data</button>
        </div>
    );
};

export default DataComponent;