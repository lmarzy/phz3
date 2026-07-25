import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "phz3 — UI & JavaScript development",
  description:
    "Independent web development focused on thoughtful interfaces, robust JavaScript and useful digital products.",
};

const companies = [
  { name: "Play.com", className: "play", src: "/logos/play.png" },
  { name: "Experian", className: "experian", src: "/logos/experian.svg" },
  { name: "Dunelm", className: "dunelm", src: "/logos/dunelm.svg" },
  { name: "Tesco Bank", className: "tesco", src: "/logos/tesco-bank.svg" },
  { name: "Deutsche Bank", className: "deutsche", src: "/logos/deutsche-bank.svg" },
  { name: "Emirates", className: "emirates", src: "/logos/emirates.svg" },
  { name: "Agoda", className: "agoda", src: "/logos/agoda.svg" },
  { name: "Tarabut", className: "tarabut", src: "/logos/tarabut.svg" },
];

const work = [
  {
    number: "01",
    title: "Traders Hub",
    type: "Product design · Full-stack development",
    description:
      "A focused trading workspace that brings journaling, performance analytics, reviews, training and community challenges into one clear product experience.",
    url: "https://traders-hub.site/",
    host: "traders-hub.site",
    visual: "traders",
  },
  {
    number: "02",
    title: "Quizo",
    type: "UI design · Front-end development",
    description:
      "A fast, playful quiz experience designed to make creating, sharing and playing quizzes feel immediate and effortless.",
    url: "https://quizow.netlify.app/",
    host: "quizow.netlify.app",
    visual: "quizo",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="logo" href="#top" aria-label="phz3 home">
          phz<span>3</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="mailto:me@phz3.net">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <p className="kicker"><span /> Independent web developer</p>
        <h1>
          I design and build
          <br />interfaces that <em>work.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            UI-focused web development, backed by experience across the
            JavaScript stack.
          </p>
          <a href="#work" aria-label="View selected work">
            <span>View selected work</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="hero-mark" aria-hidden="true">3</div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span> About</div>
        <div className="about-copy">
          <h2>
            Good interfaces feel <em>obvious.</em>
            <br />Getting there takes work.
          </h2>
          <div className="about-columns">
            <p>
              I&apos;m a web developer specialising in the design and development
              of user interfaces — turning complex requirements into products
              that feel clear, considered and easy to use.
            </p>
            <p>
              My work also extends across the JavaScript stack, from modern
              front-end systems to Node.js services and the tools needed to
              take an idea from first sketch to production.
            </p>
          </div>
          <div className="capabilities">
            <span>UI design</span><span>Design systems</span>
            <span>Front-end development</span><span>JavaScript</span>
            <span>Node.js</span><span>Prototyping</span>
          </div>
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-label light"><span>02</span> Recent work</div>
        <div className="work-heading">
          <h2>Selected projects</h2>
          <p>From first interaction to the systems working behind it.</p>
        </div>
        <div className="project-list">
          {work.map((project) => (
            <a
              className="project"
              href={project.url}
              key={project.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className={`project-visual ${project.visual}`}>
                <span className="visual-label">{project.host}</span>
                <img
                  className="project-screenshot"
                  src={`/projects/${project.visual === "traders" ? "traders-hub" : "quizo"}.png`}
                  alt={`${project.title} website interface`}
                />
              </div>
              <div className="project-copy">
                <div><span>{project.number}</span><p>{project.type}</p></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <b>Visit project <span aria-hidden="true">↗</span></b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="experience section shell" id="experience">
        <div className="section-label"><span>03</span> Experience</div>
        <div className="experience-content">
          <h2>Trusted by teams<br/>big and small.</h2>
          <p>
            Experience delivering interfaces and web products across retail,
            finance, travel and technology.
          </p>
          <div className="logo-grid" aria-label="Companies worked for">
            {companies.map((company) => (
              <div className={`company-logo ${company.className}`} key={company.name}>
                <img src={company.src} alt={company.name} />
                {company.className === "tesco" && <span>Bank</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact shell" id="contact">
        <p className="kicker"><span /> Available for the right project</p>
        <h2>Have something<br/>interesting in mind?</h2>
        <a href="mailto:me@phz3.net">me@phz3.net <span aria-hidden="true">↗</span></a>
        <div className="footer-row">
          <div className="logo light-logo">phz<span>3</span></div>
          <p>UI design &amp; JavaScript development</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
