const API_URL = 'http://localhost:8080/api/data'; // Adjust the URL as needed

export const fetchData = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const postData = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};