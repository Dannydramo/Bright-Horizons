import React from 'react';

const Hero = () => {
    return (
        <section className="bg-[url(./images/hero_bg.png)] bg-cover bg-no-repeat h-[60vh] md:h-[90vh] bg-center mt-[4.5rem] relative">
            <div className="w-[95%] lg:w-[90%] mx-auto">
                <div className="pt-[7rem]">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl md:w-[80%] lg:w-[70%] xl:w-[50%] font-bold lg:leading-[4rem]">
                        Inclusive care for children with special needs
                    </h1>
                    <div className="flex space-x-4 my-8 items-center">
                        <button className="bg-white px-4 py-2 rounded-sm text-base md:text-lg">
                            What we do
                        </button>
                        <div className="flex items-center space-x-2 text-white"></div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block absolute bottom-8 w-full">
                <div className="w-[95%] lg:w-[90%] mx-auto flex justify-between items-center space-x-4 text-white text-base md:text-lg">
                    <p>230 children under our care</p>
                    <hr className="text-white bg-white sm:w-[30%] md:w-[40%] lg:w-[50%] xl:w-[65%]" />
                    <p>56 donations collected</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
