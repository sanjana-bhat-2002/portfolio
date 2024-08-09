import React from 'react'

const Projects = () => {
    return (
        <section className="my-16">
            <div className="py-4 px-2 max-w-screen-xl sm:py-4 lg:px-6">
                <h1 className="title-font sm:text-6xl text-6xl mb-2 font-medium text-white">
                    <span className='text-accent font-semibold'> My </span>
                    Work.
                    <br className="hidden lg:inline-block" />
                </h1>
                <div className='w-24 h-1 bg-gray-500 mb-8'></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                    <div className="card-wrapper group overflow-hidden px-4 py-4 flex-grow col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col rounded-md bg-clip-padding ">
                
                        {/* <div className="card-content inset-0 bg-transparent flex items-center justify-center"></div> */}
                        <h3 className="z-10 text-2xl font-medium text-white p-4 xs:text-xl md:text-3xl">UI/UX Design Intern  - Fade Media</h3>
                        <h5 className="z-10 text-xl font-medium text-white px-4 xs:text-xl md:text-3xl"> - Fade Media</h5>

                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">

                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
                        </a>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">

                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
                            </a>
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">

                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">

                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects