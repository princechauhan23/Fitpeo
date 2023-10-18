import SearchBar from './SearchBar';
import Product1 from '../assets/images/product1.jpg';
import Product2 from '../assets/images/product2.jpg';
import Product3 from '../assets/images/product3.jpg';
import Product4 from '../assets/images/product4.jpg';

const ProductSell = () => {
  return (
    <div className='w-full bg-[#fff] rounded-lg my-10'>
      <div className='flex justify-between p-4'>
        <h1 className='text-lg font-semibold'>Product Sell</h1>
        <div className='flex justify-evenly items-center'>
          <SearchBar />
          <p className='text-sm'>Last 30 days</p>
        </div>
      </div>
      <div className='w-full overflow-x-auto'>
        <table className='w-[598px] md:w-full'>
          <thead className='text-left'>
            <tr className='text-sm'>
              <th className='w-[60%] pl-3'>Product Name</th>
              <th className='w-[5%]'>Stock</th>
              <th className='w-[5%]'>Price</th>
              <th className='w-[10%]'>Total sales</th>
            </tr>
          </thead>
          <tbody>
            <tr className='h-16'>
              <td className='flex gap-4 p-3'>
                <img src={Product1} className='w-20 h-10 bg-cover rounded-md overflow-hidden' />
                <div>
                  <h1 className='text-base font-medium'>Abstract 3D</h1>
                  <p className='text-xs'>Lorem ipsum is a placeholder text commonly used to</p>
                </div>
              </td>
              <td className='text-xs'>32 in stock</td>
              <td className='text-xs'>$ 45.99</td>
              <td className='text-xs text-center'>25</td>
            </tr>
            <tr className='h-16'>
              <td className='flex gap-4 p-3'>
                <img src={Product2} className='w-20 h-10 bg-cover rounded-md overflow-hidden' />
                <div>
                  <h1 className='text-base font-medium'>Sarphens Illustration</h1>
                  <p className='text-xs'>Lorem ipsum is a placeholder text commonly used to</p>
                </div>
              </td>
              <td className='text-xs'>19 in stock</td>
              <td className='text-xs'>$ 45.99</td>
              <td className='text-xs text-center'>15</td>
            </tr>
            <tr className='h-16'>
              <td className='flex gap-4 p-3'>
                <img src={Product3} className='w-20 h-10 bg-cover rounded-md overflow-hidden' />
                <div>
                  <h1 className='text-base font-medium'>Abstract 3D</h1>
                  <p className='text-xs'>Lorem ipsum is a placeholder text commonly used to</p>
                </div>
              </td>
              <td className='text-xs'>28 in stock</td>
              <td className='text-xs'>$ 50.99</td>
              <td className='text-xs text-center'>12</td>
            </tr>
            <tr className='h-16'>
              <td className='flex gap-4 p-3'>
                <img src={Product4} className='w-20 h-10 bg-cover rounded-md overflow-hidden' />
                <div>
                  <h1 className='text-base font-medium'>Sarphens Illustration</h1>
                  <p className='text-xs'>Lorem ipsum is a placeholder text commonly used to</p>
                </div>
              </td>
              <td className='text-xs'>14 in stock</td>
              <td className='text-xs'>$ 37.99</td>
              <td className='text-xs text-center'>60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductSell;
