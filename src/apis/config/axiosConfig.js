import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("AccessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

//일단 api를 export 내보내기 와 const 즉 js로치면 final로 상수를 준다 api에 axios클래스 안의 
// create함수에 객체를 전달하여 받은 리턴값을 api에 저장 해당 api의 