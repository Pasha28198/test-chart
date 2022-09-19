import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RechartExample } from './Charts/Rechart';

import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <RechartExample />
      </ChakraProvider>
    </div>
  );
}

export default App;
