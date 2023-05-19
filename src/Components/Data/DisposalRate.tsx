import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import styled from 'styled-components';

const data = [
    { name: '폐사 안락사', value: 39.7 },
    { name: '보호자 인도', value: 31.4 },
    { name: '입양 분양', value: 28.9 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={data[index].name === '폐사 안락사' ? "white" : "#3C4048"}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function DisposalRate() {
  return (
    <GraphDiv>
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === '폐사 안락사' ? '#FF6969':'#B2B2B2'} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="center" verticalAlign="bottom" />
        </PieChart>
    </GraphDiv>
  );
}

const GraphDiv = styled.div`
    display: flex;
    justify-content: center;
`
