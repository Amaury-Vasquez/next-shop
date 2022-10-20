import { useEffect, useState } from 'react';

export interface ProductInterface {
  name: string;
  price: number;
  image: string;
}

export const useProducts = () => {
  const url = 'http://localhost:5000/api/v1/products/';

  const [products, setProducts] = useState<ProductInterface[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        await res.json().then((data) => {
          setProducts(data.products);
          setError(null);
        });
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };

    if (!products && !error) fetchProducts();
    else if (error && attempts < 10) {
      setTimeout(() => {
        console.log('Resending request');
        fetchProducts();
        setAttempts((attempts) => attempts + 1);
      }, 10000);
    }
    if (products) console.log(products);
  }, [products, error, setProducts, setError, attempts, setAttempts]);

  return { products };
};
