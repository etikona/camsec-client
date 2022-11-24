import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-500 gap-4  p-5'>
            <div className='border p-3 rounded'>
                <h3 className='text-xl font-semibold text-rose-700'> What are the different ways to manage a state in a React application?</h3>
                <p className='text-white mt-3'>
                    There are four main types of state you need to properly manage in your React apps. These are 1. Local state  2.Global state  3.Server state and 4.URL State
                </p>
            </div>
            <div className='border p-3 rounded'>
                <h3 className='text-xl font-semibold text-rose-700'>How does prototypical inheritance work?</h3>
                <p className='text-white mt-3'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                </p>
            </div>
            <div className='border p-3 rounded'>
                <h3 className='text-xl font-semibold text-rose-700'>What is a unit test? Why should we write unit tests?</h3>
                <p className='text-white mt-3'>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages
                </p>
            </div>
            <div className='border p-3 rounded'>
                <h3 className='text-xl font-semibold text-rose-700'>React vs. Angular vs. Vue?</h3>
                <p className='text-white mt-3'>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>
            </div>
        </div>
    );
};

export default Blogs;