import Logo from "../../img/logo.png"
import "./header.css"

/**
 *@name Header
 * @description header of the website
 * @returns {JSX.Element}
 */

function Header() {
    return (
        <div className="header--container">
            <img src={Logo} alt="Logo"className="header--logo" />
            <div>Accueil</div>
            <div>Profil</div>
            <div>Réglage</div>
            <div>Communauté</div>
        </div>
    )
}

export default Header;