import React, { useContext } from 'react'
import { ProductContext } from "../componens/utils/Context"
export default function Navbar() {

  const [products] = useContext(ProductContext);

  const distrinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  console.log(distrinct_category);


  return (
    <nav className='bg-zinc-100 w-[15%] h-full flex flex-col items-center pt-5'>

      <a className='px-2 py-2 text-blue-500 border-2 border-blue-400 rounded' href="/create">Add New product</a>

      <hr className='w-[80%] my-3' />
      <h1 className='text-1xl mb-3 w-[80%] font-bold'>Category Filter</h1>

      <ul className='w-[80%]'>

        <li className='flex items-center mb-3'>
          <span className='rounded-full mr-2 w-[10px] h-[10px] bg-orange-400'></span>
          Cat-1
        </li>

        <li className='flex items-center mb-3'>
          <span className='rounded-full mr-2 w-[10px] h-[10px] bg-red-400'></span>
          Cat-2
        </li>

        <li className='flex items-center mb-3'>
          <span className='rounded-full mr-2 w-[10px] h-[10px] bg-green-400'></span>
          Cat-3
        </li>

        <li className='flex items-center mb-3'>
          <span className='rounded-full mr-2 w-[10px] h-[10px] bg-lime-400'></span>
          Cat-4
        </li>

        <li className='flex items-center mb-3'>
          <span className='rounded-full mr-2 w-[10px] h-[10px] bg-yellow-400'></span>
          Cat-5
        </li>

      </ul>
    </nav>
  )
};