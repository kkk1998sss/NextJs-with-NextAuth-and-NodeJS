"use client";
import { Spinner } from "@nextui-org/react";


export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
 
      <div className="flex items-center justify-center h-screen">
        <Spinner label="Loading..." color="success" labelColor="success" />
      </div>
    
    //   <ul className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
    //   {[...Array(10)].map((index) => (
    //     <li key={index} className='relative animate-pulse'>
    //       <div className='aspect-square h-[300] w-full overflow-hidden rounded-lg bg-gray-300'></div>
    //       <p className='mt-2 h-4 w-1/2 rounded-lg bg-gray-600'></p>
    //       <p className='mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium'></p>
    //       <p className='mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium'></p>
    //     </li>
    //   ))}
    // </ul>
    
  );
}
