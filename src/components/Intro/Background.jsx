import React from 'react';
import './Background.css';

function Background() {
    return (
        <div>
            <section>
                <div className="flex flex-col justify-center items-center min-h-screen">
                    <div className="content">
                        <h2>Welcome</h2>
                        <h2>Welcome</h2>
                    </div>
                    <div className="introduction">
                        <h2 className="text-4xl md:text-7xl mb-1 md: mt-40 mb-3 font-bold">Hello I'm Jordan Yan</h2>
                        <h2 className="text-base text-center md: text-xl mb-3 font-medium">CS Student & (Trying) Software Engineer</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Background