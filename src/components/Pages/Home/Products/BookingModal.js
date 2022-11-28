import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
const BookingModal = ({order}) => {
    const {name, resellPrice} = order
    const {user} = useContext(AuthContext);
    console.log(user);
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = user.email;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;
        if(userName && email && price && number && location){
            toast.success("Your order place successfully");
            form.reset()
        }
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                   <form onSubmit={handleOrder}> 
                   <input type="text" value={user.displayName} name='userName' className="input input-bordered w-full max-w-xs" />
                   <input type="email"  value={user.email} name='email' className="input input-bordered w-full max-w-xs" />
                   <input type="text" value= {resellPrice} name='price' className="input input-bordered w-full max-w-xs" />
                   <input type="text" placeholder="phone number" name='number'  className="input input-bordered w-full max-w-xs" />
                   <input type="text" placeholder="meeting location" name='location' className="input input-bordered w-full max-w-xs" />
                   <input type="submit" className='btn btn-outline w-full' value="submit" />
                   </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;