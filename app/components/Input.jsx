"use client"
import React, { useState, useEffect, memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listtask, edittask } from '../redux/slice';

const Input = () => {
    const [inputdata, setinputdata] = useState('');
    const dispatch = useDispatch();

    const edittasks = useSelector((state) => state.ADDTASKS.edittask)

    const inputref = useRef()
    const inputhandle = (e) => {
        setinputdata(e.target.value);
    };
    let nostr=''

    const submitdata = () => {
        dispatch(listtask(inputdata));
        inputref.current.value = '';
        dispatch(edittask(nostr))
    };

    useEffect(() => {
        if (edittasks) {
            setinputdata(edittasks);
        }
    }, [edittasks]);

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
                className='border-black border-2 rounded w-1/2 h-10'
                placeholder='Enter Your Tasks'
                onChange={inputhandle}
                value={inputdata}
                ref={inputref}
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'
                onClick={submitdata}

            >
                {
                    edittasks ? 'Update Task' : 'Add Task'
                }
            </button>
        </div>
    );
};

export default memo(Input)
