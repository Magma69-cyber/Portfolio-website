import { FaAws, FaMicrosoft, FaCertificate } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>Certifications</h2>
        <p className="certifications-summary">
          Building a strong security and cloud foundation with Cisco, Microsoft,
          EC-Council, and AWS training. These certifications support my hands-on
          lab experience and cloud internship work.
        </p>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="cert-icon aws-bg">
              <FaAws />
            </div>
            <div>
              <h4>AWS Cloud Practitioner</h4>
              <p>Preparation in core AWS services, security, and architecture.</p>
            </div>
          </div>
          <div className="certification-card">
            <div className="cert-icon cisco-bg">
              <SiCisco />
            </div>
            <div>
              <h4>Cisco Networking</h4>
              <p>Foundational networking and security concepts from Cisco labs.</p>
            </div>
          </div>
          <div className="certification-card">
            <div className="cert-icon microsoft-bg">
              <FaMicrosoft />
            </div>
            <div>
              <h4>Microsoft Security</h4>
              <p>Modern security principles, cloud identity, and device protection.</p>
            </div>
          </div>
          <div className="certification-card">
            <div className="cert-icon ecc-bg">
              <FaCertificate />
            </div>
            <div>
              <h4>EC-Council</h4>
              <p>Ethical hacking and penetration testing frameworks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
