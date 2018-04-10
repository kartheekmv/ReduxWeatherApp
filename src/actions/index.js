import axios from "axios";
const API_KEY ='1982a29738cb466a9a7281dd282d12bb';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url) ; 
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}