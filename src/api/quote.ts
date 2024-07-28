import axios from "axios"

const API_URL = 'https://dummyjson.com'

export const getQuotes = async () => {
    const res = await axios.get(`${API_URL}/quotes`)
    return res.data;
}

export const getQuote = async (id: number) => {
    const res = await axios.get(`${API_URL}/quotes/${id}`)
    return res.data;
}

export const getRandomQuote = async () => {
    const res = await axios.get(`${API_URL}/quotes/random`)
    return res.data;
}