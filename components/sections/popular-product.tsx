import React from 'react'
import Wrapper from '../wrapper';
import H2 from '../h2';
import PopularProductList from '../popular-product-list';

export default function PopularProduct() {
  return <section className="py-10">
    <Wrapper>
      <div>
        <H2>Popular Now</H2>
        <PopularProductList />
      </div>
    </Wrapper>
  </section>;
}
