import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signin = () => {
    const { user, signIn, google, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [buyer, setBuyer] = useState(null);
    const [seller, setSeller] = useState(null);
    const [userEmail, setUserEmail] = useState('')
    const token = useToken(userEmail)
    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       
        if (password.length < 6) {
            toast.error("You must be given 6 char")
        }

        // Sign in with email and password
        signIn(email, password)
            .then(res => {
                const user = res.user;

            })
            .catch(err => console.error(err))

        const userInfo = {
            displayName: name
        }
        updateUserProfile(userInfo)
            .then(() => {
                storeUserInfo(name, email)
            })
            .catch(err => console.error(err))
        form.reset()
        toast.success("Creating user Successfully")

    }


    //  Sign in with google

    const signIngoogle = () => {
        const provider = new GoogleAuthProvider();
        google(provider)
            .then(res => {
                const user = res.user;
            })
            .catch(err => console.error(err))
    }

    //  Send user to database via server

    const storeUserInfo = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)

            })
    };


   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered required" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered required" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered required" />
                                    <label className="label">
                                        <Link to="/login" className="label-text-alt link link-hover">All ready have an account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn bg- w-full' type="submit" value="signin" />
                                </div>
                            </form>
                            <select  className="select select-bordered w-full max-w-xs"><font></font>
                                <option disabled defaultValue>User</option><font></font>
                                <option id='user'>User</option><font></font>
                                <option ud='seller'>Seller</option><font></font>
                            </select>
                            <div className="form-control mt-6">
                                <button onClick={signIngoogle} className="btn btn-outline">Continue with google</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signin;