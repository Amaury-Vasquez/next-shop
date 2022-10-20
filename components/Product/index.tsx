import Image from 'next/image';
import { useState } from 'react';

import { ProductCard, ImageWrapper } from './styles';
import { ProductInterface } from 'hooks/useProducts';

export const Product = (props: ProductInterface) => {
  const { name, price, image } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <ProductCard>
      <ImageWrapper>
        <Image
          src={image}
          layout="fill"
          priority
          alt={name + ' image'}
          onLoadingComplete={() => setLoaded(true)}
        />
      </ImageWrapper>
      <span> {name} </span>
      <span> {'Price: $' + price} </span>
    </ProductCard>
  );
};
