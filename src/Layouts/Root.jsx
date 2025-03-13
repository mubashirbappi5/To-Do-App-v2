import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const Root = () => {
    return (
        <div>
            <div className='md:grid grid-cols-12'>
            <div className='col-span-2 '>
            <Sidebar ></Sidebar>
            </div>
          
        <div className='col-span-10 '>
        <Outlet></Outlet>
        </div>
            </div>
        </div>
    );
};

export default Root;