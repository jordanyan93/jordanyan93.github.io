import React from 'react';

function About() {
    return (
        <div className="flex items-center justify-center flex-col text-left pt-20 mt-40 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md: mb-3 font-bold">Jordan Yan</h1>
            <p className="text-base md: text-xl mb-3 font-medium">CS Student & (Trying) Software Engineer</p>
            <p className="text-md max-w-xl mb-6 font-bold">
                Hello! I am currently a student at York University studying Computer Science. 
                This website serves the purpose to express myself 
                in addition to learning techinical skills such as React, Vite and Tailwind CSS. <br />
            </p>
            <p className="text-md max-w-xl mb-6 font-bold">
                When I'm not doing work, I enjoy playing video games and sports.
                My main passion is ice hockey because I simply love to play and watch this super fast sport.
            </p>
        </div>
    )
}

export default About;