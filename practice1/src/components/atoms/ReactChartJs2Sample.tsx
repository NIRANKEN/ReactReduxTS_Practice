import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['2015年度', '2016年度', '2017年度', '2018年度', '2019年度', '2020年度'],
  datasets: [

    {
      type: 'bar',
      label: '総社員数',
      backgroundColor: '#7fdaec',
      data: [4857, 7289, 8108, 7899, 11140, 13559],
      borderColor: 'white',
      borderWidth: 2,
      yAxisID: 'first-y-axis',
      order: 2, // order低いほうが上にくる
    },
    {
      type: 'bar',
      label: '管理職者人数',
      backgroundColor: '#ecbde3',
      data: [680, 1108, 1200, 1098, 967, 800],
      yAxisID: 'first-y-axis',
      order: 3,
    },
    {
      type: 'line',
      label: '管理者比率',
      borderColor: '#6a5c9a',
      borderWidth: 1,
      fill: false,
      data: [13, 15.2, 14.8, 13.9, 8.68, 5.9],
      yAxisID: 'second-y-axis',
      order: 1, 
      lineTension: 0, // 直線引く
    },
  ],
}

const options = {
    scales: {
        yAxes: [
            {
                id: 'first-y-axis',
                type: 'linear',
                position: 'left',
                gridLines: {
                },
                ticks: {
                  callback: (value: number) => {
                    return value + '人';
                  }
                }
            },
            {
                id: 'second-y-axis',
                type: 'linear',
                position: 'right',
                gridLines: {
                },
                ticks: {
                  callback: (value: number) => {
                    return value + '%';
                  }
                }
            },
        ]
    },
}

const ReactChartJs2Sample = () => {

    return (
        <Bar type='bar' data={data} options={options}/>
    )
}

export default ReactChartJs2Sample