import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  python,
  django,
  aws,
  javascript,
  typescript,
  reactjs,
  nodejs,
  html,
  css,
  tailwind,
  postgresql,
  git,
  docker,
  java,
  lambda,
  mysql,
  fastapi,
  flask,
  nextjs,
  angular,
  flutter,
  jenkins,
  kubernetes,
  mongodb,
  go,
} from "../assets";


const TechIcon = ({ icon, name, delay = 0 }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.5)}
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex flex-col items-center justify-center p-2 sm:p-4 bg-[#eaeaec] rounded-xl hover:bg-platinumLight transition-all duration-300 cursor-pointer group shadow-card"
  >
    <img
      src={icon}
      alt={name}
      className="w-8 h-8 sm:w-12 sm:h-12 object-contain mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
    />
    <span className="text-jetLight text-[10px] xs:text-xs font-medium text-center leading-tight">{name}</span>
  </motion.div>
);

const SkillSection = ({ title, techs, delay = 0, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.5)}
    className="bg-[#eaeaec] rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-all duration-300"
  >
    <h3 className="text-jetLight text-base sm:text-xl font-bold mb-2 sm:mb-3 font-poppins">
      {title}
    </h3>
    {description && (
      <p className="text-taupe text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{description}</p>
    )}
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 gap-2 sm:gap-3">
      {techs.map((tech, idx) => (
        <TechIcon
          key={idx}
          icon={tech.icon}
          name={tech.name}
          delay={delay + idx * 0.05}
        />
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const backendTechs = [
    { icon: python, name: "Python" },
    { icon: django, name: "Django" },
    { icon: fastapi, name: "FastAPI" },
    { icon: flask, name: "Flask" },
    { icon: nodejs, name: "Node.js" },
    { icon: java, name: "Java / Spring Boot" },
    { icon: go, name: "Go" },
  ];

  const frontendTechs = [
    { icon: reactjs, name: "React" },
    { icon: nextjs, name: "Next.js" },
    { icon: typescript, name: "TypeScript" },
    { icon: html, name: "HTML5" },
    { icon: css, name: "CSS3" },
    { icon: tailwind, name: "Tailwind" },
    { icon: angular, name: "Angular" },
    { icon: flutter, name: "Flutter" },
  ];

  const devOpsTechs = [
    { icon: aws, name: "AWS" },
    { icon: docker, name: "Docker" },
    { icon: kubernetes, name: "Kubernetes" },
    { icon: lambda, name: "Serverless" },
    { icon: git, name: "Git" },
    { icon: jenkins, name: "Jenkins" },
  ];

  const databaseTechs = [
    { icon: postgresql, name: "PostgreSQL" },
    { icon: mysql, name: "MySQL" },
    { icon: mongodb, name: "MongoDB" },
  ];

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 sm:mt-8 space-y-5 sm:space-y-7 max-w-4xl"
      >
        <motion.p 
          variants={fadeIn("", "", 0.2, 0.8)}
          className="text-taupe text-[16px] sm:text-[18px] md:text-[19px] leading-[28px] sm:leading-[32px] md:leading-[34px] font-poppins font-normal tracking-wide"
        >
          I&apos;ve been in the software development for over 8 years, and I&apos;ve got some serious skills up my sleeve. 
          When it comes to building systems, I&apos;ve got Python, Django, Django REST Framework, Flask, and FastAPI in my toolkit. They help me 
          create scalable and maintainable software solutions.
        </motion.p>

        <motion.p 
          variants={fadeIn("", "", 0.3, 0.8)}
          className="text-taupe text-[16px] sm:text-[18px] md:text-[19px] leading-[28px] sm:leading-[32px] md:leading-[34px] font-poppins font-normal tracking-wide"
        >
          React.js and Next.js are my go-to when it comes to crafting those snazzy, responsive components that work like a 
          charm on any device. I&apos;m a Material UI maestro, making sure things look good and work smoothly. When it comes 
          to JavaScript, I&apos;m fluent in its various flavors: React, and Node.js With these tools, I can whip up 
          dynamic and interactive web applications.
        </motion.p>

        <motion.p 
          variants={fadeIn("", "", 0.4, 0.8)}
          className="text-taupe text-[16px] sm:text-[18px] md:text-[19px] leading-[28px] sm:leading-[32px] md:leading-[34px] font-poppins font-normal tracking-wide"
        >
          I&apos;ve got a whole arsenal of DevOps tools, like AWS (EBS, ECS, and EC2), along with Docker and Kubernetes. And monitoring? 
          I&apos;ve got my eyes on things with New Relic, Sentry, Kibana, AWS CloudWatch, and so on... Gotta keep those apps in top shape!
        </motion.p>

        <motion.p 
          variants={fadeIn("", "", 0.5, 0.8)}
          className="text-taupe text-[16px] sm:text-[18px] md:text-[19px] leading-[28px] sm:leading-[32px] md:leading-[34px] font-poppins font-normal tracking-wide"
        >
          When it comes to databases, I&apos;ve worked with Postgres, MySQL, DynamoDB, MongoDB, and even Cassandra. I&apos;m also familiar with Redis and Elasticsearch.
        </motion.p>

        <motion.p 
          variants={fadeIn("", "", 0.5, 0.8)}
          className="text-taupe text-[16px] sm:text-[18px] md:text-[19px] leading-[28px] sm:leading-[32px] md:leading-[34px] font-poppins font-normal tracking-wide"
        >
          But here&apos;s the thing, I&apos;m not just a tech wizard. I love collaborating and creating a supportive work environment where innovation can thrive. Learning new stuff? It&apos;s like a never-ending adventure.
        </motion.p>
      </motion.div>

      
      

      <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <SkillSection
          title="Backend Development"
          techs={backendTechs}
          delay={0.2}
          description="Building robust server-side applications with Python, Django, and Node.js"
        />
        <SkillSection
          title="Frontend Development"
          techs={frontendTechs}
          delay={0.3}
          description="Creating responsive, interactive user interfaces with modern frameworks"
        />
        <SkillSection
          title="DevOps & Cloud"
          techs={devOpsTechs}
          delay={0.4}
          description="Deploying and monitoring applications on AWS with Docker and CI/CD"
        />
        <SkillSection
          title="Databases"
          techs={databaseTechs}
          delay={0.5}
          description="Working with SQL and NoSQL databases for scalable data solutions"
        />
      </div>

    </div>
  );
};

export default SectionWrapper(About, "about");
