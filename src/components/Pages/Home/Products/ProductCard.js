import React from 'react';

const ProductCard = ({ product, setOrder }) => {
    console.log(product);
    const { name, Location, img, originalPrice
        , resellPrice, Uses } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl"><font></font>
                <figure className="px-10 pt-10"><font></font>
                    <img src={img} alt="Shoes" className="rounded-xl" /><font></font>
                </figure><font></font>
                <div className="card-body items-center text-center"><font></font>
                    <h2 className="card-title">{name}</h2><font></font>
                    <p>Location : {Location}</p><font></font>
                    <p>Original : ${originalPrice}</p><font></font>
                    <p>Resell : ${resellPrice}</p><font></font>
                    <p>Used : {Uses}</p><font></font>
                    <div className="card-actions"><font></font>

                        <label onClick={() => setOrder(product)} htmlFor="my-modal-3" className="btn btn-primary">Book now</label>
                    </div><font></font>
                </div><font></font>
            </div>
        </div>
    );
};

export default ProductCard;