import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/Mehdi_Raza_Software_Engineer.pdf';
    link.download = 'Mehdi_Raza_Software_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Where I&apos;ve worked so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: 'linear-gradient(135deg, #f5f5f7 0%, #eaeaec 100%)',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.15) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 10px 10px -5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{
              background: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[50%] h-[50%] object-contain filter drop-shadow-lg"
                />
              </div>
            }
          >
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="text-center">
                <h3 className="text-jetLight text-[22px] sm:text-[26px] font-bold font-beckman tracking-[1px] mb-2">
                  Download My CV
                </h3>
                <p className="text-taupe text-[14px] sm:text-[16px] font-semibold font-overcameBold">
                  
                </p>
              </div>
              <motion.button
                className="live-demo flex justify-center items-center gap-3
                  sm:text-[18px] text-[16px] text-timberWolf 
                  font-bold font-beckman py-4 px-6
                  whitespace-nowrap sm:w-[200px] sm:h-[60px] 
                  w-[180px] h-[54px] rounded-[12px] bg-jetLight 
                  hover:bg-battleGray 
                  hover:text-eerieBlack transition-all duration-[0.3s] 
                  ease-in-out relative overflow-hidden group
                  disabled:opacity-70 disabled:cursor-not-allowed
                  shadow-lg hover:shadow-xl"
                onClick={handleDownload}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={isDownloading}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2 z-10 relative">
                  {isDownloading ? 'Downloading' : 'Download'}
                  <motion.img
                    src={isHovered ? downloadHover : download}
                    alt="download"
                    className="sm:w-[28px] sm:h-[28px] 
                    w-[24px] h-[24px] object-contain transition-transform duration-300"
                    animate={
                      isHovered
                        ? { rotate: [0, -10, 10, -10, 0], y: [0, -2, 0] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  />
                </span>
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-battleGray/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  />
                )}
              </motion.button>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
