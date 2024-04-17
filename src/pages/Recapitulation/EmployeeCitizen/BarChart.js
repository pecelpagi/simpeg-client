import React, { useContext, useMemo } from 'react'
import { Bar } from 'react-chartjs-2';
import { reformatAsChartData, options } from './bar-chart.utils';
import PageContext from './PageContext';

const BarChart = () => {
  const { data } = useContext(PageContext);
  const chartData = useMemo(() => reformatAsChartData(data), [data]);

  return (
    <Bar options={options} data={chartData} />
  )
}

export default BarChart