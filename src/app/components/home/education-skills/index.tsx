"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-softGray pb-4 mb-9 xl:mb-16">
              <h2 className="text-4xl font-bold">
                Education & <span className="text-[#FE4300]">Skills</span>
              </h2>
              <p className="text-xl text-[#FE4300] font-semibold">( 03 )</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
              
              {/* Left Column */}
              <div className="w-full lg:max-w-md flex flex-col gap-16">
                
                {/* Education Section */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#FE4300] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>
                  
                  <div className="flex flex-col gap-0 xl:gap-8 relative border-l border-softGray ml-5 pl-8">
                    {educationData?.education?.map((value: any, index: any) => {
                      return (
                        <div key={index} className="flex flex-col gap-2 relative pb-8 last:pb-0">
                          <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FE4300]"></div>
                          </div>
                          <h5 className="font-bold text-lg">{value?.title}</h5>
                          {value?.subtitle && (
                            <p className="text-gray-500 font-medium">{value?.subtitle}</p>
                          )}
                          <p className="font-normal text-gray-600 mt-2">{value?.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* UX & Design Skills */}
                <div className="border-t border-softGray pt-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#FE4300] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">UX & Design Skills</h3>
                  </div>
                  
                  <div className="flex flex-col gap-4 pl-[50px]">
                    {educationData?.uxDesignSkills?.map((skill: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="#FE4300"/>
                        </svg>
                        <p className="text-black font-medium">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Right Column */}
              <div className="w-full flex-1 flex flex-col gap-12">
                
                {/* Design Tools */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#FE4300] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Design Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 xl:gap-7 w-full">
                    {educationData?.designTools?.map((value: any, index: any) => (
                      <SkillCard key={index} value={value} />
                    ))}
                  </div>
                </div>

                {/* Frontend Skills */}
                <div className="border-t border-softGray pt-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#FE4300] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Frontend Skills</h3>
                  </div>
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 xl:gap-7 w-full">
                    {educationData?.frontendSkills?.map((value: any, index: any) => (
                      <SkillCard key={index} value={value} />
                    ))}
                  </div>
                </div>

                {/* Development Tools */}
                <div className="border-t border-softGray pt-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#FE4300] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Development Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-5 xl:gap-7 w-full">
                    {educationData?.developmentTools?.map((value: any, index: any) => (
                      <SkillCard key={index} value={value} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ value }: { value: any }) => (
  <div className="p-4 xl:p-6 border border-softGray rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col gap-2 sm:gap-2 items-center justify-between">
    <div className="flex flex-col items-center gap-4">
      {value?.icon && (
        <div className="h-[60px] flex items-center justify-center">
          <Image
            src={getImgPath(value?.icon)}
            alt={value?.name || "icon"}
            width={60}
            height={60}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
      <p className="text-black font-semibold text-center text-sm">{value?.name}</p>
    </div>
    <div className="flex gap-1.5 mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="8"
          height="8"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="9"
            height="9"
            rx="4.5"
            fill={i < value?.rating ? "#FE4300" : "#E2E8F0"}
          />
        </svg>
      ))}
    </div>
  </div>
);

export default EducationSkills;
