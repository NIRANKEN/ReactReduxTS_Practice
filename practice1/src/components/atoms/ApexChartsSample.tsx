import ReactApexChart from "react-apexcharts";

const state = {
            series: [
              {
                name: '総社員数',
                type: 'column',
                data: [4857, 7289, 8108, 7899, 11140, 13559]
              }, 
              {
                name: '管理職者人数',
                type: 'column',
                data: [680, 1108, 1200, 1098, 967, 800]
              },
              {
                name: '管理職者比率',
                type: 'line',
                data: [14, 15.2, 14.8, 13.9, 8.68, 5.9]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              colors: ['#7fdaec', '#ecbde3', '#7a5c9a'],
              stroke: {
                width: [0, 4]
              },
              title: {
                text: '【タイトル】'
              },
              dataLabels: {
                enabled: true,
                enabledOnSeries: [0,1,2]
              },
              labels: ['2015年度', '2016年度', '2017年度', '2018年度', '2019年度', '2020年度'],
              xaxis: {
                type: 'category'
              },
              yaxis: [
                {
                  seriesName: '総社員数',
                  title: {
                    text: '人数',
                  },
                  min: 0,
                  max: 15000,
                }, 
                {
                  seriesName: '管理職者人数',
                  show: false,
                  min: 0,
                  max: 15000,
                },
                {
                  seriesName: '管理職者比率',
                  opposite: true,
                  title: {
                    text: '比率'
                  },
                }
              ]
            },
        }

const ApexChartsSample = () => {
    return (<ReactApexChart
              options={state.options}
              series={state.series}
              type="line"
              height={350}
            />);
}

export default ApexChartsSample;