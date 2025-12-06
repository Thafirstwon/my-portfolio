import React from 'react'

const Content = () => {

      const sections = [
      {
            title: "Bio",
            description:
            "Jinad Stefan is a Lagos-based software developer with over 2 years of experience building clean, efficient, and intuitive digital products. Often taking the lead, he guides projects from concept to deployment, turning complex ideas into reliable, user-centered solutions.His work spans industries from tech startups to creative agencies, with standout projects in fintech, e-commerce, and productivity tools. Whether developing solo or collaborating with cross-functional teams, Jinad’s focus is always the same—writing thoughtful code that solves real problems and feels good to use.From front-end polish to back-end logic, this is what he does—and he wouldn’t trade it for the world.",
      },
];
  return (
    <section className='text-white overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#0d0e0f] px-[30px] sm:px-6 md:px-3'>

      <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white'></div>

      <h2 className='text-4xl sm:text-4xl md:text-6xl font-serif font-medium tracking-tight mt-8 mb-12 sm:mb-20 md:text-left ml-[-13px] sm:ml-[10px]'>
            CONTENT
      </h2>

      {sections.map((section, index) => (
            <div key={index} className='mb-12 sm:mb-16 pb-2 collab-nudge-left'>

                  <div className='border-t border-white mb-4 sm:mb-6'></div>

                  <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-44 collab-nudge-left'>
                        <h3
                        className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl  font-serif w-full md:w-5/7 md:ml-2'>
                              {section.title}
                        </h3>

                        <p className='text-base sm:text-lg md:text-[27.5px] md:w-3/2 leading-relaxed font-suisse'>
                        {section.description}
                        </p>
                  </div>
            </div>
      ))}
      
    </section>
  )
}

export default Content
