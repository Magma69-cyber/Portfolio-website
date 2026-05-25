import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a B.Tech CSE student specializing in Cybersecurity & Cloud Computing.
          Currently training as an AWS internship trainee and preparing for the AWS
          Cloud Practitioner certification.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          My practical toolkit includes Hydra, hping3, recon-ng, CrackMapExec,
          and Metasploit. I also troubleshoot Windows, Linux, VMware, and KDE
          Plasma environments with hands-on problem solving.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          I enjoy turning technical investigations into clear security insights,
          guided learning notes, and reliable cloud automation workflows.
        </p>
      </div>
    </div>
  );
};

export default About;
