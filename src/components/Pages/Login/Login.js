import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);

    if (token) {
        navigate('/')
    }

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(res => {
                const user = res.user;
                setLoginUserEmail(email);
                navigate(from, {replace: true});

            })
            .catch(err => console.error(err))
        form.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-green-80">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>
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
                                        <Link to='/signin'>Are you new?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn bg- w-full' type="submit" value="login" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;