import React from 'react';

function SocialItem({ imgUrl, link }) {
    return (
        <div className="mx-4">
            <a
                className="rounded-lg overflow-hidden mx-5"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <img
                className="h-16 md:h-16"
                src={imgUrl}
                alt="socials" 
            />
            </a>
        </div>
        
    )
}

export default SocialItem;