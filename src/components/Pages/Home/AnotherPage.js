import React from 'react';
import Gallery from 'react-photo-gallery';

const AnotherPage = () => {

    const photos = [
        {
            src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80",
            width: 4,
            height: 3,
        },
    ]

    return (
        <div>
            <div className="hero min-h-screen bg-green-80">
                <div className="hero-content flex-col lg:flex-row">
                    <Gallery photos={photos} />
                    <div>
                        <h1 className="text-5xl font-semi-bold font-serif text-cyan-900">Full fill your <br /> Dream!</h1>
                        <p className="py-6"> your hobby is our priority. Buy your first camera. <br /> First camera is always an emotion. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherPage;