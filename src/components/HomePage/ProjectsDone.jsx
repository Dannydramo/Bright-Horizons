import React from 'react';
import StatsRow from '../../images/stats.png';
// import Chart from '../../images/Chart.png';

const ProjectsDone = () => {
    return (
        <>
            <section>
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="">
                        <div className="flex space-x-2 items-center">
                            <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                            <h4 className="font-bold text-xl">
                                PROJECTS WE HAVE DONE
                            </h4>
                        </div>
                        <h1 className="sm:text-5xl font-bold lg:leading-[4rem] my-4 w-full md:w-[60%] lg:w-[55%]">
                            We are Creating sustainable society, for everyone
                            and forever.
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="bg-[url(./images/mission_smile.png)] bg-no-repeat bg-cover p-8 bg-center rounded-xl">
                            <h3 className="text-white text-3xl font-bold">
                                Mission 40K: Tree plantation
                            </h3>
                            <p className="text-white my-4 text-sm sm:text-base">
                                It is our ambitious initiative aimed at
                                combatting climate change and promoting
                                environmental sustainability through large-scale
                                tree planting efforts. With a goal to plant
                                40,000 trees, our mission is driven by a
                                commitment to creating a greener, healthier
                                planet for future generations.
                            </p>
                            <button className="px-6 py-3 bg-white rounded-md my-4 text-sm sm:text-base">
                                See more
                            </button>
                        </div>
                        <div className="bg-[url(./images/weekly_excursion.png)] bg-no-repeat bg-cover p-8 bg-center rounded-xl">
                            <h3 className="text-white text-3xl font-bold">
                                Weekly Cleanliness in City
                            </h3>
                            <p className="text-white my-4 text-sm sm:text-base">
                                ! Weekly Cleanliness in City is a
                                community-driven initiative focused on
                                maintaining a clean and hygienic environment for
                                residents. Through organized efforts and
                                community participation, we aim to address
                                littering, waste management, and sanitation
                                issues to create a healthier and more livable
                                city.
                            </p>
                            <button className="px-6 py-3 bg-white rounded-md my-4 text-sm sm:text-base">
                                See more
                            </button>
                        </div>
                        <div className="bg-[url(./images/monthly_awareness.png)] bg-no-repeat bg-cover p-8 bg-center rounded-xl">
                            <h3 className="text-white text-3xl font-bold">
                                Wildlife safety program 2021
                            </h3>
                            <p className="text-white my-4 text-sm sm:text-base">
                                The Wildlife Safety Program 2021 is a
                                comprehensive initiative aimed at protecting and
                                preserving the diverse wildlife species in our
                                region while promoting harmonious coexistence
                                between humans and wildlife. Through this
                                program, we prioritize the conservation of
                                habitats, prevention of human-wildlife
                                conflicts, and education of local communities on
                                wildlife safety practices.
                            </p>
                            <button className="px-6 py-3 bg-white rounded-md my-4 text-sm sm:text-base">
                                See more
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======== DONATIONS ========= */}
            <section className="bg-black py-4">
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="flex flex-col md:flex-row lg:justify-between items-center md:space-x-8">
                        <div className="w-full md:w-[60%] lg:w-[55%]">
                            <h1 className="text-white text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                                How we spend your donations and where it goes
                            </h1>
                            <p className="my-4 text-white opacity-60 text-sm sm:text-base">
                                We understand that when you make a  donation,
                                you want to know exactly where your money is
                                going and we pledge to be transparent.
                            </p>
                            <div className="my-8">
                                <img src={StatsRow} alt="" />
                            </div>
                        </div>
                        <div className="">
                            {/* <img src={Chart} alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsDone;
