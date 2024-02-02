import React from 'react';
import socials from '../data/socials';
import SocialItem from './SocialItem';

function Contact() {
    return (
        <div className="my-10">
            <div className="flex items-center justify-center my-5">
                <div className="text-2xl">
                    <h3>Email me at <span className="text-[#3586ff] font-bold">jordany7493@gmail.com</span></h3>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center" >
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-5 w-25">
                {socials.map(social => (
                    <SocialItem 
                        imgUrl={social.imgUrl}
                        link={social.link}
                    />
                ))}
            </div>
                

            </div>
        </div>
    )
}

export default Contact;