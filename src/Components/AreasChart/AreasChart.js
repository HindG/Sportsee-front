import {
    AreaChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Area,
    Tooltip,
    Line,
} from "recharts";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

/**
 *@name AreasChart
 * @description Chart shaped like a line with colored area
 * @returns {JSX.Element}
 */

function AreasChart() {
    const { id } = useParams();
    const [sessionsLength, setSessionsLength] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}/average-sessions`)
            .then(response => {
                setSessionsLength(response.data.data.sessions)
            })
    }, [id]);

    const data = sessionsLength && sessionsLength?.map((session) => {
        if (session.day === 1) { session.weekDay = "L" }
        if (session.day === 2) { session.weekDay = "M" }
        if (session.day === 3) { session.weekDay = "M" }
        if (session.day === 4) { session.weekDay = "J" }
        if (session.day === 5) { session.weekDay = "V" }
        if (session.day === 6) { session.weekDay = "S" }
        if (session.day === 7) { session.weekDay = "D" }
        return session
    })
    

    return (
        <ResponsiveContainer>
            <AreaChart
                width={258}
                height={263}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
                outerRadius={90}>
                <XAxis
                    dataKey="weekDay"
                    stroke="#fff"
                    tickLine={false}
                    axisLine={false} />
                <YAxis
                    hide={true}
                    domain={["dataMin-10", "dataMax+10"]} />
                <Line
                    dot={false}
                    dataKey="sessionLength"
                    fill="url(#sessionLengthColor)"
                    legendType="none"
                    stroke="url(#sessionLengthColor)"
                    strokeWidth={1.8}
                    type="monotone" />
                <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip payload={data.sessionsLength} />} />
                <Area type="monotone"
                    dataKey="sessionLength"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="#FF0D0D"
                    activeDot={{ stroke: "#FF3333", strokeWidth: 6, r: 6 }} />
                <Tooltip />
            </AreaChart>
        </ResponsiveContainer>
    );
}

/**
 *@name CustomTooltip
 *@description Custom tooltip with one main indicator
 * @param {array} payload contains the time indicator
 * @param {boolean} active whether the tooltip is visible or not
 * @returns {JSX.Element}
 */


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <>
                    {payload.map((element, i) => (
                        <div key={i} style={{
                            backgroundColor: '#FFFFFF', width: 40, padding: 0,
                            height: 25, fontFamily: 'Roboto', fontSize: 9,
                            textAlign: 'center',
                            color: '#000000',
                        }}>
                            <div style={{ paddingTop: 7 }}>
                                {element.value} min</div>
                        </div>
                    ))}
                </>
            </div>
        );
    }

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array
    }

    return null;
};

export default AreasChart;