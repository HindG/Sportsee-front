import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import "./barchart.css";
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getActivityData } from "../../service";

/**
 *@name RadarsChart
 * @description Chart shaped like bars
 * @returns {JSX.Element}
 */

function BarsChart() {
    const { id } = useParams();
    const [activity, setActivity] = useState([]);

    getActivityData(id).then(data => {
        setActivity(data)
    })

    const data = activity && activity?.map((element) => {
        element.weekDay = element.day.slice(-2)
        return element
    })

    return (
        <div className="barchart--container">
            <div className="barchart--title__container">
                <h2 className="barchart--title">Activité quotidienne</h2>
                <div>
                    <div className="barchart--legend__items">
                        <div className="barchart--circle__black"></div>
                        <p className="barchart--legend__text barchart--title">Poids (kg)</p>
                    </div>
                    <div className="barchart--legend__items">
                        <div className="barchart--circle__black barchart--circle__red"></div>
                        <p className="barchart--legend__text barchart--title">Calories brûlées (kCal)</p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width='100%' height={200}>
                <BarChart
                    width={835}
                    height={320}
                    data={data}
                    barGap="5%"
                    barCategoryGap="35%">
                    <CartesianGrid strokeDasharray="1 3" vertical={false} />
                    <XAxis dataKey="weekDay" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
                    <YAxis orientation="right" yAxisId="right" axisLine={false} tickLine={false} dataKey="kilogram" type="number" tick={{ fontSize: 14 }} domain={['dataMin-1', 'dataMax+1']} />
                    <YAxis orientation="left" axisLine={false} tick={false} yAxisId="left" dataKey="calories" type="number" domain={[100, 500]} />
                    <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip payload={data} />} />
                    <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" unit="kg" barSize={7} name="Poids (kg)" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="left" fill="#E60000" unit="Kcal" name="Calories brûlées (kCal)" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart >
            </ResponsiveContainer>
        </div>
    );
}

/**
 *@name CustomTooltip
 *@description Custom tooltip with two main indicators
 * @param {array} payload contains the two indicators : kg and kCal
 * @param {boolean} active whether the tooltip is visible or not
 * @returns {JSX.Element}
 */

const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div className="customtooltip__container">
                <p className="customtooltip__label">{`${payload[0].value}`}kg</p>
                <p className="customtooltip__label">{`${payload[1].value}`}KCal</p>
            </div>
        );
    }

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array
    }
    return null;
};

export default BarsChart;