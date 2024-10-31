import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <section className='container mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;