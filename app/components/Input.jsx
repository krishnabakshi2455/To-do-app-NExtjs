"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listtask } from '../redux/slice';

const Input = () => {
    const [inputdata, setinputdata] = useState('');
    const dispatch = useDispatch();

    const inputhandle = (e) => {
        setinputdata(e.target.value);
    };

    const submitdata = () => {
        dispatch(listtask(inputdata));
    };

    useEffect(() => {
        // Remove the fdprocessedid attribute if present
        const element = document.querySelector('[fdprocessedid]');
        if (element) {
            element.removeAttribute('fdprocessedid');
        }
    }, []);

    return (
        <div className='h-16 m-10 flex justify-center items-center gap-4'>
            <input
                type="text"
                className='border-black border-1 w-1/2 h-10'
                placeholder='Enter Your Tasks'
                onChange={inputhandle}
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'
                onClick={submitdata}
            >
                Add TODO
            </button>
        </div>
    );
};

export default Input;
