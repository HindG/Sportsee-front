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
            <div className="dashboard--graph__container">
                <BarsChart />
            </div>
        </Fragment>
    )
}

export default Dashboard;