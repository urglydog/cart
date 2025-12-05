import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { setProducts, setLoading, setError } from '@/store/productSlice';
import { getProducts } from '@/api/productService';

export function useProductAPI() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const fetchProducts = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getProducts();
      dispatch(setProducts(data));
    } catch (err) {
      dispatch(setError(err instanceof Error ? err.message : 'Lỗi không xác định'));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
}

