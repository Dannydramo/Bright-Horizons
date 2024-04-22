import React from 'react';
import DonateImg from '../../images/donate_img.png';

const Donate = () => {
    return (
        <>
            {' '}
            <section className="bg-[#FFEBB9]">
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem] mt-[4rem] md:mt-[4rem] py-4 lg:mt-[5rem] min-h-[70vh] flex items-center">
                    <div className="flex flex-col md:flex-row lg:justify-between md:space-x-8 my-8">
                        <div className="w-full md:w-[60%] lg:w-[55%]">
                            <div className="flex space-x-2 items-center">
                                <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                                <h4 className="font-bold text-xl">DONATE</h4>
                            </div>
                            <div className="ml-4 xl:ml-12 lg:w-[80%]">
                                <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                                    Making a donation for our children
                                </h1>
                                <p className="my-4 text-sm sm:text-base">
                                    Making a donation for our children is a
                                    powerful way to support their well-being and
                                    development. Your generous contribution
                                    enables us to provide essential services and
                                    resources that directly impact the lives of
                                    children in need. Every donation, no matter
                                    the size, makes a meaningful difference in
                                    ensuring that our children receive the care
                                    and support they deserve.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <img src={DonateImg} alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Donate;
