import { Chart } from 'react-google-charts';
import { Container, Wrapper } from './styles';
import { Legend } from './components/Legend';

export const data = [
  ['Country', 'Popularity'],
  ['United States', 3200],
  ['Brazil', 2508],
  ['United Kingdom', 508],
  ['France', 402],
  ['Germany', 301],
  ['Greece', 2508],
  ['Togo', 508],
  ['Ivory Coast', 402],
  ['China', 301],
  ['India', 3200],
];

export const options = {
  colorAxis: { colors: ['#80C497', '#00892F'] },
  datalessRegionColor: '#E6EBF3',
  enableRegionInteractivity: false,
  legend: false,
};

export const GeoChart = () => {
  return (
    <Wrapper>
      <Container>
        <Chart
          chartEvents={[
            {
              eventName: 'select',
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log('Selected : ' + region);
              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          data={data}
          options={options}
        />
      </Container>
      <Legend data={data}/> 
    </Wrapper>
  );
};
