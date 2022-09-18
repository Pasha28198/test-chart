import './App.css';

import { NivoChart } from './Charts/NivoChart';
import { ChakraProvider } from '@chakra-ui/react';
import { RechartExample } from './Charts/Rechart';

import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <NivoChart />
        <RechartExample />
      </ChakraProvider>
    </div>
  );
}

export default App;
