import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ToggleSwitch from './ToggleSwitch';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

const BarChart = () => {
  const [checked, setChecked] = useState(false);
  const [chartData, setChartData] = useState(null);

  const monthlyData = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
      datasets: [
        {
          label: 'Overview',
          data: [0, 100, 350, 50, 400, 600, 200, 550, 470, 50, 34, 150],
          fill: false,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: 'rgba(244 63 69)',
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  const QuaterlyData = {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Overview',
          data: [350, 500, 400, 100],
          fill: false,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: 'rgba(244 63 69)',
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  useEffect(() => {
    if (checked) {
      setChartData(QuaterlyData);
    } else {
      setChartData(monthlyData);
    }
  }, [checked]);

  return (
    <div className='w-full lg:w-3/4 md:h-[400px] rounded-2xl bg-[#fff] shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] mt-10'>
      <div className='w-full flex justify-between p-7 pb-2'>
        <p className='text-xl font-semibold text-[#4E4E4E]'>Overview</p>
        <div className='flex gap-3'>
          <p className={`hidden sm:block font-semibold ${checked ? 'text-[#6C6C6C]' : 'text-[#D22A27]'}`}>
            Monthly
          </p>
          <ToggleSwitch
            isOn={checked}
            handleToggle={() => setChecked(!checked)}
          />
          <p className={`hidden sm:block font-semibold ${checked ? 'text-[#D22A27]' : 'text-[#6C6C6C]'}`}>
            Quaterly
          </p>
        </div>
      </div>
      <div style={{
        width: '95%', height: '80%', maxWidth: '800px', margin: '0 auto',
      }}
      >
        {chartData && <Bar data={chartData?.data} options={chartData?.options} />}
      </div>
    </div>
  )
}

export default BarChart;
