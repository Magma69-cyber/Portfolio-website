import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Internship Trainee</h4>
                <h5>Cloud Practice</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Created Lambda, EC2, IAM, ECS, Fargate, and CloudFormation
              resources with detailed documentation. Built secure cloud
              workflows while strengthening AWS foundational skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Practice</h4>
                <h5>Hands-on Labs & Threat Analysis</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Practiced recon-ng, Hydra, CrackMapExec, Metasploit, DPI concepts,
              and packet analysis across HackTheBox and TryHackMe labs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Troubleshooting</h4>
                <h5>Windows / Linux / VMware</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Resolved Windows app uninstall issues, recovered SIM status, and
              optimized KDE Plasma shortcuts for faster productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
