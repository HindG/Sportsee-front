import axios from 'axios';

export const getDashboardData = (id) => axios.get(`http://localhost:3000/user/${id}`)
    .then(response => response.data.data)
    .catch(error => console.log("error: ", error))

export const getSessionsData = (id) => axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    .then(response => response.data.data.sessions)
    .catch(error => console.log("error: ", error))

export const getActivityData = (id) => axios.get(`http://localhost:3000/user/${id}/activity`)
    .then(response => response.data.data.sessions)
    .catch(error => console.log("error: ", error))

export const getPerformanceData = (id) => axios.get(`http://localhost:3000/user/${id}/performance`)
    .then(response => response.data.data)
    .catch(error => console.log("error: ", error))

export const getScore = (id) => axios.get(`http://localhost:3000/user/${id}`)
    .then(response => response.data.data.score)
    .catch(error => console.log("error: ", error))