import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Container } from './styles';
import { RechartMock } from './mock';

import { CustomizedAxisTick } from './components/CustomizedAxisTick';
import { CustomizedLegend } from './components/CustomizedLegend';

export const RechartExample = () => {
  const [hidenLines, setHidenLines] = useState({
    Other: false,
    Refferences: false,
    Direct: false,
    Social: false,
    Organic: false,
  });
  const togleLine = (lineName) => {
    console.log(lineName);
    setHidenLines({ ...hidenLines, [lineName]: !hidenLines[lineName] });
  };
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={RechartMock}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 45,
          }}
        >
          <CartesianGrid />
          <XAxis tickLine={false} tick={<CustomizedAxisTick />} interval={10} dataKey="name" />
          <YAxis tickLine={false} tickCount={7} />
          <Tooltip cursor={false} />
          <Legend
            content={<CustomizedLegend togleLine={togleLine} />}
            margin={{ bottom: 1000 }}
            verticalAlign="top"
            align="right"
            layout="vertical"
          />
          <Line
            hide={hidenLines.Other}
            type="linear"
            strokeWidth={2}
            dataKey="Other"
            stroke="#FF9F43"
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            hide={hidenLines.Refferences}
            dataKey="Refferences"
            dot={false}
            strokeWidth={2}
            stroke="#7367F0"
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            hide={hidenLines.Direct}
            strokeWidth={2}
            dataKey="Direct"
            dot={false}
            stroke="#00CFE8"
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            strokeWidth={2}
            dataKey="Social"
            hide={hidenLines.Social}
            dot={false}
            stroke="#28C76F"
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            strokeWidth={2}
            dataKey="Organic"
            hide={hidenLines.Organic}
            dot={false}
            stroke="#FF4757"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
