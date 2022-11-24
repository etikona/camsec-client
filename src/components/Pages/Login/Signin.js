import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Signin = () => {
    const { signIn, google } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError("You must be given 6 char")
        }

        // Sign in with email and password
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => console.error(err))
        form.reset()
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
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn bg- w-full' type="submit" value="signin" />
                                </div>
                            </form>
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