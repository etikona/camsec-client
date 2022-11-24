import React from 'react';

const Banner = () => {
    return (
        <div className='mx-16 mb-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")` }}><font></font>
                <div className="hero-overlay bg-opacity-60"></div><font></font>
                <div className="hero-content text-center text-neutral-content"><font></font>
                    <div className="max-w-md"><font></font>
                        <h1 className="mb-5 text-5xl font-bold font-serif">Welcome to Camsec</h1><font></font>
                        <p className="mb-5">We provide high-quality used camera & lens within your budget..</p><font></font>
                    </div><font></font>
                </div><font></font>
            </div>
        </div>
    );
};

export default Banner;