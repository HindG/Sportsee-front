import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import "./radarschart.css";
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { getPerformanceData } from "../../service";

/**
 *@name RadarsChart
 * @description Chart shaped like a radar
 * @returns {JSX.Element}
 */

function RadarsChart() {
    const { id } = useParams();
    const [performances, setPerformances] = useState(0);

    getPerformanceData(id).then(data => {
        setPerformances(data)
    })


    const data = performances?.data ? performances.data.map((performance) => ({
        ...performance,
        kind: performances?.kind[performance.kind].charAt(0).toUpperCase() + performances?.kind[performance.kind].slice(1)
    })) : [];


    return (
        <ResponsiveContainer width='100%' height='100%'>
            <RadarChart outerRadius={70} innerRadius={10} data={data} startAngle={390} endAngle={30} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tick={{
                        fontFamily: 'Roboto', fontSize: 12,
                        fill: '#FFFFFF'
                    }}
                    axisLine={false}
                    width={30}
                    tickLine={false} />
                <PolarRadiusAxis axisLine={false} tick={false} tickCount={6} domain={[0, 200]} />
                <Radar name="performance" dataKey="value" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarsChart;