import React from 'react';
import ContributeImg from '../../images/contribute_img.png';

const Contribute = () => {
    return (
        <>
            <section className="">
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="flex flex-col md:flex-row lg:justify-between md:space-x-8">
                        <div className="w-full md:w-[60%] lg:w-[55%]">
                            <div className="ml-4 xl:ml-12 lg:w-[80%]">
                                <h1 className="text-4xl  sm:text-5xl font-bold lg:leading-[4rem] my-4">
                                    How you can contribute to caring for our
                                    kids
                                </h1>
                                <ol className="list-decimal my-4 text-sm sm:text-base space-y-4">
                                    <li>
                                        <span className="font-bold">
                                            Donate:
                                        </span>
                                        <span>
                                            Your financial contributions are
                                            invaluable in providing essential
                                            resources, such as food, clothing,
                                            educational materials, and medical
                                            supplies. Even a small donation can
                                            make a significant difference in the
                                            lives of our kids.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Volunteer:
                                        </span>
                                        <span>
                                            {' '}
                                            Offer your time and skills to
                                            support our programs and activities.
                                            Whether it's tutoring, mentoring,
                                            organizing events, or providing
                                            administrative assistance, your
                                            volunteer efforts can have a
                                            profound impact on our kids' lives.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Spread Awareness:{' '}
                                        </span>
                                        <span>
                                            Help raise awareness about our
                                            organization and the issues facing
                                            our kids. Share our mission and
                                            stories on social media, participate
                                            in fundraising events, or organize
                                            awareness campaigns in your
                                            community.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={ContributeImg}
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="ml-4 xl:ml-12 ">
                            <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem]">
                                How we use your donation
                            </h1>
                        </div>

                        <div className="">
                            <p className="text-sm sm:text-base">
                                Your donation is a lifeline for our
                                organization, fueling our mission to provide
                                essential care and support to children in need.
                                With your generosity, we ensure that every
                                dollar is maximized to make a tangible
                                difference in the lives of these children. A
                                significant portion of your donation goes
                                directly towards providing vital resources such
                                as education, healthcare, nutrition, and
                                shelter, addressing their immediate needs and
                                fostering their holistic development.
                            </p>
                        </div>
                        <div className="">
                            <p className="text-sm sm:text-base">
                                Additionally, your support enables us to
                                strengthen our programs, enhance our operational
                                capabilities, and maintain transparency and
                                accountability in all our endeavors. We
                                prioritize efficient resource allocation,
                                ensuring that your contribution is utilized
                                effectively to create a lasting impact.
                                Together, we are building a brighter future for
                                these children, empowering them with the tools
                                and opportunities they need to thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contribute;
