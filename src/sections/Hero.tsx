

const Hero = () => {
    return (
        <section className="text-gray-600 body-font my-8">
            <div className="flex px-5 lg:flex-row flex-col-reverse items-center w-full">
                <div className="lg:flex-grow lg:w-1/2 w-full mt-16 lg:mt-0 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-white">Hi, my name <br />is
                        <span className='text-accent font-semibold'> Sanjana.</span>
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 text-white text-xl leading-relaxed">I'm a&nbsp;
                        <span className='text-accent font-semibold'>Frontend Web Developer </span>
                        and&nbsp;
                        <span className='text-accent font-semibold'>UI/UX Designer </span>
                        based in Mangaluru, Karnataka.</p>
                    
                </div>



                <div className="lg:max-w-lg lg:w-full sm:w-3/4 w-full relative mb-40 lg:mb-0">
                    <div className="w-3/4 h-3/4 absolute inset-0 mx-auto flex justify-center items-center animate-upDown1">
                        <img src="/border.svg" className="" alt="Border" />
                    </div>
                    <div className="w-1/2 h-1/2 absolute inset-0 mx-auto flex justify-center items-center animate-upDown2">
                        <img src="/profile-pic.webp" className="object-cover overflow-hidden" alt="Profile Pic" />
                    </div>
                </div>



            </div>

            <div className="lg:flex flex-col justify-center lg:items-start items-center lg:ml-36 hidden mt-16">
                <div className='flex flex-col justify-center items-center'>

                
                        <p className='tracking-widest text-accent opacity-75 mb-8 animate-jump'>
                            
                                {/* <span className='animation-delay-0'>S</span>
                                <span className='animation-delay-300'>C</span>
                                <span className='animation-delay-500'>R</span>
                                <span className='animation-delay-700'>O</span>
                                <span className='animation-delay-900'>L</span>
                                <span className='animation-delay-1100'>L</span> */}
                                SCROLL
                            
                        </p>
                        <div className="h-24 lg:h-64 w-0.5 bg-gradient-to-b from-white via-accent to-primary"></div>
                    </div>
                    </div>
        </section>
    )
}

export default Hero