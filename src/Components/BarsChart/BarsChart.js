import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import "./barchart.css"

function BarsChart() {
    const data = [
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 80,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 81,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 81,
            calories: 290
        },
        {
            day: '2020-07-05',
            kilogram: 80,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 78,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 76,
            calories: 390
        }
    ]

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
            <ResponsiveContainer width='100%' height={320}>
                <BarChart
                    width={835}
                    height={320}
                    data={data}
                    barGap="5%"
                    barCategoryGap="35%">
                    <CartesianGrid strokeDasharray="1 3" vertical={false} />
                    <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
                    <YAxis orientation="right" yAxisId="right" axisLine={false} tickLine={false} dataKey="kilogram" type="number" tick={{ fontSize: 14 }} domain={['dataMin-1', 'dataMax+1']} />
                    <YAxis orientation="left" axisLine={false} tick={false} yAxisId="left" dataKey="calories" type="number" domain={[100, 500]} />
                    <Tooltip />
                    <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" unit="kg" barSize={7} name="Poids (kg)" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="left" fill="#E60000" unit="Kcal" name="Calories brûlées (kCal)" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart >
            </ResponsiveContainer>
        </div>
    );
}

export default BarsChart;