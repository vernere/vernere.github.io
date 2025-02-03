import about from '../assets/images/about.jpg'

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span></span>
        </h2>
      </div>
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>profile</h3>
          <p>
          Dynamic and highly motivated individual with a strong background in IT. 
          Five years of experience in a very demanding and challenging work environment. 
          Adept in leading groups, thriving in stressful and demanding situations.
          </p>
          <p>
          In my free time, I enjoy software development, video game development, and physical training, 
          which help me stay focused, creative, and balanced. I am always eager to explore new interests and develop new skills outside of work.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>

  );
};
export default About;
