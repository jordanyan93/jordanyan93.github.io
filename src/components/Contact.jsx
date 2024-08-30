import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className="my-10">
            <div className="flex items-center justify-center my-5">
                <div className="text-2xl">
                    <h3>Email me at <span className="text-[#3586ff] font-bold">jordany7493@gmail.com</span></h3>
                </div>
            </div>

            <div className="flex flex-col mb-10 mx-auto">
                <div className="flex justify-center items-center">
                    <form 
                        action="https://getform.io/f/bgdyopea"
                        method="POST"
                        className="flex flex-col w-full md:w-7/12"
                    >
                        <Title>Contact</Title>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <textarea
                            type="text"
                            name="message"
                            placeholder="Message"
                            rows="10"
                            className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white
                            bg-gradient-to-r from-teal-500 to-blue-500 drop-shadow-md hover:from-blue-500 hover:to-teal-500"
                        >
                            Send Something To Me
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;