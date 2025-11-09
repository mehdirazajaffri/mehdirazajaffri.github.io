import { motion } from 'framer-motion';
import { backendProjects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackendProjectCard = ({ id, name, shortDescription, tags, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="w-full p-4 rounded-2xl bg-gradient-to-br from-jetLight to-eerieBlack 
        card-shadow hover:shadow-2xl transition-all duration-300 
        cursor-pointer group"
      onClick={() => navigate(`/project/${id}`)}
    >
      <div className="flex flex-col gap-3">
        <h3
          className="font-bold text-[24px] text-timberWolf uppercase 
          font-beckman group-hover:text-french transition-colors duration-300"
        >
          {name}
        </h3>

        <p className="text-silver text-[14px] leading-[22px] font-poppins">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className={`text-[12px] px-3 py-1 rounded-full font-semibold 
                ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-2 mt-2 text-french group-hover:text-timberWolf 
          transition-colors duration-300"
        >
          <span className="text-[14px] font-semibold">View Details</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const BackendProjects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Few</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Backend Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Enterprise-grade backend systems and infrastructure projects
          showcasing scalable architecture, cloud services, and advanced
          technical solutions for complex business challenges.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backendProjects.map((project, index) => (
            <BackendProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

BackendProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default SectionWrapper(BackendProjects, 'backend-projects');
