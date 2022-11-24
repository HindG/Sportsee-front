import axios from 'axios';

/**
 *@name getDashboardData
 * @description Gets user infos for dashboard
 * @returns promise
 */
export const getDashboardData = (id) => axios.get(`http://localhost:3000/user/${id}`)
    .then(response => response.data.data)
    .catch(error => console.log("error: ", error))

/**
*@name getSessionsData
* @description Gets session infos for AreaChart
* @returns promise
*/
export const getSessionsData = (id) => axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    .then(response => response.data.data.sessions)
    .catch(error => console.log("error: ", error))

/**
*@name getActivityData
* @description Gets activity infos for BarChart
* @returns promise
*/
export const getActivityData = (id) => axios.get(`http://localhost:3000/user/${id}/activity`)
    .then(response => response.data.data.sessions)
    .catch(error => console.log("error: ", error))

/**
*@name getPerformanceData
* @description Gets user infos for RadarChart
* @returns promise
*/
export const getPerformanceData = (id) => axios.get(`http://localhost:3000/user/${id}/performance`)
    .then(response => response.data.data)
    .catch(error => console.log("error: ", error))

/**
*@name getScore
* @description Gets user infos for RadialChart
* @returns promise
*/
export const getScore = (id) => axios.get(`http://localhost:3000/user/${id}`)
    .then(response => response.data.data.score)
    .catch(error => console.log("error: ", error))