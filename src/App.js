import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RechartLineChartExample } from './Charts/RechartsLineChart/RechartLineChartExample';
import { RechartAreaChartExample } from './Charts/RecahrtsAreaChart/ReachartAreaChartexample';
import { RechartBarChartExample } from './Charts/RechartsBarChart/RechartBarChartExample';
import { RechartLineDashedChartExample } from './Charts/RechartDashedLineChart/RechartDashedLineChartExample';
import { GeoChart } from './Charts/GoogleGeoChart/GeoChart';
import { theme } from './theme';

import { Devider } from './Charts/components/Devider';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Devider />
        <RechartLineChartExample />
        <Devider />
        <GeoChart />
        <Devider />
        <RechartAreaChartExample />
        <Devider />
        <RechartBarChartExample />
        <Devider />
        <RechartLineDashedChartExample />
        <Devider />
      </ChakraProvider>
    </div>
  );
}

export default App;
