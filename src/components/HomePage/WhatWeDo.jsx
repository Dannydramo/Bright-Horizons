import React from 'react';
import WhatWeDoImage from '../../images/what_we_do.png';

const WhatWeDo = () => {
    return (
        <section className="bg-[#FFEBB9] py-4">
            <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                <div className="flex flex-col md:flex-row lg:justify-between items-center md:space-x-8">
                    <div className="w-full md:w-[60%] lg:w-[50%]">
                        <div className="flex space-x-2 items-center">
                            <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                            <h4 className="font-bold text-xl">WHAT WE DO</h4>
                        </div>
                        <div className="ml-4 xl:ml-8">
                            <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                                Some services we provide for our children
                            </h1>
                            <p className="my-4 text-sm sm:text-base">
                                At our center, we offer a comprehensive range of
                                services tailored to meet the diverse needs of
                                our children with special requirements.
                            </p>
                            <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                                {/* <img src={Icon} alt="" className="mt-1" /> */}
                                <div className="">
                                    <h4 className="font-bold text-2xl mb-2">
                                        Family support
                                    </h4>
                                    <p className="text-sm sm:text-base">
                                        We offer counseling, guidance, and
                                        resources to assist families in
                                        navigating the challenges they may
                                        encounter.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                                {/* <img src={Icon1} alt="" className="mt-1" /> */}
                                <div className="">
                                    <h4 className="font-bold text-2xl mb-2">
                                        Health benefits
                                    </h4>
                                    <p className="text-sm sm:text-base">
                                        We provide a range of health benefits to
                                        support their overall development and
                                        enhance their quality of life.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                                {/* <img src={Icon2} alt="" className="mt-1" /> */}
                                <div className="">
                                    <h4 className="font-bold text-2xl mb-2">
                                        Scholarships
                                    </h4>
                                    <p className="text-sm sm:text-base">
                                        Our scholarship program is designed to
                                        assist families with tuition costs,
                                        therapy fees, and other educational
                                        expenses associated with our programs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                                {/* <img src={Icon3} alt="" className="mt-1" /> */}
                                <div className="">
                                    <h4 className="font-bold text-2xl mb-2">
                                        Therapy
                                    </h4>
                                    <p className="text-sm sm:text-base">
                                        Speech therapy focuses on improving
                                        communication skills, language
                                        development, and social interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={WhatWeDoImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
