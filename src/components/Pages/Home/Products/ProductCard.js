import React from 'react';

const ProductCard = ({ product }) => {
    const { name, Location, img } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl"><font></font>
                <figure className="px-10 pt-10"><font></font>
                    <img src={img} alt="Shoes" className="rounded-xl" /><font></font>
                </figure><font></font>
                <div className="card-body items-center text-center"><font></font>
                    <h2 className="card-title">{name}</h2><font></font>
                    <p>Location : {Location}</p><font></font>
                    <div className="card-actions"><font></font>
                        <button className="btn btn-primary">Book now</button><font></font>
                    </div><font></font>
                </div><font></font>
            </div>
        </div>
    );
};

export default ProductCard;