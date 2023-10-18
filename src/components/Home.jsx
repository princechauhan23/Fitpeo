import SearchBar from './searchBar';
import Cards from './Cards';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import ProductSell from './ProductSell';

const Home = () => {
  return (
    <div className='w-[calc(100%-80px)] h-screen overflow-y-scroll sm:w-[calc(100%-240px)] bg-[#f5f6f8]'>
      <div className='w-[87%] mt-8 m-auto'>
        <div className='flex justify-between items-center text-xl font-medium'>
          <h1>Hello Prince👋,</h1>
          <SearchBar />
        </div>
        <Cards />
        <div className='flex flex-col mt-7 w-full text-left justify-between gap-6 lg:flex-row'>
          <BarChart />
          <DoughnutChart />
        </div>
        <ProductSell />
      </div>
    </div>
  )
}

export default Home;
