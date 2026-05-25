import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TRUPTI RANJAN
              <br />
              <span>SINGH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cyber Security Engineer</div>
              <div className="landing-h2-2" style={{ position: "absolute", top: 0 }}>Penetration Tester</div>
              <div className="landing-h2-3" style={{ position: "absolute", top: 0 }}>AI Engineer</div>
              <div className="landing-h2-4" style={{ position: "absolute", top: 0 }}>Software Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info-1">Cyber Security Engineer</div>
              <div className="landing-h2-info-2" style={{ position: "absolute", top: 0 }}>Penetration Tester</div>
              <div className="landing-h2-info-3" style={{ position: "absolute", top: 0 }}>AI Engineer</div>
              <div className="landing-h2-info-4" style={{ position: "absolute", top: 0 }}>Software Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
