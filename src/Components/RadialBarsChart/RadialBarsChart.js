import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
    Legend,
} from "recharts";
import "./radialbarschart.css";
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { getScore } from "../../service";

/**
 *@name RadialBarsChart
 * @description Chart shaped like an arc and with a principal percentage in the center
 * @returns {JSX.Element}
 */

function RadialBarsChart() {
    const { id } = useParams();
    const [percentage, setPercentage] = useState(0);


    getScore(id).then(data => {
        setPercentage(data * 100)
    })


    const Content = () => (<div className="radialbarschart--title">
        <span>{percentage}%</span>
        <p className="radialbarschart--subtitle">de votre<br />objectif</p>
    </div>);

    return (
        <ResponsiveContainer>
            <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="80%"
                outerRadius="80%"
                barSize={10}
                data={[
                    { fill: "none" },
                ]}
                startAngle={90}
                endAngle={(360 * percentage) / 100 + 90} >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 2]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    minAngle={300}
                    background={{ fill: "#FF0101" }}
                    Clockwise={false}
                    dataKey={percentage}
                    cornerRadius={10}
                    circle
                    cx="50%"
                    cy="50%"
                    r="80px"
                />
                <text
                    x={30}
                    y={33}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight={600}
                >Score</text>
                <Legend
                    content={<Content />}
                    layout="horizontal"
                    verticalAlign="middle"
                    width={200}
                    wrapperStyle={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        textAlign: "center",
                        lineHeight: "20px",
                    }}
                />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
export default RadialBarsChart;