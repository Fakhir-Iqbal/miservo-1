import axios from 'axios';

const BASE_URL = "https://miservo-api.vercel.app/api"; // base URL here

export const GET = async (endpoint, token, setData, setLoading, setError) => {
    setLoading(true);

    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            setData(response.data.data);
        }
    } catch (error) {
        setError("No data found or error occurred");
    } finally {
        setLoading(false);
    }
};
