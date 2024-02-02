import React from 'react';

function SocialItem({ imgUrl, link }) {
    return (
        <div className>
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden mx-5"
        >
            <img
                src={imgUrl}
                alt="socials" 
                className="h-16 md:h-16"
            />
            </a>
        </div>
        
    )
}

export default SocialItem;