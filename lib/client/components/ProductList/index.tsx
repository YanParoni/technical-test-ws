import { useProductStore } from 'lib/client/storage';
import React from 'react';
import ProductForm from '../ProductForm';
import { useDerivedState } from 'lib/client/hooks';
type Props = {};

export default function ProductList({}: Props) {
  const { activeCategorie } = useProductStore();
  const products = useDerivedState();
  return (
    <div className="w-full max-h-[75vh] overflow-scroll shadow-md rounded-lg px-6">
      <div className="font-semibold text-2xl py-8 ">
        {activeCategorie} Products
      </div>
      <div className='flex flex-col gap-4'>
      {products.map((product:any, i:number) => (
        <ProductForm key={i} prod={product} index={i} />
      ))}
      </div>
    </div>
  );
}
