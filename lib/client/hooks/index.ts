import { useMemo } from 'react'
import { iocContainer } from '../../ioc'
import { useProductStore } from '../storage'
export const useDeps = <DepType, >(depName: string): DepType => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dep = useMemo(() => iocContainer.get<DepType>(depName), [])

  return dep
}

export function useCurrencyFormatter(value:number) {
  const formatCurrency = (value:number) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
    return formattedValue;
  };

  const formattedCurrency =useMemo(() => {
    return formatCurrency(value, );
  }, [value, ]);

  return formattedCurrency;
}

export function useDerivedState() {
  const {activeCategorie} = useProductStore()
  return useProductStore(
    (state) =>
      state.products.filter((p) => p.category === activeCategorie)[0].items
  );
}