import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box glass-panel">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Naan Mudhalvan IBM Hackathon</h4>
                <h5>Habit Tracker Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              🥇 Winner: Developed a productivity-focused habit tracking application to improve user discipline and consistency. Designed an interactive dashboard for tracking streaks and implemented reminder-based engagement features.
            </p>
          </div>
          <div className="career-info-box glass-panel">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Naan Mudhalvan Engage IoT Hackathon</h4>
                <h5>Pothole Detector Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              🥇 Winner: Built an IoT-based system for real-time pothole detection. Integrated sensor-based monitoring for road condition analysis and enabled data transmission for infrastructure monitoring. Appreciated for social impact and smart city application.
            </p>
          </div>
          <div className="career-info-box glass-panel">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science & Engineering</h4>
                <h5>Currently Studying, Tamil Nadu, India</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Pursuing my Bachelor's degree with a focus on problem-solving, cybersecurity, and full-stack development. Deepening my knowledge in systems, networking, and software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
