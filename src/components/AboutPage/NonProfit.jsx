import React from 'react';
import AboutImage from '../../images/about_img.png';

const NonProfit = () => {
    return (
        <>
            {' '}
            <section>
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem] mt-24">
                    <div className="flex space-x-2 items-center">
                        <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                        <h4 className="font-bold text-xl">KNOW ABOUT US</h4>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
                        <div className="md:w-[60%]">
                            <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] ml-4 xl:ml-8">
                                We are a non-governmental organization
                            </h1>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="font-bold text-lg md:text-xl mb-4">
                                As a non-governmental organization (NGO), our
                                mission is to address critical social,
                                environmental, and humanitarian issues both
                                locally and globally.
                            </h3>
                            <p className="text-sm sm:text-base">
                                Unlike governmental entities, we operate
                                independently of government control, allowing us
                                to pursue our goals with flexibility,
                                innovation, and autonomy.
                            </p>
                        </div>
                    </div>
                    <img
                        src={AboutImage}
                        alt=""
                        className="block mx-auto mt-16 mb-[-7rem] sm:mb-[-12rem]"
                    />
                </div>
            </section>
            <section className="bg-[#FFEBB9] pt-[1rem] sm:pt-[7rem] pb-8">
                <div className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto mt-24">
                    <div className="flex justify-between flex-col lg:flex-row my-[3rem] space-y-8 lg:space-y-0 lg:space-x-12">
                        <div className="">
                            <h3 className="font-bold my-2">OUR MISSION</h3>
                            <h1 className="text-3xl sm:text-4xl font-bold my-4">
                                We make sure to provide inclusive care for
                                children with special needs
                            </h1>
                            <p className="text-sm sm:text-base">
                                Ensuring inclusive care for children with
                                special needs is at the core of our mission and
                                values. We have developed a comprehensive
                                approach to provide holistic support that meets
                                the diverse needs of every child under our care.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="font-bold my-2">OUR VISION</h3>
                            <h1 className="text-3xl sm:text-4xl font-bold my-4">
                                Provide more inclusive care to children around
                                the world
                            </h1>
                            <p className="text-sm sm:text-base">
                                Expanding inclusive care for children with
                                special needs worldwide is a monumental endeavor
                                that requires collaborative efforts across
                                multiple sectors and stakeholders. Here are some
                                strategies to promote more inclusive care for
                                children around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NonProfit;
