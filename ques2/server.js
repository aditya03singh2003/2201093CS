require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;
const MAX_WINDOW_SIZE = 10;
const TEST_SERVER_URL = "http://20.244.56.144/test";

const AUTH_TOKEN = `Bearer ${process.env.MY_ACCESS_TOKEN}`; 

let slidingWindow = []; 


async function fetchNumbers(type) {
    try {
        console.log(`Fetching numbers of type: ${type}`);
        const response = await axios.get(`${TEST_SERVER_URL}/${type}`, {
            headers: {
                Authorization: AUTH_TOKEN
            },
            timeout: 500 
        });
        return response.data.numbers || [];
    } catch (err) {
        console.error(`Error fetching numbers of type: ${type}`, err.message);
        return []; 
    }
}


function updateSlidingWindow(newNumbers) {
    const allNumbers = Array.from(new Set([...slidingWindow, ...newNumbers])); 
    if (allNumbers.length > MAX_WINDOW_SIZE) {
        allNumbers.splice(0, allNumbers.length - MAX_WINDOW_SIZE); 
    }
    slidingWindow = allNumbers;
    return slidingWindow;
}

app.get('/numbers/:type', async (req, res) => {
    const typeMap = { p: "primes", f: "fibo", e: "even", r: "rand" };
    const typeKey = req.params.type;

    if (!typeMap[typeKey]) {
        return res.status(400).json({ error: "Invalid type. Use 'p', 'f', 'e', or 'r'." });
    }

    const type = typeMap[typeKey];
    const previousState = [...slidingWindow]; 
    const fetchedNumbers = await fetchNumbers(type); 
    const updatedState = updateSlidingWindow(fetchedNumbers); 


    const average = updatedState.length 
        ? (updatedState.reduce((sum, num) => sum + num, 0) / updatedState.length).toFixed(2) 
        : 0;

    res.json({
        previousWindowState: previousState,
        currentWindowState: updatedState,
        fetchedNumbers,
        average: parseFloat(average)
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
