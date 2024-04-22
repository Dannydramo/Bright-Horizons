import React from 'react';

const VolunteerSection = () => {
    return (
        <>
            {' '}
            <section>
                <div className="sm:w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="flex flex-col justify-center items-center bg-[url(./images/volunteer_image.png)] bg-no-repeat bg-cover bg-center py-12 sm:rounded-xl">
                        <h1 className="text-white text-4xl sm:text-5xl md:w-[80%] lg:w-[70%] xl:w-[50%] font-bold lg:leading-[4rem] text-center">
                            You can contribute to make the environment greener!
                        </h1>
                        <div className="mt-8 flex space-x-8">
                            <button className="bg-[#F2C94C] text-[#1D2130] px-6 py-3 text-sm sm:text-base rounded-md font-semibold">
                                Join As A Volunteer
                            </button>
                            <button className="bg-white text-black px-6 py-3 rounded-md text-sm sm:text-base font-semibold">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="flex my-8 items-center space-x-8">
                        <h4 className="font-bold text-3xl">Our Events</h4>
                        <hr className="bg-black text-black sm:w-[55%] md:w-[60%] lg:w-[60%] xl:w-[77%]" />
                    </div>
                    <div className="flex flex-col justify-between sm:flex-row sm:space-x-4 space-x-0 space-y-4 sm:space-y-0 ">
                        <div className="bg-[#F2C94C] text-[#1D2130] flex p-8 space-x-8 rounded-md sm:w-[50%] justify-between">
                            <p>
                                <span className="text-3xl font-semibold">
                                    23
                                </span>{' '}
                                <br />
                                <span className="font-medium"> SEP</span>
                            </p>
                            <div className="flex  items-center justify-between space-x-12">
                                <div className="">
                                    <div className="mb-2 flex space-x-2 items-center">
                                        <h5>NEXT EVENT</h5>
                                        <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                                    </div>
                                    <p className="text-base lg:text-xl font-bold">
                                        Say no to plastic usage and save the
                                        planet
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-full">
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#F2C94C] text-[#1D2130] flex p-8 space-x-8 rounded-md sm:w-[50%] justify-between">
                            <p>
                                <span className="text-3xl font-semibold">
                                    23
                                </span>{' '}
                                <br />
                                <span className="font-medium"> SEP</span>
                            </p>
                            <div className="flex  items-center justify-between space-x-12">
                                <div className="">
                                    <div className="mb-2 flex space-x-2 items-center">
                                        <h5>NEXT EVENT</h5>
                                        <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                                    </div>
                                    <p className="text-base lg:text-xl font-bold">
                                        Say no to plastic usage and save the
                                        planet
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-full">
                                    {' '}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VolunteerSection;
