import axios from "axios";

const api = axios.create({
    baseURL: "http://51.20.235.196:8000/api",
});

async function getDataFromAPI() {
    try {
        const response = await api.get("/latest-data-point/?data_points=temperature");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getDataFromAPI();


fetch("http://51.20.235.196:8000/api/latest-data-point/?data_points=temperature")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));