import DollarIcon from "../assets/images/earning.svg";
import OrdersIcon from "../assets/images/orders.svg";
import WalletIcon from "../assets/images/balance.svg";
import SaleIcon from "../assets/images/total sales.svg";
import UpArrowIcon from "../assets/images/top.png";
import DownArrowIcon from "../assets/images/arrow-down.png";

const Cards = () => {
  return (
    <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 mt-9'>
      <div className='w-full bg-[#fff] p-1 flex items-center gap-3 sm:gap-10 md:gap-4 lg:gap-10 rounded-xl sm:p-3 md:p-6 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.2)]'>
        <div className='rounded-full w-28 h-28 flex justify-center items-center bg-[#bbf0d2db]'>
          <img src={DollarIcon} />
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-[#a2a2a2] font-medium'>Earning</p>
          <h1 className='text-2xl'>$198K</h1>
          <p className='text-xs font-medium'>
            <img className='inline w-3' src={UpArrowIcon} />
            <span className='text-[#00a949]'>32.7% </span>
            this month
          </p>
          <p></p>
        </div>
      </div>
      <div className='w-full bg-[#fff] p-1 flex items-center gap-3 sm:gap-10 md:gap-4 lg:gap-10 rounded-xl sm:p-3 md:p-6 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.2)]'>
        <div className='rounded-full w-28 h-28 flex justify-center items-center bg-[#e9ccfae3]'>
          <img src={OrdersIcon} />
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-[#a2a2a2] font-medium'>Orders</p>
          <h1 className='text-2xl'>$2.4K</h1>
          <p className='text-xs font-medium'>
            <img className='inline w-3' src={DownArrowIcon} />
            <span className='text-red-500'>2.7% </span>
            this month
          </p>
          <p></p>
        </div>
      </div>
      <div className='w-full bg-[#fff] p-1 flex items-center gap-3 sm:gap-10 md:gap-4 lg:gap-10 rounded-xl sm:p-3 md:p-6 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.2)]'>
        <div className='rounded-full w-28 h-28 flex justify-center items-center bg-[#bad8feeb]'>
          <img src={WalletIcon} />
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-[#a2a2a2] font-medium'>Balance</p>
          <h1 className='text-2xl'>$65K</h1>
          <p className='text-xs font-medium'>
            <img className='inline w-3' src={DownArrowIcon} />
            <span className='text-red-500'>32.7% </span>
            this month
          </p>
          <p></p>
        </div>
      </div>
      <div className='w-full bg-[#fff] p-1 flex items-center gap-3 sm:gap-10 md:gap-4 lg:gap-10 rounded-xl sm:p-3 md:p-6 shadow-[0_0px_10px_-4px_rgba(0,0,0,0.2)]'>
        <div className='rounded-full w-28 h-28 flex justify-center items-center bg-[#ffc8cae6]'>
          <img src={SaleIcon} />
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-[#a2a2a2] font-medium'>Total Sales</p>
          <h1 className='text-2xl'>$98K</h1>
          <p className='text-xs font-medium'>
            <img className='inline w-3' src={UpArrowIcon} />
            <span className='text-[#00a949]'>25.2% </span>
            this month
          </p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
