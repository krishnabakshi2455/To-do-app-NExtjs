"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetask } from '../redux/slice';

const TableComponent = () => {
  const listdata = useSelector((state) => state.ADDTASKS.MYTASKS);
  const dispatch = useDispatch()
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ALL TODOS</th>
        </tr>
      </thead>
      <tbody>
        {listdata && listdata.length > 0 ? (
          listdata.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button></td>
              <td><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => dispatch(removetask(index,item))}>Delete</button></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="1">NO TODOS</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
