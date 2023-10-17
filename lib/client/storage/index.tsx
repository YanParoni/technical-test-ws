import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import initialProducts from '../../mock/products';

export interface Product {
  image: string;
  description: string;
  value: number;
  name: string;
}

interface ProductList {
  category: string;
  items: Product[];
}

type ProductStore = {
  products: any;
  categories: any;
  addProduct: (category: string, product: Product) => void;
  editProduct: (updatedProduct: Product, index: number) => void;
  removeProduct: (index: number) => void;
  setActiveCategorie: (item: string) => void;
  activeCategorie: string;
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
};

export const useProductStore = create<ProductStore>()(
  immer((set) => ({
    activeCategorie: 'Healthy & Care',
    categories: initialProducts
      .filter((item) => item.category)
      .map((item) => item.category),
    setActiveCategorie: (category) =>
      set((state) => ({ activeCategorie: category })),
    products: [...initialProducts],
    addProduct: (category, product) =>
      set((state) => {
        const categoryIndex = state.products.findIndex(
          (item:any) => item.category === category
        );

        if (categoryIndex !== -1) {
          state.products[categoryIndex].items.push(product);
        }
      }),
    editProduct: (updatedProduct, index) =>
      set((state) => {
        const categoryIndex = state.products.findIndex(
          (item:any) => item.category === state.activeCategorie
        );

        if (categoryIndex !== -1) {
          const productIndex = index;
          if (
            productIndex >= 0 &&
            productIndex < state.products[categoryIndex].items.length
          ) {
            state.products[categoryIndex].items[productIndex] = {
              ...state.products[categoryIndex].items[productIndex],
              name: updatedProduct.name,
              description: updatedProduct.description,
              value: updatedProduct.value,
            };
          }
        }
      }),
    removeProduct: (index) =>
      set((state) => {
        const categoryIndex = state.products.findIndex(
          (item: any) => item.category === state.activeCategorie
        );

        if (
          categoryIndex !== -1 &&
          index >= 0 &&
          index < state.products[categoryIndex].items.length
        ) {
          if (state.products[categoryIndex].items.length > 3) {
            state.products[categoryIndex].items.splice(index, 1);
          } else {
            console.log('');
          }
        }
      }),
      sidebarOpen: true,
      setSidebarOpen: (isOpen) =>
        set((state) => {
          state.sidebarOpen = isOpen;
        }),
  }))
);
