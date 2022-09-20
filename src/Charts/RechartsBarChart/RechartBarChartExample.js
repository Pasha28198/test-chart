import { useState } from 'react';
import { Container } from './styles';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, ResponsiveContainer } from 'recharts';
import { RechartBarMock } from '../mock';
import { CustomizedAxisTick } from '../../Charts/RechartsLineChart/components/CustomizedAxisTick';
import { CustomizedLegend } from './Components/CustomizedLegend';
import { Header } from '../components/ChartHeader';

export const RechartBarChartExample = () => {
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
      <Header
        title="Acquisition by Geography"
        text="Where in the world are my visitors and when are they acquired?"
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{
            bottom: 150,
          }}
          data={RechartBarMock}
        >
          <CartesianGrid vertical={false} />
          <XAxis tickLine={false} tick={<CustomizedAxisTick />} dataKey="day" />
          <YAxis tick={{ transform: 'translate(-10)' }} tickLine={false} tickCount={6} />
          <Legend
            content={<CustomizedLegend togleLine={togleLine} />}
            margin={{ bottom: 1000 }}
            verticalAlign="top"
            align="right"
            layout="vertical"
          />
          <Bar hide={hidenLines.unitedStates} dataKey="unitedStates" stackId="a" fill="#122441" />
          <Bar hide={hidenLines.brazil} dataKey="brazil" stackId="a" fill="#00CFE8" />
          <Bar hide={hidenLines.japan} dataKey="japan" stackId="a" fill="#7367F0" />
          <Bar hide={hidenLines.unknown} dataKey="unknown" fill="#FF922A" stackId="a" />
          <Bar hide={hidenLines.china} dataKey="china" fill="#20C997" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
