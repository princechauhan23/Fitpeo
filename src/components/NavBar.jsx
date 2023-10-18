import { useState } from 'react';
import settingIcon from '../assets/images/setting.png';
import keyIcon from '../assets/images/key.png';
import cubeIcon from '../assets/images/3d.png';
import AccountIcon from '../assets/images/account.png';
import WalletIcon from '../assets/images/wallet.png';
import discountIcon from '../assets/images/discount.png';
import ChatIcon from '../assets/images/chat.png';
import profilelogo from '../assets/images/profilelogo.svg';

const NavBar = () => {
  const [selectedNav, setSelectedNav] = useState('Dashboard');
  const points = [
    {
      name: 'Dashboard',
      icon: keyIcon,
    },
    {
      name: 'Product',
      icon: cubeIcon,
    },
    {
      name: 'Customers',
      icon: AccountIcon,
    },
    {
      name: 'Income',
      icon: WalletIcon,
    },
    {
      name: 'Promote',
      icon: discountIcon,
    },
    {
      name: 'Help',
      icon: ChatIcon,
    },
  ]
  return (
    <div className='w-[60px] sm:w-60 h-screen bg-[#040440]'>
      <div className='w-full h-16 pl-0 flex justify-center sm:justify-start sm:pl-5 items-center gap-2 text-[#fff]'>
        <span className='w-11'>
          <img className='' src={settingIcon} />
        </span>
        <h1 className='hidden sm:block text-xl font-semibold'>Dashboard</h1>
      </div>
      <div className='w-full h-[calc(100%-64px)] flex flex-col justify-between'>
        <div className='flex flex-col mt-5'>
          {points.map((point, index) => (
            <div
              key={index}
              className={`w-[85%] h-12 pl-0 flex justify-center sm:justify-start sm:pl-3 items-center gap-3 text-[#fff] opacity-75 rounded-lg m-auto cursor-pointer ${(selectedNav === point.name) ? 'opacity-100 bg-[#1a1a69]' : ''}`}
              onClick={() => setSelectedNav(point.name)}
            >
              <span className='w-7'>
                <img src={point.icon} />
              </span>
              <h3 className='hidden sm:block'>{point.name}</h3>
            </div>
          ))}
        </div>
        <div className='w-[85%] h-12 pl-0 flex justify-center sm:justify-start sm:pl-3 items-center gap-2 text-[#fff] rounded-lg m-auto opacity-100 bg-[#1a1a69] my-10'>
          <span className='w-10 flex justify-center items-center'>
            <img src={profilelogo} />
          </span>
          <div className='hidden sm:block'>
            <h4 className='text-sm font-medium'>Prince</h4>
            <p className='text-xs font-light'>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
