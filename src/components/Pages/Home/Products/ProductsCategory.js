import React from 'react';

const ProductsCategory = ({category}) => {
    const {Brand} = category;
    return (
        <div className='bg-red-200 p-20 shadow-xl'>
            <p className='text-2xl font-sans shadow'>{Brand}</p>
        </div>
    );
};

export default ProductsCategory;