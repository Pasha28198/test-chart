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
import { RechartLineMock } from '../mock';
import { CustomizedAxisTick } from './components/CustomizedAxisTick';
import { CustomizedLegend } from './components/CustomizedLegend';
import { CustomizedTooltip } from './components/CustomizedTooltip/CustomizedTooltip';
import { Header } from '../components/ChartHeader';

export const RechartLineDashedChartExample = () => {
  const [hidenLines, setHidenLines] = useState({
    Other: false,
    Refferences: false,
    Direct: false,
    Social: false,
    Organic: false,
  });

  const togleLine = (lineName) => {
    setHidenLines({ ...hidenLines, [lineName]: !hidenLines[lineName] });
  };
  return (
    <Container>
      <Header
        title="Activation by Wallet Connections"
        text="How do wallet connections move over time and how do they compare to the previous period"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={RechartLineMock}
          margin={{
            bottom: 150,
          }}
        >
          <CartesianGrid />
          <XAxis tickLine={false} tick={<CustomizedAxisTick />} interval={10} dataKey="name" />
          <YAxis tick={{ transform: 'translate(-10)' }} tickLine={false} tickCount={7} />
          <Tooltip
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{
              width: '248px',
              height: '326px',
              marginTop: '-360px',
              marginLeft: '-134px',
              outline: 'none',
            }}
            content={<CustomizedTooltip />}
            cursor={false}
          />
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
            strokeDasharray={'3 3'}
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
            strokeDasharray={'3 3'}
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
