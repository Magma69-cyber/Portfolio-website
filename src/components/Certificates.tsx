import { useState } from "react";
import "./styles/Certificates.css";

const certificateItems = [
  {
    title: "AWS / Cloud Certificate",
    image: new URL("../assets/1777643494165.png", import.meta.url).href,
  },
  {
    title: "CIP Certificate",
    image: new URL("../assets/cip certificate.jpg", import.meta.url).href,
  },
  {
    title: "Cisco Cyber Threat Management Certificate",
    image: new URL("../assets/cisco cyber threat management certificate.jpg", import.meta.url).href,
  },
  {
    title: "Cisco Ethical Hacking Certificate",
    image: new URL("../assets/cisco ethical hacking certificate.jpg", import.meta.url).href,
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    image: new URL("../assets/cisco introduction to cybersecurity.jpg", import.meta.url).href,
  },
  {
    title: "Deloitte Certificate",
    image: new URL("../assets/deloitte certificate.png", import.meta.url).href,
  },
  {
    title: "EC-Council Certificate",
    image: new URL("../assets/ec council certificate.jpg", import.meta.url).href,
  },
  {
    title: "Forage Certificate",
    image: new URL("../assets/forage certificate.png", import.meta.url).href,
  },
  {
    title: "Generative AI Certificate",
    image: new URL("../assets/gen ai certificate.jpg", import.meta.url).href,
  },
  {
    title: "Introduction to Artificial Intelligence",
    image: new URL("../assets/introduction to artificial intelligence.jpg", import.meta.url).href,
  },
  {
    title: "Introduction to Modern AI",
    image: new URL("../assets/introduction to modern ai.jpg", import.meta.url).href,
  },
  {
    title: "Microsoft Cybersecurity Architect Certificate",
    image: new URL("../assets/Microsoft Cybersecurity Architect certification.png", import.meta.url).href,
  },
  {
    title: "Nxt Wave Gen AI Certificate",
    image: new URL("../assets/nxt wave gen ai certificate.jpg", import.meta.url).href,
  },
  {
    title: "React Certificate",
    image: new URL("../assets/react.svg", import.meta.url).href,
  },
  {
    title: "Simplilearn Kali Linux Basics Certificate",
    image: new URL("../assets/simplilearn introduction to kali linux basics.jpg", import.meta.url).href,
  },
  {
    title: "SQL Injection EC-Council Certificate",
    image: new URL("../assets/sql injection ec council certificate.jpg", import.meta.url).href,
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="certificates-section section-container" id="certificates">
      <div className="certificates-container">
        <div className="certificates-header">
          <div>
            <h2>Certificates</h2>
            <p>
              Showcasing 16 certificates in cloud, security, and systems
              troubleshooting. Tap any card to preview the full certificate.
            </p>
          </div>
          <span>{certificateItems.length} items</span>
        </div>

        <div className="certificates-grid">
          {certificateItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="certificate-card"
              onClick={() => setSelected(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="certificate-image"
              />
              <p>{item.title}</p>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="certificate-modal" onClick={() => setSelected(null)}>
          <div className="certificate-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="certificate-modal-close"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <img
              src={certificateItems[selected].image}
              alt={certificateItems[selected].title}
              className="certificate-modal-image"
            />
            <p>{certificateItems[selected].title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
