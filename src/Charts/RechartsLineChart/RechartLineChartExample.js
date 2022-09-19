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
import { Switch, FormLabel, FormControl } from '@chakra-ui/react';
import { CustomizedAxisTick } from './components/CustomizedAxisTick';
import { CustomizedLegend } from './components/CustomizedLegend';
import { CustomizedTooltip } from './components/CustomizedTooltip/CustomizedTooltip';

export const RechartLineChartExample = () => {
  const [hidenLines, setHidenLines] = useState({
    Other: false,
    Refferences: false,
    Direct: false,
    Social: false,
    Organic: false,
  });
  const [showDashedLines, setShowDashedLines] = useState(false);

  const togleLine = (lineName) => {
    console.log(lineName);
    setHidenLines({ ...hidenLines, [lineName]: !hidenLines[lineName] });
  };
  return (
    <Container>
      <FormControl
        justifyContent="center"
        height="40px"
        width={'100%'}
        display="flex"
        alignItems="center"
        position="absolute"
        left={'0'}
        top={'250px'}
      >
        <FormLabel htmlFor="email-alerts" mb="0">
          Show dashed lines
        </FormLabel>
        <Switch
          onChange={() => setShowDashedLines(!showDashedLines)}
          isChecked={showDashedLines}
          id="email-alerts"
        />
      </FormControl>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={RechartLineMock}
          margin={{
            bottom: 45,
          }}
        >
          <CartesianGrid />
          <XAxis tickLine={false} tick={<CustomizedAxisTick />} interval={10} dataKey="name" />
          <YAxis tickLine={false} tickCount={7} />
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
            strokeDasharray={showDashedLines && '3 3'}
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
            strokeDasharray={showDashedLines && '3 3'}
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
