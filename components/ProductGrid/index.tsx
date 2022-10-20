import { Grid } from "./styles";
import { Product } from "components/Product";
import { ProductInterface } from "hooks/useProducts";

export const ProductGrid = (props: { products: ProductInterface[] }) => {
  const { products } = props;
  // console.log(products);
  return (
    <Grid>
      {Array.isArray(products) &&
        products.map((product, i) => (
          <Product
            name={product.name}
            price={product.price}
            image={product.image}
            key={product.name + i}
          />
        ))}
    </Grid>
  );
};
