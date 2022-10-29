import { Fragment } from "react";
import BarsChart from "../../Components/BarsChart/BarsChart";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import "./dashboard.css"

function Dashboard() {
    return (
        <Fragment>
            <Header />
            <SideBar />
            <h1 className="dashboard--title">Bonjour <span className="dashboard--title__name">Thomas</span></h1>
            <h2 className="dashboard--subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <div className="dashboard--graph__container">
                <BarsChart />
            </div>
        </Fragment>
    )
}

export default Dashboard;