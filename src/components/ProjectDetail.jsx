import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { backendProjects } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

const FlowDiagram = ({ steps }) => {
  return (
    <div
      className="w-full mt-8 p-8 bg-gradient-to-br from-jetLight to-eerieBlack 
      rounded-2xl card-shadow"
    >
      <h3 className="text-[24px] font-bold text-white uppercase font-beckman mb-8">
        System Flow
      </h3>
      <div className="relative">
        {/* Desktop Flow - Horizontal */}
        <div className="hidden md:flex items-start justify-between gap-2 relative">
          {steps.map((stepItem, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative z-10"
            >
              {/* Step Circle */}
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-platinum to-battleGray 
                flex items-center justify-center mb-4 shadow-lg relative group flex-shrink-0"
              >
                <span className="text-eerieBlack font-bold text-[20px] z-10">
                  {index + 1}
                </span>
              </div>

              {/* Step Content */}
              <div className="w-full flex flex-col items-center">
                <h4
                  className="text-white font-bold text-[14px] mb-3 
                  text-center font-beckman uppercase tracking-wide"
                >
                  {stepItem.step}
                </h4>
                <div
                  className="bg-richBlack/80 rounded-lg p-4 w-full min-h-[120px] 
                  flex items-center justify-center border border-jet/50"
                >
                  <p
                    className="text-white text-[13px] text-center leading-[20px]
                    font-poppins"
                  >
                    {stepItem.description}
                  </p>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div
                  className="absolute top-8 left-full w-full max-w-[60px] 
                  flex items-center justify-center z-0"
                >
                  <div
                    className="w-full h-[2px] bg-battleGray 
                    relative"
                  >
                    <div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 
                      translate-x-1/2 w-0 h-0 border-l-[8px] border-l-battleGray 
                      border-t-[4px] border-t-transparent border-b-[4px] 
                      border-b-transparent"
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Flow - Vertical */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((stepItem, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              {/* Step Circle */}
              <div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-platinum to-battleGray 
                flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <span className="text-eerieBlack font-bold text-[18px]">
                  {index + 1}
                </span>
              </div>

              {/* Step Content */}
              <div className="flex-1 flex flex-col">
                <h4
                  className="text-white font-bold text-[14px] mb-2 
                  font-beckman uppercase tracking-wide"
                >
                  {stepItem.step}
                </h4>
                <div className="bg-richBlack/80 rounded-lg p-3 border border-jet/50">
                  <p
                    className="text-white text-[12px] leading-[18px] 
                    font-poppins"
                  >
                    {stepItem.description}
                  </p>
                </div>
              </div>

              {/* Vertical Arrow */}
              {index < steps.length - 1 && (
                <div
                  className="absolute left-7 top-14 w-[2px] h-6 bg-battleGray"
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FlowDiagram.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = backendProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[32px] font-bold text-timberWolf mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="px-6 py-3 bg-french text-eerieBlack rounded-lg 
              font-semibold hover:bg-battleGray transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className={`${styles.innerWidth} mx-auto px-4`}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element =
                  document.getElementById('projects') ||
                  document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }, 100);
            }}
            className="mb-8 flex items-center gap-2 text-timberWolf hover:text-french 
            transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-semibold">Back to Projects</span>
          </motion.button>

          <motion.div variants={textVariant()}>
            <h1 className={`${styles.sectionHeadTextLight} mb-4`}>
              {project.name}
            </h1>
          </motion.div>

          <motion.div variants={fadeIn('', '', 0.1, 1)} className="w-full mb-8">
            <div className="text-taupe text-[18px] leading-[30px] mb-6 space-y-6">
              {project.fullDescription.split('\n\n').map((section, idx) => {
                const trimmedSection = section.trim();

                // Check if it's a header (starts and ends with **)
                if (trimmedSection.match(/^\*\*.*\*\*$/)) {
                  const headerText = trimmedSection.replace(/\*\*/g, '');
                  return (
                    <h3
                      key={idx}
                      className="text-timberWolf font-bold text-[20px] 
                    uppercase font-beckman mt-6 mb-3"
                    >
                      {headerText}
                    </h3>
                  );
                }
                // Check if it contains bullet points
                else if (trimmedSection.includes('•')) {
                  const lines = trimmedSection.split('\n');
                  const bullets = lines.filter((line) =>
                    line.trim().startsWith('•')
                  );
                  return (
                    <ul key={idx} className="list-none space-y-2 ml-4">
                      {bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start">
                          <span className="text-french mr-3 mt-1">•</span>
                          <span className="flex-1">
                            {bullet.replace('•', '').trim()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                else {
                  return (
                    <p key={idx} className="mb-4">
                      {trimmedSection}
                    </p>
                  );
                }
              })}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-[14px] px-4 py-2 rounded-full font-semibold 
                  ${tag.color}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn('', '', 0.2, 1)}>
            <FlowDiagram steps={project.flowSteps} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
