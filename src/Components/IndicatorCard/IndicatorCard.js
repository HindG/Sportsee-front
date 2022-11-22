import "./indicatorcard.css"
import Calories from "../../img/calories-icon.png"
import Proteines from "../../img/protein-icon.png"
import Glucides from "../../img/carbs-icon.png"
import Lipides from "../../img/fat-icon.png"
import PropTypes from 'prop-types';

/**
 *@name IndicatorCard
 *@description Card of the key indicators
 * @param {string} type type of the indicator : calories, protein, carbohydrate or lipid
 * @param {number} count quantity of the indicator
 * @returns {JSX.Element}
 */

function IndicatorCard(props) {
    const { type, count } = props;
    let img = "";
    let typeLabel = "";
    if (type === "calorieCount") {
        img = Calories;
        typeLabel = "Calories";
    };
    if (type === "proteinCount") {
        img = Proteines;
        typeLabel = "Proteines";
    };
    if (type === "carbohydrateCount") {
        img = Glucides;
        typeLabel = "Glucides";
    };
    if (type === "lipidCount") {
        img = Lipides;
        typeLabel = "Lipides";
    };

    return (
        <div className="card--container">
            <img className="card--img" src={img} alt={typeLabel} />
            <div className="card--label__container">
                <p className="card--count">{count}{(type === "calorieCount" ? "kCal" : "g")}</p>
                <p className="card--count card--type">{typeLabel}</p>
            </div>
        </div>
    )
}

IndicatorCard.propTypes = {
    type: PropTypes.string,
    count: PropTypes.number,
}

export default IndicatorCard;