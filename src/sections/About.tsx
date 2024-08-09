import React from 'react'

const About = () => {
    return (
        <section className="text-gray-600 body-font my-8">
            <div className="flex px-5 py-12 lg:flex-row flex-col-reverse items-center w-full">
                <div className="lg:flex-grow lg:w-1/2 w-full mt-16 lg:mt-0 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-6xl text-6xl mb-2 font-medium text-white">
                        <span className='text-accent font-semibold'> About </span>
                        Me.
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <div className='w-24 h-1 bg-gray-500 mb-4'></div>
                    <p className="mb-8 text-white text-xl leading-relaxed lg:pr-72 2xl:pr-96    ">As an artistic person, I have a deep appreciation for all forms of art, which ultimately made me interested
                        in the field of frontend development. I aspire to create beautiful and efficient user interfaces, and I am
                        constantly learning more about how to improve my productivity and skills.</p>

                </div>

            </div>


        </section>
    )
}

export default About