import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RechartLineChartExample } from './Charts/RechartsLineChart/RechartLineChartExample';
import { RechartAreaChartExample } from './Charts/RecahrtsAreaChart/ReachartAreaChartexample';
import { RechartBarChartExample } from './Charts/RechartsBarChart/RechartBarChartExample';
import { RechartLineDashedChartExample } from './Charts/RechartDashedLineChart/RechartDashedLineChartExample';

import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <RechartLineChartExample />
        <RechartAreaChartExample />
        <RechartBarChartExample />
        <RechartLineDashedChartExample />
      </ChakraProvider>
    </div>
  );
}

export default App;
