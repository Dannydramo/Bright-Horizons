import React from 'react';
import KnowAboutImage from '../../images/know_about.png';

const KnowAbout = () => {
    return (
        <section>
            <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                <div className="flex flex-col md:flex-row lg:justify-between items-center md:space-x-8">
                    <div className="w-full md:w-[60%] lg:w-[55%]">
                        <div className="flex space-x-2 items-center">
                            <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                            <h4 className="font-bold text-xl">KNOW ABOUT US</h4>
                        </div>
                        <div className="ml-4 xl:ml-8">
                            <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                                We provide a place for children with special
                                needs
                            </h1>
                            <p className="my-4 text-sm sm:text-base">
                                At our center, we offer a nurturing environment
                                tailored to meet the unique needs of children
                                with special requirements.
                            </p>
                            <p className="my-4 text-sm sm:text-base">
                                Our dedicated team of professionals understands
                                the importance of individualized care, providing
                                a safe and inclusive space where every child can
                                thrive. Through personalized programs and
                                specialized support, we aim to empower each
                                child to reach their full potential, fostering
                                growth, development, and confidence.
                            </p>
                            <button className="bg-[#F2C94C] text-[#1D2130] px-6 py-3 rounded-md mb-8 text-sm sm:text-base">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <img src={KnowAboutImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowAbout;
