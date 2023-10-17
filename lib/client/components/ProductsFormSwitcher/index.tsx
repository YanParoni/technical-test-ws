'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useProductStore } from 'lib/client/storage';
import ProductList from '../ProductList';

function ProductsFormSwitcher() {
  const { categories, setActiveCategorie } = useProductStore();
  const [open, setOpen] = useState<boolean>(false);



  return (
    <div className="flex flex-col gap-6 mx-20 my-8">
      <div className="flex flex-row gap-4">
        <h2 className="font-title text-2xl">Categories</h2>
        <div className="relative">
          <span className="rounded-md shadow-sm">
            <button
              className="flex flex-row justify-center w-28 items-center gap-2  px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <span>Options</span>
              {!open && <ChevronDownIcon className="w-4" />}
              {open && <ChevronUpIcon className="w-4" />}
            </button>
          </span>
          {open && (
            <div className="absolute top-10 z-30">
              <div className=" flex w-28   flex-col bg-white justify-center items-center border border-gray-300 rounded-md">
                {categories.map((category:any, i:number) => (
                  <div
                    key={i}
                    className="flex justify-center  py-2 text-sm cursor-pointer w-full hover:bg-gray-300"
                    onClick={()=>setActiveCategorie(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ProductList/>
    </div>
  );
}

export default ProductsFormSwitcher;
