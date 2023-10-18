import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const DoughnutChart = () => {
  const doughnutData = {
    labels: ['new customers', 'registered', 'left'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: [
          '#0BE88B',
          '#a611ff',
          '#DD3636',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: true,
        position: 'top', // Change the legend position as needed
      },
    },
    elements: {
      arc: {
        borderWidth: 1, // Adjust the border width for thickness
        borderRadius: 20, // Adjust the border radius for rounding corners
      },
    },
  };


  return (
    <div className='w-full h-[400px] mt-10 lg:w-1/3 bg-[#fff] rounded-2xl flex flex-col shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)]'>
      <div><h1 className='text-lg font-semibold pl-4 pt-3'>Customers</h1></div>
      <div className='w-4/5 m-auto md:w-full h-[380px] p-5 pt-0'>
        <Doughnut data={doughnutData} options={options} />
      </div>
    </div>
  )
}

export default DoughnutChart