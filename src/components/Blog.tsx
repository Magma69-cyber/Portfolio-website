import "./styles/Blog.css";

const insights = [
  {
    title: "AI and Cloud Security",
    summary:
      "Exploring how AI-powered monitoring can strengthen AWS environments and surface anomalous behavior faster.",
  },
  {
    title: "Practical Troubleshooting",
    summary:
      "Step-by-step notes for solving Windows uninstall failures, Linux service issues, and KDE Plasma shortcut recovery.",
  },
  {
    title: "Security Labs to Notes",
    summary:
      "Turning HackTheBox and TryHackMe practice into structured learning notes and exam-style answers.",
  },
];

const Blog = () => {
  return (
    <div className="blog-section section-container" id="blog">
      <div className="blog-container">
        <h2>Blog & Insights</h2>
        <p className="blog-summary">
          I write about cybersecurity, cloud, and AI.
          Follow my Medium blog for practical notes, lab takeaways, and cloud learning.
        </p>
        <a
          className="blog-link"
          href="https://medium.com/@truptiranjansingh450"
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          Visit my Medium blog
        </a>
        <div className="blog-cards">
          {insights.map((item, index) => (
            <article className="blog-card" key={index}>
              <span>0{index + 1}</span>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
