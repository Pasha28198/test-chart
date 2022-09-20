import { PureComponent } from 'react';
export class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          fontWeight={400}
          fontSize={'14px'}
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#0C1D37"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}
