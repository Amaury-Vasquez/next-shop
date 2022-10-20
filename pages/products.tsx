import Head from "next/head";

import { useProducts } from "hooks/useProducts";
import { ProductGrid } from "components/ProductGrid";

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <Head>
        <title> Products | Fake shop </title>
      </Head>
      <ProductGrid products={products || []} />
    </>
  );
};

export default Products;
