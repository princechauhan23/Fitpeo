import { useState } from 'react';
import SearchIcon from "../assets/images/roundSearch.svg";

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='hidden w-[30%] sm:flex justify-start items-center border-[1px] overflow-hidden rounded-lg bg-[#fff]'>
      <img src={SearchIcon} alt='search icon' className='w-5 h-5 mx-[2px] sm:mx-2' />
      <input
        className="text-[#969696] h-9 w-11/12 font-['Poppins'] text-[14px] font-normal outline-none mr-1 bg-[#fff]"
        type='text'
        value={searchText}
        placeholder='Search'
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;
