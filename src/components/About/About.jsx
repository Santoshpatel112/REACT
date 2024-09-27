import React from 'react'
import santoshphoto from './santoshphoto.jpg'


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                        width="300vw"
                        style={{borderRadius:"1vw"}}

                            // src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            src={santoshphoto} 

                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Frontend Developer is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600" style={{overflowX:"hidden", fontSize:"2.7vh"}}>
                           

"At the heart of every seamless digital experience is the dedication and creativity  developers. Our team of passionate professionals brings designs to life, ensuring that websites and applications are not only visually appealing but also intuitive and efficient. We take pride in crafting responsive, user-friendly interfaces that enhance the interaction between users and technology. With a commitment to innovation and detail, we continually strive to push the boundaries of frontend development, delivering solutions that meet both aesthetic and functional needs."

Feel free to adjust it based on your project's goals!
                        </p>
                        <p className="mt-4 text-gray-600">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}