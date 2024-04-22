import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-black py-4">
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 space-y-8 lg:space-y-0 w-full">
                        <div className="text-white">
                            <NavLink to={'/'} className="font-bold text-xl">
                                Bright Horizons Foundation
                            </NavLink>
                        </div>
                        <div className="flex space-y-8 flex-col text-white md:flex-row md:space-x-12 md:space-y-0 md:w-[70%] lg:w-1/2 xl:w-[35%]  justify-between">
                            <div className="">
                                <h4 className="font-bold mb-4 text-xl">
                                    Our teams
                                </h4>
                                <ul className="space-y-4 text-base md:text-lg flex flex-col">
                                    <Link to="">About us</Link>
                                    <Link to="">Team</Link>
                                    <Link to="">What we do</Link>
                                    <Link to="">Contact</Link>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className="font-bold mb-4 text-xl">More</h4>
                                <ul className="space-y-4 text-base md:text-lg flex flex-col">
                                    <Link to="/">Projects</Link>
                                    <Link to="">Events</Link>
                                    <Link to="/">Donate</Link>
                                    <Link to="">Blog</Link>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className="font-bold mb-4 text-xl">
                                    Connect
                                </h4>
                                <ul className="space-y-4 text-base md:text-lg flex flex-col">
                                    <Link to="/">Facebook</Link>
                                    <Link to="">Instagram</Link>
                                    <Link to="/">Twitter</Link>
                                    <Link to="">LinkedIn</Link>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[35%]">
                            <h1 className="text-white text-4xl font-bold mb-4">
                                Subscribe to get latest updates
                            </h1>
                            <div className="subscribe_form max-w-[323px] p-0 rounded-[4px] mt-8">
                                <form action="">
                                    <input
                                        type="email"
                                        className="bg-transparent border outline-none border-r-0 py-2 rounded-[4px] text-white ml-2 text-base md:text-lg"
                                    />
                                    <button className="bg-white text-black px-4 py-2 rounded-[4px] text-base md:text-lg">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
