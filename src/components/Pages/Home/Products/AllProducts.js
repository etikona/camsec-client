import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const data = useLoaderData();
    // console.log(data.products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            data.products.map(product => <ProductCard  product={product}></ProductCard>)
          }
        </div>
    );
};

export default AllProducts;