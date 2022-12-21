import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signin = () => {
    const { user, signIn, google, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [role, setRole] = useState(null)
    const [buyer, setBuyer] = useState(null)
    const [seller, setSeller] = useState(null)
    const [userEmail, setUserEmail] = useState('')
    const token = useToken(userEmail)

    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(role);
            if(password.length < 6) {
                toast.error("You must be given 6 char")
    }

    // Sign in with email and password
    signIn(email, password)
        .then(res => {
            const user = res.user;
            // userRole(user);
        })
        .catch(err => console.error(err))

    const userInfo = {
        displayName: name,

    }

    updateUserProfile(userInfo)
        .then(() => {
            storeUserInfo(name, email, role)
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

const storeUserInfo = (name, email, role) => {
    const user = { name, email, role};
    fetch('https://camsec-server.vercel.app/users', {
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
        <div className="hero min-h-screen bg-green-80">

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-200">
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
                                <input className='btn bg-sky-500 border-0 w-full' type="submit" value="signin" />
                            </div>

                            <select name='role' className="select select-bordered w-full max-w-xs"><font></font>
                                <option selected  >Buyer</option><font></font>
                                <option>Seller</option><font></font>
                            </select>
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