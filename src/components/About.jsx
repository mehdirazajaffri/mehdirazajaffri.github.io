import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-12xl leading-[30px]"
      >
          <span>
            I&apos;ve been in the software development for over 8 years, I&apos;ve got some serious skills up my sleeve. When it
            comes to building systems, I&apos;ve got Python,Django,Flask and FastAPI in my
            toolkit, and they&apos;re like the dynamic duo of web development.
            They help me create scalable and maintainable web apps that can
            handle anything you throw at them.
          </span>
          <span>
            But that&apos;s not all! React.js and next.js is my go-to when it comes to
            crafting those snazzy, responsive components that work like a charm
            on any device. I&apos;m a Material UI maestro, making sure things
            look good and work smoothly.
          </span>
          <span>
            When it comes to JavaScript, I&apos;m fluent in its various flavors:
            Angular, React, and Node. With these tools, I can whip up dynamic
            and interactive web apps.
          </span>
          <br/>
          <span>
            But wait, there&apos;s more! I&apos;ve got a whole arsenal of DevOps
            tools, like AWS EBS, ECS, and EC2, along with Docker. And
            monitoring? I&apos;ve got my eyes on things with Sentry, Kibana, AWS
            CloudWatch, and Rollbar. Gotta keep those apps in top shape!
          </span>
          <br/>
          <span>
            Oh, and let&apos;s not forget about databases. I&apos;ve worked with
            Postgres, MySQL, DynamoDB, MongoDB, and even Cassandra. We&apos;ve
            got options!
          </span>
          <br/>
          <span>
            But here&apos;s the thing: I&apos;m not just a tech wizard. I love
            collaborating and creating a supportive work environment where
            innovation can thrive. Learning new stuff? It&apos;s like a
            never-ending adventure that keeps me on my toes.
          </span>
          <br/>
          <span>
            So, if you&apos;re looking for a software sidekick who knows their
            stuff and can keep things cool and casual, I&apos;m your person.
            Let&apos;s make some software magic happen, shall we?
          </span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
