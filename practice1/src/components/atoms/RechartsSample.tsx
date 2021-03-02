import React from 'react'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '2015年度',
    '管理職者比率': 14,
    '管理職者人数': 680,
    '総社員数': 4857,
    cnt: 380,
  },
  {
    name: '2016年度',
    '管理職者比率': 15.2,
    '管理職者人数': 1108,
    '総社員数': 7289,
    cnt: 460,
  },
  {
    name: '2017年度',
    '管理職者比率': 14.8,
    '管理職者人数': 1200,
    '総社員数': 8108,
    cnt: 480,
  },
  {
    name: '2018年度',
    '管理職者比率': 13.9,
    '管理職者人数': 1098,
    '総社員数': 7899,
    cnt: 350,
  },
  {
    name: '2019年度',
    '管理職者比率': 8.68,
    '管理職者人数': 967,
    '総社員数': 11140,
    cnt: 590,
  },
  {
    name: '2020年度',
    '管理職者比率': 5.9,
    '管理職者人数': 800,
    '総社員数': 13559,
    cnt: 490,
  },
];

interface OwnProps {
}

type Props = OwnProps;

export const RechartsSample : React.FC<Props> = (props) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis yAxisId="left" orientation="left" unit="人" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="総社員数" barSize={20} fill="#7fdaec" />
          <Bar yAxisId="left" dataKey="管理職者人数" barSize={20} fill="#ecbde3" />
          <Line yAxisId="right" type="monotone" dataKey="管理職者比率" stroke="#7a5c9a" />
        </ComposedChart>
      </ResponsiveContainer>
    );
}
