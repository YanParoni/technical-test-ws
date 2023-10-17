import React from 'react';
import Image from 'next/image';
import { useCurrencyFormatter } from 'lib/client/hooks';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Product } from 'lib/client/storage';

interface IHeroProd {
  prod: Product;
}
export default function Hero({ prod }: any) {
  const { description, image, name, value } = prod;
  const formattedValue = useCurrencyFormatter(value);
  return (
    <div className="flex flex-col md:flex-row gap-12 justify-center py-12  items-center ">
      <div className="h-[15rem] w-72 lg:w-[25rem] lg:h-[20rem] relative my-auto cursor-pointer transition hover:ease-in-out hover:scale-105">
        <Image
          src={image}
          layout="fill"
          alt="Picture of the author"
          className="rounded-2xl"
        />
        <div className="absolute shadow-2xl rounded-2xl top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 opacity-20 hover:opacity-0 transition-opacity duration-300 ease-in-out z-20"></div>
      </div>
      <div className="flex flex-col gap-4 justify-center  md:items-start items-center  h-full">
        <span className="font-body text-xl sm:text-2xl text-center md:text-left tracking-widest cursor-default">
          {formattedValue}
        </span>
        <span className="font-body w-96 text-sm sm:text-xl text-center md:text-left tracking-widest cursor-default">
          {name}
        </span>
        <span className="font-body w-96 text-sm sm:text-lg text-center md:text-left tracking-widest cursor-default">
          {description}
        </span>
        <div className="relative cursor-pointer justify-center flex flex-row  md:w-28  w-32 md:justify-center gap-2 rounded-lg py-4 text-2xl text-white bg-[#212427]">
          <ShoppingCartIcon className="w-4" />
          <button className="cursor-pointer">Buy</button>
        </div>
      </div>
    </div>
  );
}
