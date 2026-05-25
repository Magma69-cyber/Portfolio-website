import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Blog from "./Blog";
import setSplitText from "./utils/splitText";

import ErrorBoundary from "./ErrorBoundary";
const TechStack = lazy(() => import("./TechStack"));
const Certificates = lazy(() => import("./Certificates"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [showTechStack, setShowTechStack] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "skills") {
              setShowTechStack(true);
            }
            if (entry.target.id === "certificates") {
              setShowCertificates(true);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -150px 0px",
        threshold: 0.1,
      }
    );

    const skillsSection = document.getElementById("skills");
    const certificatesSection = document.getElementById("certificates");

    if (skillsSection) observer.observe(skillsSection);
    if (certificatesSection) observer.observe(certificatesSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <Career />
            <WhatIDo />
            {isDesktopView && showTechStack ? (
              <ErrorBoundary fallback={<div style={{ padding: 16, color: '#fff' }}>⚠️ Skills section failed to load</div>}>
                <Suspense fallback={<div>Loading skills...</div>}>
                  <TechStack />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <div id="skills" style={{ minHeight: "560px", width: "100%" }} />
            )}
            <Work />
            <Blog />
            {showCertificates ? (
              <Suspense fallback={<div>Loading certificates...</div>}>
                <Certificates />
              </Suspense>
            ) : (
              <div id="certificates" style={{ minHeight: "560px", width: "100%" }} />
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
