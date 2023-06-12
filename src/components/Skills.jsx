import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  return (
    <>
      {skills.map(({ title, id, percentage }) => {
        return (

          <div className="progress_box" key={id}>
            <div className="progress_circle">
                <CircularProgressbar strokeWidth={5} text={`${percentage}%`} value={percentage} />
            </div>
            <h3 className="skills_title">
                {title} 
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
