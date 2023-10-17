import React from 'react';
import Image from 'next/image';
import { Product } from 'lib/client/storage';
import { useCurrencyFormatter } from 'lib/client/hooks';

type Props = {
  prod: Product;
};

export default function CarouselCard({ prod }: Props) {
  const {  image, name, value } = prod;
  const formattedValue = useCurrencyFormatter(value)
  return (
    <div className=" flex flex-col   gap-4 justify-center items-center  ">
      <div className=" h-[14rem] rounded-3xl   min-w-[14rem] relative my-auto cursor-pointer  ">
        <Image
          src={image}
          layout="fill"
          sizes="100vw"
          priority
          alt="Picture of the author"
          className="min-w-[12rem] rounded-3xl shadow-xl "
        />
      </div>
      <span className="font-body text-xl lg:text-2xl tracking-widest cursor-default">
        {formattedValue}
      </span>
      <span className="font-body text-sm lg:text-xl tracking-widest cursor-default">
        {name}
      </span>
    </div>
  );
}
