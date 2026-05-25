import { useEffect } from "react";
import "./styles/TechStack.css";

interface Skill {
  name: string;
  level: number;
  img?: string;
  emoji?: string;
}

interface Category {
  category: string;
  color: string;
  shadow: string;
  skills: Skill[];
}

const techData: Category[] = [
  {
    category: "Programming",
    color: "#5eead4",
    shadow: "rgba(94,234,212,0.25)",
    skills: [
      { name: "Python",      level: 90, emoji: "🐍" },
      { name: "JavaScript",  level: 80, img: "/images/javascript.webp" },
      { name: "TypeScript",  level: 75, img: "/images/typescript.webp" },
      { name: "C",           level: 65, emoji: "⚙️" },
      { name: "Bash / Shell",level: 72, emoji: ">" },
    ],
  },
  {
    category: "Security & CTI",
    color: "#f43f5e",
    shadow: "rgba(244,63,94,0.25)",
    skills: [
      { name: "Metasploit",  level: 82, emoji: "💀" },
      { name: "Hydra",       level: 78, emoji: "🔑" },
      { name: "Kali Linux",  level: 88, emoji: "🐉" },
      { name: "Wireshark",   level: 72, emoji: "🦈" },
      { name: "Recon-ng",    level: 70, emoji: "🔍" },
    ],
  },
  {
    category: "Cloud & Systems",
    color: "#a78bfa",
    shadow: "rgba(167,139,250,0.25)",
    skills: [
      { name: "AWS EC2",   level: 75, emoji: "☁️" },
      { name: "Lambda",    level: 70, emoji: "λ" },
      { name: "IAM",       level: 72, emoji: "🔐" },
      { name: "VMware",    level: 78, emoji: "🖥️" },
      { name: "Linux",     level: 85, emoji: "🐧" },
    ],
  },
  {
    category: "Dev & Frameworks",
    color: "#fb923c",
    shadow: "rgba(251,146,60,0.25)",
    skills: [
      { name: "React",    level: 80, img: "/images/react2.webp" },
      { name: "Next.js",  level: 75, img: "/images/next2.webp" },
      { name: "Node.js",  level: 78, img: "/images/node2.webp" },
      { name: "MongoDB",  level: 72, img: "/images/mongo.webp" },
      { name: "OpenCV",   level: 68, emoji: "👁️" },
    ],
  },
];

const TechStack = () => {
  useEffect(() => {
    // Animate bars after mount
    const timer = setTimeout(() => {
      const bars = document.querySelectorAll<HTMLElement>(".ts-bar-fill");
      bars.forEach((bar) => {
        const level = bar.dataset.level ?? "0";
        bar.style.width = `${level}%`;
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="techstack" id="skills">
      <div className="ts-container">
        <div className="ts-header">
          <h2>
            Tech <span>Stack</span>
          </h2>
          <p className="ts-subtitle">Tools &amp; technologies I work with</p>
        </div>

        <div className="ts-grid">
          {techData.map((cat, ci) => (
            <div
              className="ts-card"
              key={ci}
              style={
                {
                  "--cat-color": cat.color,
                  "--cat-shadow": cat.shadow,
                } as React.CSSProperties
              }
            >
              <div className="ts-card-header">
                <div className="ts-card-dot" />
                <h3>{cat.category}</h3>
              </div>

              <div className="ts-skills">
                {cat.skills.map((skill, si) => (
                  <div className="ts-skill" key={si}>
                    <div className="ts-skill-info">
                      {skill.img ? (
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="ts-skill-img"
                        />
                      ) : skill.emoji ? (
                        <span className="ts-skill-emoji">{skill.emoji}</span>
                      ) : null}
                      <span className="ts-skill-name">{skill.name}</span>
                      <span className="ts-skill-level">{skill.level}%</span>
                    </div>
                    <div className="ts-bar">
                      <div
                        className="ts-bar-fill"
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
