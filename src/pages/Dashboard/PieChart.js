import React from 'react'
import { Pie } from 'react-chartjs-2';

const options = {
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Status Karyawan',
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                    return ` Jumlah: ${tooltipItem.formattedValue}%`;
                }
            }
        }
    }
};

export const data = {
    labels: ['Kontrak', 'Tetap'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: [
          '#A0153E',
          '#00224D',
        ],
        borderColor: [
          '#FFFFFF',
          '#FFFFFF',
        ],
        borderWidth: 1,
      },
    ],
  };

const PieChart = () => {
    return <Pie data={data} options={options} />;
}

export default PieChart