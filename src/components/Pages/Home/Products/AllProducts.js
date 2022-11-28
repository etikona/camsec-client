import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const data = useLoaderData();
    const [order, setOrder] = useState(null)
    // console.log(data.products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            data.products.map(product => <ProductCard
                product={product}
                setOrder={setOrder}
                ></ProductCard>)
          }
          {
            order &&
            <BookingModal order={order}/>

          }
        </div>
    );
};

export default AllProducts;