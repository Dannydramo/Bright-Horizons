import React from 'react';
import CausesImg from '../images/causes_img.png';
import VolunteerSection from '../components/VolunteerSection';

const Causes = () => {
    return (
        <>
            <section className="bg-[#FFEBB9]">
                <div className="w-[95%] lg:w-[90%] mx-auto mt-[5rem] my-[3rem]">
                    <div className="flex flex-col md:flex-row lg:justify-between py-8 md:space-x-8">
                        <div className="w-full md:w-[60%] lg:w-[55%]">
                            <div className="ml-4 xl:ml-12 lg:w-[80%]">
                                <h1 className="text-4xl  sm:text-5xl font-bold lg:leading-[4rem] my-4">
                                    Ensuring Every Child's Well-being
                                </h1>
                                <ol className="list-decimal my-4 text-sm sm:text-base space-y-4">
                                    <li>
                                        <span className="font-bold">
                                            Education Access:
                                        </span>
                                        <span>
                                            Education is the key to unlocking
                                            opportunities and breaking the cycle
                                            of poverty. It empowers children to
                                            reach their full potential and
                                            contribute positively to society.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Healthcare Equity:
                                        </span>
                                        <span>
                                            Access to healthcare services is not
                                            equitable, with marginalized
                                            communities often lacking access to
                                            essential healthcare services,
                                            vaccinations, and preventive care.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Nutrition and Food Security:
                                        </span>
                                        <span>
                                            Many children suffer from food
                                            insecurity and malnutrition, which
                                            can have long-term consequences on
                                            their growth, development, and
                                            overall health.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={CausesImg}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <VolunteerSection />
        </>
    );
};

export default Causes;
