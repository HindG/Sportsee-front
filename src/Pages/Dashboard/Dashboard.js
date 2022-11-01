import { Fragment } from "react";
import BarsChart from "../../Components/BarsChart/BarsChart";
import Header from "../../Components/Header/Header";
import IndicatorCard from "../../Components/IndicatorCard/IndicatorCard";
import SideBar from "../../Components/SideBar/SideBar";
import "./dashboard.css"
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const { id } = useParams();
    const [firstName, setfirstName] = useState("");
    const [calorieCount, setCalorieCount] = useState(0);
    const [proteinCount, setProteinCount] = useState(0);
    const [carbohydrateCount, setCarbohydrateCount] = useState(0);
    const [lipidCount, setLipidCount] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`)
            .then(response => {
                setfirstName(response.data.data.userInfos.firstName)
                setCalorieCount(response.data.data.keyData.calorieCount)
                setProteinCount(response.data.data.keyData.proteinCount)
                setCarbohydrateCount(response.data.data.keyData.carbohydrateCount)
                setLipidCount(response.data.data.keyData.lipidCount)
            })
    });

    return (
        <Fragment>
            <Header />
            <SideBar />
            <h1 className="dashboard--title">Bonjour <span className="dashboard--title__name">{firstName}</span></h1>
            <h2 className="dashboard--subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <div className="dashboard--dashboard__container">
                <BarsChart />
                <div className="dashboard--indicators__container">
                    <IndicatorCard type="calorieCount" count={calorieCount} />
                    <IndicatorCard type="proteinCount" count={proteinCount} />
                    <IndicatorCard type="carbohydrateCount" count={carbohydrateCount} />
                    <IndicatorCard type="lipidCount" count={lipidCount} />
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;