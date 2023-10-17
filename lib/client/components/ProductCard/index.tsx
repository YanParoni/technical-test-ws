import React from 'react';
import Image from 'next/image';
import { Product } from 'lib/client/storage';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCurrencyFormatter } from 'lib/client/hooks';

interface IProductCard {
prod:Product
}
export default function ProductCard({ prod}: IProductCard) {
  const {description, image,name,value} = prod
  const formattedValue = useCurrencyFormatter(value);

  return (
    <div className=" flex flex-row gap-6 md:gap-12 justify-center items-center rounded-xl ">
      <div className="h-[12rem] w-[12rem]  md:h-[13rem] md:w-[13rem] relative my-auto cursor-pointer shadow-xl   ">
        <Image
          src={image}
          layout="fill"
          alt="Picture of the author"
          className="rounded-xl "
        />
      </div>
      <div className="flex flex-col gap-[4px] md:gap-2">
      <span className="font-body text-xl md:text-2xl tracking-widest cursor-default">
        {formattedValue}
        </span>
        <span className="font-body w-40 text-base md:text-lg tracking-widest cursor-default">
          {name}
        </span>
        <span className="font-body w-40 text-sm tracking-widest cursor-default">
          {description}
        </span>
        <button className="flex space-x-2 bg-black text-white justify-center p-2 rounded-md items-center w-32">
          <ShoppingCartIcon className="w-4 " />
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
}
