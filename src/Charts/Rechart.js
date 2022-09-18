import React, { PureComponent } from 'react';
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

export const RechartExample = () => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={RechartMock}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis interval={10} dataKey="name" />
          <YAxis tickCount={7} max={6000} />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            strokeWidth={2}
            dataKey="Other"
            stroke="#FF9F43"
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="Refferences"
            dot={false}
            strokeWidth={2}
            stroke="#7367F0"
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
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
            dot={false}
            stroke="#28C76F"
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            strokeWidth={2}
            dataKey="Organic"
            dot={false}
            stroke="#FF4757"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
