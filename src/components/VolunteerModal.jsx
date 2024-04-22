import React, { useState } from 'react';

const VolunteerModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[100]">
            <div
                onClick={onClose}
                className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-[100]"
            ></div>
            <div className="bg-white w-[90%] mx-auto md:w-[70%] relative lg:w-[60%] p-8 rounded-lg shadow-md z-[10000]">
                <span>
                    <svg
                        onClick={onClose}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute top-4 right-4 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </span>
                <h2 className="text-2xl font-bold mb-4">Join as a volunteer</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {' '}
                        <div className="mb-4">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        firstName: e.target.value,
                                    });
                                }}
                                className="mt-1 block w-full sm:text-sm py-2 outline-none border border-black border-b-2 border-x-0 border-t-0"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        lastName: e.target.value,
                                    });
                                }}
                                className="mt-1 block w-full sm:text-sm py-2 outline-none border border-black border-b-2 border-x-0 border-t-0"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                });
                            }}
                            className="mt-1 block w-full sm:text-sm py-2 outline-none border border-black border-b-2 border-x-0 border-t-0"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                });
                            }}
                            rows="4"
                            className="mt-1 block w-full sm:text-sm py-2 outline-none border-2 border-black "
                            required
                        ></textarea>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="bg-[#F2C94C] text-[#1D2130] px-6 py-3 rounded-md"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VolunteerModal;
