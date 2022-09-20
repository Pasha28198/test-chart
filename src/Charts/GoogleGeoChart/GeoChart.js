import { Chart } from 'react-google-charts';
import { Container, Flex, Wrapper } from './styles';
import { Legend } from './components/Legend';

import { GoogleAreaChartMock } from '../mock';
import { Header } from '../ChartHeader';

export const options = {
  colorAxis: { colors: ['#80C497', '#00892F'] },
  datalessRegionColor: '#E6EBF3',
  enableRegionInteractivity: false,
  legend: false,
};

export const GeoChart = () => {
  return (
    <Wrapper>
      <Header
        title="Acquisition by Geography"
        text="Where in the world are my visitors and when are they acquired?"
      />
      <Flex>
        <Container>
          <Chart chartType="GeoChart" width="100%" data={GoogleAreaChartMock} options={options} />
        </Container>
        <Legend data={GoogleAreaChartMock} />
      </Flex>
    </Wrapper>
  );
};
