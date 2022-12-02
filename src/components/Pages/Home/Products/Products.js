import React, { useEffect, useState } from 'react';
import ProductsCategory from './ProductsCategory';

const Products = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = 'https://camsec-server.vercel.app/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-10'>
            <h3 className='mb-5 text-3xl font-serif'>Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    categories.slice(0,3).map(category =>
                        <ProductsCategory key={category._id} category={category}></ProductsCategory>
                    )
                }
            </div>
        </div>
    );
};

export default Products;