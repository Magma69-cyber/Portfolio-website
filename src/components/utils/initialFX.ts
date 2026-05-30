import SplitType from "split-type";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  lenis?.start();
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitType(
    ".landing-info h3, .landing-intro h2, .landing-intro h1",
    {
      types: "chars,lines",
      lineClass: "split-line",
    }
  );
  
  if (landingText.chars) {
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  const TextProps = { types: "chars,lines", lineClass: "split-h2" };

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const splitTexts1 = [
    new SplitType(".landing-h2-1", TextProps),
    new SplitType(".landing-h2-2", TextProps),
    new SplitType(".landing-h2-3", TextProps),
    new SplitType(".landing-h2-4", TextProps),
  ];
  const splitTexts2 = [
    new SplitType(".landing-h2-info-1", TextProps),
    new SplitType(".landing-h2-info-2", TextProps),
    new SplitType(".landing-h2-info-3", TextProps),
    new SplitType(".landing-h2-info-4", TextProps),
  ];

  LoopTextArray(splitTexts1);
  LoopTextArray(splitTexts2);
}

function LoopTextArray(Texts: SplitType[]) {
  const tl = gsap.timeline({ repeat: -1, delay: 1.0 });
  const delay = 4;
  const duration = 1.2;
  const stay = 2.8;

  Texts.forEach((text, i) => {
    if (!text.chars) return;
    tl.fromTo(
      text.chars,
      { opacity: 0, y: 80 },
      { opacity: 1, duration: duration, ease: "power3.inOut", y: 0, stagger: 0.05 },
      i * delay
    )
    .to(
      text.chars,
      { opacity: 0, duration: duration, y: -80, ease: "power3.inOut", stagger: 0.05 },
      i * delay + stay
    );
  });
}
