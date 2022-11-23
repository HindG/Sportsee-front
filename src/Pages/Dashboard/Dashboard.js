import { Fragment } from "react";
import BarsChart from "../../Components/BarsChart/BarsChart";
import Header from "../../Components/Header/Header";
import IndicatorCard from "../../Components/IndicatorCard/IndicatorCard";
import SideBar from "../../Components/SideBar/SideBar";
import "./dashboard.css"
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import RadialBarsChart from "../../Components/RadialBarsChart/RadialBarsChart";
import AreasChart from "../../Components/AreasChart/AreasChart";
import RadarsChart from "../../Components/RadarsChart/RadarsChart";
import { getDashboardData } from "../../service";

/**
 *@name Dashboard
 * @description User page with their charts and key indicators
 * @returns {JSX.Element}
 */

function Dashboard() {
    const { id } = useParams();
    const [firstName, setfirstName] = useState("");
    const [calorieCount, setCalorieCount] = useState(0);
    const [proteinCount, setProteinCount] = useState(0);
    const [carbohydrateCount, setCarbohydrateCount] = useState(0);
    const [lipidCount, setLipidCount] = useState(0);


    getDashboardData(id).then(data => {
        setfirstName(data.userInfos.firstName)
        setCalorieCount(data.keyData.calorieCount)
        setProteinCount(data.keyData.proteinCount)
        setCarbohydrateCount(data.keyData.carbohydrateCount)
        setLipidCount(data.keyData.lipidCount)
    })

    return (
        <Fragment>
            <Header />
            <SideBar />
            <h1 className="dashboard--title">Bonjour <span className="dashboard--title__name">{firstName}</span></h1>
            <h2 className="dashboard--subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <div className="dashboard--dashboard__container">
                <div className="dashboard--barchart__container">
                    <BarsChart />
                    <div className="barchart--smallcharts__containers">
                        <div className="dashboard--aerachart__container">
                            <p className="dashboard--aerachart__title">Durée moyenne des sessions</p>
                            <AreasChart />
                        </div>
                        <div className="dashboard--radarchart__container">
                            <RadarsChart />
                        </div>
                        <div className="dashboard--radialchart__container">
                            <div className="dashboard--radialchart__round"></div>
                            <RadialBarsChart />
                        </div>
                    </div>
                </div>
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