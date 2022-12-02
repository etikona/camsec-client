import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const handleAddProducts = event => {
    event.preventDefault();
   const form = event.target;
   const name = form.name.value;
   const price = form.price.value;
   const condition = form.condition.value;
   const location = form.location.value;
   const products = {
    name,price, condition, location, 
   };

   fetch('https://camsec-server.vercel.app/products', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(products)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.acknowledged) {
            toast("Your order confirmed", {
                icon: '✔'
            })
           
        }
        
        form.reset();
    })
  }
  return (
    <div>
            
        <div className="hero min-h-screen bg-base-100"><font></font>
        
          <div className="hero-content flex-col lg:flex-row-reverse"><font></font>
          
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><font></font>
              <div className="card-body"><font></font>
              <h2 className="text-3xl font-serif">Add your Products</h2>
              <form onSubmit={handleAddProducts}>
                <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='price' placeholder="Price" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='condition' placeholder="Condition" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='location' placeholder="Location" className="input input-bordered input-primary w-full max-w-xs" />
                <div className="form-control mt-6"><font></font>
                <input  className="btn btn-accent w-full" type="submit" value="submit" />
                  
                </div><font></font>
                </form>
              </div><font></font>
            </div><font></font>
          </div><font></font>
        </div>
      
    </div>
  );
};

export default AddProduct;