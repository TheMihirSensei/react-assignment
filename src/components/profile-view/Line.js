import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'


const chartData = {
    labels: [
        'Boston',
        'Worcester',
        'Springfield',
        'Lowell',
        'Cambridge',
        'New Bedford'
    ],
    datasets: [
        {
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            //backgroundColor:'green',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ]
        }
    ]
}

const LineView = () => {
    return (
        <div>
            <Line
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Largest Cities in Massachusetts',
                        fontSize: 25
                    },
                    legend: {
                        display: false,
                        position: "bottom",
                        labels: {
                            fontColor: '#000'
                        }
                    }
                }}
            />
        </div>
    )
}
// chartData.defaultProps = {
//     displayTitle: true,
//     displayLegend: false,
//     legendPosition: 'bottom'
// }

export default LineView
