import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsCategory = ({ category }) => {
    const { Brand, _id } = category;
    return (
        <div>
            <Link to={`/products/${_id}`}>
                <button className='bg-red-200 p-20 shadow-xl'>

                    <p className='text-2xl font-sans shadow'>{Brand}</p>
                </button>
            </Link>

        </div>

    );
};

export default ProductsCategory;