import React from 'react';

function About() {
    return (
        <div className="flex items-center justify-center flex-col text-left pt-20 mt-40 mb-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md: mb-3 font-bold">About Me</h1>
            <p className="text-base md: text-xl mb-3 font-medium">CS Student & (Trying) Software Engineer</p>
            <p className="text-md max-w-xl mb-6 font-bold">
                I am currently a student at York University studying Computer Science. 
                This website serves the purpose to express myself 
                in addition to learning techinical skills such as React, Vite and Tailwind CSS. <br />
            </p>
            <p className="text-md max-w-xl mb-10 font-bold">
                When I'm not doing work, I enjoy playing sports and video games.
                My main passion is ice hockey because I simply love to play and watch this super fast sport.
                Maybe you've noticed that there's a lot of Blue and White on the website so far? It's because I'm a huge Leafs fan!
            </p>
        </div>
    )
}

export default About;