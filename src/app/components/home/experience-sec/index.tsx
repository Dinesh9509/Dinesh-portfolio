import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2023+",
            title: "Sr. UI/UX Designer",
            company: "Dotsquares Technologies",
            type: "Fulltime",
            description: "Designing intuitive web and mobile experiences using Figma, AI-powered workflows, and custom design systems. Working closely with developers and product teams to deliver scalable, user-focused solutions while contributing to frontend development with HTML, CSS, Tailwind CSS, React, and Next.js."
        },
        {
            year: "2021",
            title: "UI/UX Designer",
            company: "Ambient Infotech",
            type: "Fulltime",
            description: "Designed user-friendly interfaces for multiple web and mobile applications, from wireframes to high-fidelity UI designs. Created interactive prototypes in Figma, collaborated with developers for accurate implementation, and continuously refined user experiences based on usability testing and user feedback to deliver intuitive and engaging digital products."
        },
        {
            year: "2020",
            title: "Web Designer",
            company: "Shubhan Software",
            type: "Fulltime",
            description: "Designed responsive websites and high-converting landing pages with a strong focus on usability and visual appeal. Created clean UI layouts, graphics, and visual assets while collaborating closely with development teams to ensure accurate frontend implementation and a seamless user experience across devices."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;