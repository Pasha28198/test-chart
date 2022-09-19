import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RechartLineChartExample } from './Charts/RechartsLineChart/RechartLineChartExample';

import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <RechartLineChartExample />
      </ChakraProvider>
    </div>
  );
}

export default App;
