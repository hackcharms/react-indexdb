import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

import { styles } from "../../constants/styles";
import SectionWrapper from "../HigherOrder/SectionWrapper";
import { experiences } from "../../constants";

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[number];
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#7d7f63",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #7d7f63" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex size-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="size-3/5 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
function Experience() {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.heroSubText}>What I have Done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "experience");
