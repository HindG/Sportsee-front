import "./sidebar.css"
import IconYoga from "../../img/iconyoga.png"
import IconSwim from "../../img/iconswim.png"
import IconBike from "../../img/iconbike.png"
import IconGym from "../../img/icongym.png"

/**
 *@name SideBar
 * @description sidebar of the website
 * @returns {JSX.Element}
 */

function SideBar() {
    return (
        <div className="sidebar--container">
            <div className="sidebar--icons">
                <img src={IconYoga} alt="Yoga" className="sidebar--icon" />
                <img src={IconSwim} alt="Swim" className="sidebar--icon" />
                <img src={IconBike} alt="Bike" className="sidebar--icon" />
                <img src={IconGym} alt="Gym" className="sidebar--icon" />
            </div>
            <div className="sidebar--copyright">Copiryght, SportSee 2020</div>
        </div>
    )
}

export default SideBar;