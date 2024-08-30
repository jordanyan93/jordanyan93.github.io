import React from 'react';
import socials from '../data/socials';
import SocialItem from './SocialItem';

function Footer() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center" >
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-5 w-25">
                    {socials.map(social => (
                        <SocialItem 
                            key={social.id}
                            imgUrl={social.imgUrl}
                            link={social.link}
                        />
                    ))}
                </div>
            </div>

            <div className="py-5 text-center">
                <p className="text-sm mt-2 opacity-50">
                    &copy; {new Date().getFullYear()} Jordan Yan.
                </p>
            </div>
        </div>
    )
}

export default Footer;