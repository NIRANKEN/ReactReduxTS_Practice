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
  LabelList,
} from 'recharts';
import { RechartsProps } from '../../RechartsProps';

// TODO: これは外からとってくる
const data = [
  {
    name: '2015年度',
    'hoge率': 14,
    'fuga率': 20,
    'hoge数': 680,
    '総数': 4857,
    cnt: 380,
  },
  {
    name: '2016年度',
    'hoge率': 15.2,
    'fuga率': 21.2,
    'hoge数': 1108,
    '総数': 7289,
    cnt: 460,
  },
  {
    name: '2017年度',
    'hoge率': 14.8,
    'fuga率': 10.8,
    'hoge数': 1200,
    '総数': 8108,
    cnt: 480,
  },
  {
    name: '2018年度',
    'hoge率': 13.9,
    'fuga率': 13.3,
    'hoge数': 1098,
    '総数': 7899,
    cnt: 350,
  },
  {
    name: '2019年度',
    'hoge率': 8.68,
    'fuga率': 12.68,
    'hoge数': 1098,
    '総数': 11140,
    cnt: 590,
  },
  {
    name: '2020年度',
    'hoge率': 5.9,
    'fuga率': 18.9,
    'hoge数': 800,
    '総数': 13559,
    cnt: 490,
  },
];

interface OwnProps {
  chartProps: Array<RechartsProps>,
  handleLegendMouseEnter: Function,
  handleLegendMouseLeave: Function,
  handleLegendSelectElement: Function,
}

type Props = OwnProps;

const legendStyle: React.CSSProperties = {
  overflow: 'auto'
}

// TODO: 固定のものと、パラメータ必要なものを仕分けする
export const RechartsSample : React.FC<Props> = (props) => {
    return (
      <ResponsiveContainer width='100%' height='100%' >
        <ComposedChart
          width={500}
          height={350}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' scale='band' />
          <YAxis yAxisId='left' orientation='left' unit='人' />
          <YAxis yAxisId='right' orientation='right' unit='%' />
          <Tooltip />
          <Legend 
            onMouseOver={(e) => props.handleLegendMouseEnter(e.dataKey)} 
            onMouseOut={(e) => props.handleLegendMouseLeave(e.dataKey)} 
            onClick={(e: any) => props.handleLegendSelectElement(e.dataKey)} // TODO: 具体的なTypeを指定したい (他のところも)
            // 詳細ボードの時に指定するパラメータ
            // align='center'
            // verticalAlign='bottom'
            // layout='vertical'
            // width={160}
            // height={320}
            wrapperStyle={legendStyle}
          />
          {props.chartProps.map((cp) => {
            // TODO: この条件分岐もっとわかりやすくなる気がする
            if(cp.type === 'bar') {
              return (
                <Bar key={cp.key} yAxisId={cp.yAxisId} dataKey={cp.key} barSize={20} fill={cp.color} fillOpacity={Number(cp.isHover ? 0.4 : 1)} hide={!cp.display} >
                  <LabelList dataKey={cp.key} position="top" />
                </Bar>
              );
            } else {
              return (
                <Line key={cp.key} yAxisId={cp.yAxisId} dataKey={cp.key} stroke={cp.color} hide={!cp.display} opacity={Number(cp.isHover ? 0.4 : 1)}>
                  <LabelList dataKey={cp.key} position="top" />
                </Line> 
              );
            }
          })}
        </ComposedChart>
      </ResponsiveContainer>
    );
}
