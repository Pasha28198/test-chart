import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RechartLineChartExample } from './Charts/RechartsLineChart/RechartLineChartExample';
import { RechartAreaChartExample } from './Charts/RecahrtsAreaChart/ReachartAreaChartexample';

import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <RechartLineChartExample />
        <RechartAreaChartExample />
      </ChakraProvider>
    </div>
  );
}

export default App;
