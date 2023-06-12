import { FaArrowRight } from "react-icons/fa";
import profile from "../../assets/mo4.jpeg";
import { HashLink } from "react-router-hash-link";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid" id="home">
      <img src={profile} alt="" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Mohammed.</span><br/>
            Front-end Developer
          </h1>

          <p className="home_desc">
            I'm a syrian based front-end web developer focused on crafting clean
            code , I am passionate about building excellent software that
            improves the lives of those around me.
          </p>
          <HashLink to="#about" className="button">
            Mor About Me{" "}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </HashLink>
        </div>
      </div>
      <div className="color_block"></div>
    </section>
  );
};

export default Home;
