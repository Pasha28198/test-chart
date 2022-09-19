import { useState } from 'react';
import { RechartAreaMock } from '../mock';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Container } from './styles';
import { CustomizedAxisTick } from '../RechartsLineChart/components/CustomizedAxisTick';
import { CustomizedLegend } from './components/CustomizedLegend';

export const RechartAreaChartExample = () => {
  const [hidenLines, setHidenLines] = useState({
    unitedStates: false,
    brazil: false,
    japan: false,
    unknown: false,
    china: false,
  });
  const togleLine = (lineName) => {
    console.log(lineName);
    setHidenLines({ ...hidenLines, [lineName]: !hidenLines[lineName] });
  };
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={RechartAreaMock}
          margin={{
            bottom: 45,
          }}
          baseValue={6000}
        >
          <Legend
            content={<CustomizedLegend togleLine={togleLine} />}
            margin={{ bottom: 1000 }}
            verticalAlign="top"
            align="right"
            layout="vertical"
          />
          <XAxis tickLine={false} tick={<CustomizedAxisTick />} dataKey="day" />
          <YAxis tickLine={false} tickCount={7} />
          <CartesianGrid vertical={false} />
          <Area
            hide={hidenLines.unitedStates}
            activeDot={false}
            dot={false}
            fillOpacity={1}
            dataKey="unitedStates"
            stroke="#122441"
            fill="#122441"
          />
          <Area
            hide={hidenLines.brazil}
            activeDot={false}
            dot={false}
            fillOpacity={1}
            dataKey="brazil"
            stroke="#00CFE8"
            fill="#00CFE8"
          />
          <Area
            activeDot={false}
            hide={hidenLines.japan}
            dot={false}
            fillOpacity={1}
            dataKey="japan"
            stroke="#7367F0"
            fill="#7367F0"
          />
          <Area
            activeDot={false}
            hide={hidenLines.unknown}
            dot={false}
            fillOpacity={1}
            dataKey="unknown"
            stroke="#FF922A"
            fill="#FF922A"
          />
          <Area
            activeDot={false}
            hide={hidenLines.china}
            dot={false}
            fillOpacity={1}
            dataKey="china"
            stroke="#20C997"
            fill="#20C997"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};