import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VolunteerModal from './VolunteerModal';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [navShadow, setNavShadow] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setNavbarBackground('rgb(250, 248, 248)');
            setNavShadow(
                '0px -2px 2px rgba(30, 30, 30, 0.07),0px 2px 2px rgba(30, 30, 30, 0.1)'
            );
        } else {
            setNavbarBackground('transparent');
            setNavShadow('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <nav
                className="fixed top-0 w-full z-[40]"
                style={{
                    backgroundColor: navbarBackground,
                    boxShadow: navShadow,
                }}
            >
                <div className="flex justify-between items-center w-[95%] md:w-[90%] mx-auto h-16 md:h-20">
                    <div className="z-[100]">
                        <NavLink to={'/'} className="font-bold text-xl">
                            Bright Horizons Foundation
                        </NavLink>
                    </div>
                    <div
                        className="lg:hidden z-[42]"
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-6 h-6 ${!open && 'hidden'}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-6 h-6 ${open && 'hidden'}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </div>

                    <div
                        className={`flex flex-col lg:justify-between lg:w-[65%] xl:w-[40%] items-start lg:items-center  lg:flex-row lg:space-x-8 bg-white lg:bg-transparent space-y-5 lg:space-y-0 lg:static fixed top-0 z-[32] lg:h-auto h-screen w-screen duration-500 ease-linear px-11 py-12 lg:py-0 lg:px-0 ${
                            !open ? 'right-[-100%]' : 'right-0'
                        }`}
                    >
                        <ul className="flex flex-col lg:flex-row text-sm sm:text-base justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-12 absolute top-20 left-4 lg:relative lg:top-0">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about-us">About Us</NavLink>
                            <NavLink to="/causes">Causes</NavLink>
                            <p
                                className="cursor-pointer"
                                onClick={() => setShowModal(true)}
                            >
                                Volunteer
                            </p>{' '}
                            <NavLink
                                to="/donate"
                                className="bg-black text-white px-6 py-3 font-semibold rounded-md"
                            >
                                Donate
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            {showModal && (
                <VolunteerModal onClose={() => setShowModal(false)} />
            )}{' '}
            {/* Render Modal when showModal state is true */}
        </Fragment>
    );
};

export default Navbar;
