import React, { useState, useEffect } from 'react';
import { Product, useProductStore } from 'lib/client/storage';
import Image from 'next/image';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import EditButtons from '../EditButtons';
import { useCurrencyFormatter } from 'lib/client/hooks';
interface IFormInput {
  name: string;
  description: string;
  value: number;
}

type EditableProductProps = {
  prod: Product;
  register: UseFormRegister<IFormInput>;
  editing: boolean;
};

const EditableProductFields = ({
  register,
  errors,
}: {
  register: UseFormRegister<IFormInput>;
  errors: any;
}) => {
  return (
    <>
      <input
        {...register('name', { required: true, minLength: 5, maxLength: 20 })}
        placeholder="Product name"
        className={`text-xl font-bold mb-2 ${
          errors.name ? 'outline-red-500' : 'outline-green-500'
        }`}
      />
      {errors.name?.type === 'required' && (
        <p className="text-red-500" role="alert">
          Product name is required
        </p>
      )}
      {errors.name?.type === 'minLength' && (
        <p className="text-red-500" role="alert">
          minLength required is 5 chars
        </p>
      )}
      {errors.name?.type === 'maxLength' && (
        <p className="text-red-500" role="alert">
          maxLength required is 20 chars
        </p>
      )}

      <input
        {...register('description', {
          required: true,
          minLength: 5,
          maxLength: 26,
        })}
        placeholder="Product description"
        className={`text-xl font-bold mb-2 ${
          errors.description ? 'outline-red-500' : 'outline-green-500'
        }`}
      />
      {errors?.description?.type === 'required' && (
        <p className="text-red-500" role="alert">
          Product description is required
        </p>
      )}
      {errors.description?.type === 'minLength' && (
        <p className="text-red-500" role="alert">
          minLength required is 5 chars
        </p>
      )}
      {errors.description?.type === 'maxLength' && (
        <p className="text-red-500" role="alert">
          maxLength required is 26 chars
        </p>
      )}

      <input
        {...register('value', { required: true, minLength: 1, maxLength: 20 })}
        placeholder="Product value"
        className={`text-xl font-bold mb-2 ${
          errors.value ? 'outline-red-500' : 'outline-green-500'
        }`}
      />
      {errors.value?.type === 'required' && (
        <p className="text-red-500" role="alert">
          Product value is required
        </p>
      )}
      {errors.value?.type === 'minLength' && (
        <p className="text-red-500" role="alert">
          minLength required is 5 chars
        </p>
      )}
      {errors.value?.type === 'maxLength' && (
        <p className="text-red-500" role="alert">
          maxLength required is 20 chars
        </p>
      )}
    </>
  );
};

const ProductImage = ({ image }: { image: string }) => {
  return (
    <div className="h-[10rem]  w-[13rem] relative cursor-pointer transition hover:ease-in-out hover:scale-105">
      <Image
        src={image}
        layout="fill"
        alt="Product Image"
        className="rounded-2xl"
      />
      <div className="absolute shadow-2xl rounded-2xl top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 opacity-20 hover:opacity-0 transition-opacity duration-300 ease-in-out z-20"></div>
    </div>
  );
};

export default function ProductForm({ prod, index}: { prod: Product, index:number }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {editProduct, removeProduct} = useProductStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'all',
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
 
  const formattedValue = useCurrencyFormatter(prod.value);
  function isObjectEmpty(obj:any) {
    return Object.keys(obj).length === 0;
  }

  const onDelete = () => {
    removeProduct(index);
  };
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (isObjectEmpty(errors)) {
      const updatedProduct: Product = {
        image:prod.image,
        ...data,
      };
      editProduct(updatedProduct, index);
      console.log(updatedProduct)
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  

  useEffect(() => {
    setIsFormValid(Object.keys(errors).length === 0);
  }, [errors]);

  useEffect(() => {
    setIsEditing(false);
  }, [prod]);

  if (!prod) return null;

  return (
    <div className="grid grid-cols-3 z-2 md:grid-cols-3 w-full gap-10 items-center">
      <ProductImage image={prod.image} />
      <div className="md:col-span-1 py-12">
        {!isEditing ? (
          <>
            <div className="text-xl mb-2 font-bold">{prod.name}</div>
            <div className="text-sm mb-2">{prod.description}</div>
            <div className="text-lg font-bold mb-2">
              Value: {formattedValue}
            </div>
          </>
        ) : (
          <EditableProductFields errors={errors} register={register} />
        )}
      </div>
      <EditButtons
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSubmit(onSubmit)}
        onCancel={() => setIsEditing(false)}
        onDelete={onDelete} 
      />
    </div>
  );
}
