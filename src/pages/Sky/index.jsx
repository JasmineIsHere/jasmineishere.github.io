import { useEffect, useRef, useState } from "react";
import {
  CloseOutlined,
  MenuOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./sky.css";

const profile = {
  id: "about",
  title: "About me",
  category: "The person behind the projects",
  description:
    "I'm Jasmine, a software engineer based in Singapore. I build web applications and chatbots, and enjoy making things that are useful and a little playful.",
  extra:
    "Away from the keyboard, you might find me reading, cooking, rollerblading, painting, 3D printing, travelling, sewing, swimming, or making candles. Always curious. Always exploring.",
};
const workProjects = [
  {
    title: "Support page revamp",
    image: "/project_faces/nv_support_page_categories.png",
    description:
      "Built new components for the marketing team's support page revamp to make help more useful and reduce the need to contact support agents. Integrated data points with Google Analytics so the team could monitor the page's performance.",
  },
  {
    title: "NinjaChat",
    image: "/project_faces/ninjachat.png",
    description:
      "Created new customer support chatbot flows, maintained existing features, and supported the chatbot during high-traffic periods.",
  },
  {
    title: "Ninja Flexi",
    image: "/project_faces/ninja_flexi.png",
    description:
      "Designed a microsite where anyone could try Ninja Van's delivery service without signing up as a shipper, with doorstep pickup and parcel status updates.",
  },
];
const stops = [
  {
    id: "tgif",
    title: "TGIF Screensaver",
    category: "Personal project · macOS",
    x: 68,
    y: 27,
    description:
      "A macOS screensaver that counts down to Friday, then makes every second of the weekend count.",
    image: "/projects/tgif/work-week.png",
    href: "#/projects/tgif-screensaver",
  },
  {
    id: "maxout",
    title: "Maxout 100",
    category: "Personal project · Game",
    x: 83,
    y: 47,
    description:
      "A game where the goal is to hit 100, or get as close as possible without being eliminated.",
    image: "/project_faces/Maxout100.png",
    href: "https://jasmineishere.github.io/maxout100/",
  },
  {
    id: "pokemon",
    title: "Pokémon portfolio",
    category: "Personal project · Interactive portfolio",
    x: 53,
    y: 47,
    description:
      "An interactive portfolio styled like a Pokémon info menu. A playful way to get to know me.",
    image: "/project_faces/ditto.png",
    href: "#/projects/pkCard",
  },
  {
    id: "weekend",
    title: "Is it weekend yet?",
    category: "Personal project · Web",
    x: 27,
    y: 56,
    description:
      "A simple web page that answers a very important question: is it the weekend yet?",
    image: "/project_faces/is_it_wkend_yet.png",
    href: "https://jasmineishere.github.io/is-it-weekend-yet/",
  },
  {
    id: "shiggy",
    title: "Shigaraki game",
    category: "Personal project · Game",
    x: 65,
    y: 67,
    description:
      "A game inspired by Chrome Dino, featuring Shigaraki Tomura from My Hero Academia.",
    image: "/project_faces/shiggy.png",
    href: "#/projects/shiggy",
  },
  {
    id: "work",
    title: "At Ninja Van",
    category: "Professional work",
    x: 12,
    y: 73,
    description:
      "Customer support experiences, chatbots, and delivery services. My work includes the support page revamp, NinjaChat flows, and a Ninja Flexi microsite.",
    projects: workProjects,
  },
  {
    id: "youtube",
    title: "YouTube downloader",
    category: "Personal project · Utility",
    x: 86,
    y: 75,
    description: "A utility for downloading videos and audio from YouTube.",
    image: "/project_faces/ytdl.png",
    href: "https://github.com/JasmineIsHere/yt-downloader",
  },
];

export default function Sky() {
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const origin = useRef(null);
  const dialog = useRef(null);
  const closeButton = useRef(null);

  const open = (stop, event) => {
    origin.current = event.currentTarget;
    setSelected(stop);
  };
  const close = () => {
    setSelected(null);
  };

  useEffect(() => {
    if (!selected) {
      origin.current?.focus();
      return;
    }
    closeButton.current?.focus();
    const keydown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
      if (event.key === "Tab") {
        const controls = dialog.current.querySelectorAll("button, a[href]");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [selected]);

  return (
    <main
      className="sky-page"
      style={{ "--sky-image": "url(/images/starry-sky.png)" }}
    >
      <div className="sky-shade" aria-hidden="true" />
      <header className="sky-header" inert={selected ? "" : undefined}>
        <a className="sky-brand" href="#/">
          Jasmine Tan<span>SOFTWARE ENGINEER · SINGAPORE</span>
        </a>
        <div className="sky-header-actions">
          <button
            className="sky-profile-button"
            onClick={(event) => open(profile, event)}
          >
            About &amp; skills
          </button>
          <a
            href="https://github.com/JasmineIsHere"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowRightOutlined aria-hidden="true" />
          </a>
          <button
            aria-label={
              menuOpen ? "Close exploration menu" : "Open exploration menu"
            }
            aria-expanded={menuOpen}
            aria-controls="sky-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuOutlined aria-hidden="true" /> <span>Explore</span>
          </button>
        </div>
      </header>
      <section className="sky-intro">
        <p className="sky-eyebrow">A LITTLE CORNER OF THE UNIVERSE</p>
        <h1>
          Curiosity, written
          <br />
          in the stars.
        </h1>
        <p>Every star has a story. Pick one to discover mine.</p>
      </section>
      <section
        className="sky-map"
        aria-label="Explore Jasmine's stars"
        inert={selected ? "" : undefined}
      >
        {stops.map((stop, index) => (
          <button
            key={stop.id}
            className={`sky-star sky-star-${stop.id}`}
            style={{
              "--x": `${stop.x}%`,
              "--y": `${stop.y}%`,
              "--delay": `${index * 0.37}s`,
            }}
            aria-label={`Explore ${stop.title}`}
            onClick={(event) => open(stop, event)}
          >
            <img
              src="/images/navigation-star.png"
              alt=""
              aria-hidden="true"
              className="sky-star-icon"
            />
            <span>{stop.title}</span>
          </button>
        ))}
      </section>
      {menuOpen && (
        <nav
          id="sky-menu"
          className="sky-menu"
          aria-label="Exploration menu"
          inert={selected ? "" : undefined}
        >
          <p>CHOOSE A STAR</p>
          {stops.map((stop) => (
            <button key={stop.id} onClick={(event) => open(stop, event)}>
              {stop.title}
              <ArrowRightOutlined aria-hidden="true" />
            </button>
          ))}
        </nav>
      )}
      <footer className="sky-footer" inert={selected ? "" : undefined}>
        <span>Made with curiosity, by Jasmine.</span>
        <a
          href="https://www.linkedin.com/in/jasmine-tan-jm/"
          target="_blank"
          rel="noreferrer"
        >
          Let's connect <ArrowRightOutlined aria-hidden="true" />
        </a>
      </footer>
      {selected && (
        <div
          className="sky-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <section
            className={`sky-dialog ${selected.projects ? "sky-work-dialog" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sky-dialog-title"
            ref={dialog}
          >
            <button
              className="sky-close"
              aria-label="Close details"
              onClick={close}
              ref={closeButton}
            >
              <CloseOutlined aria-hidden="true" />
            </button>
            <p className="sky-eyebrow">{selected.category}</p>
            <h2 id="sky-dialog-title">{selected.title}</h2>
            {selected.image && (
              <img
                src={selected.image}
                alt={`${selected.title} project preview`}
              />
            )}
            <p>{selected.description}</p>
            {selected.extra && <p>{selected.extra}</p>}
            {selected.id === "about" && (
              <section className="sky-toolkit">
                <h3>My toolkit</h3>
                <div className="sky-skill-tags">
                  {["Java", "Go", "React", "SQL", "AWS"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <p>
                  Backend services, relational databases, web interfaces, and
                  cloud deployments. I've also worked with Kafka, Redis,
                  Mixpanel, and Bamboo.
                </p>
              </section>
            )}
            {selected.projects && (
              <div className="sky-work-projects">
                {selected.projects.map((project) => (
                  <article key={project.title}>
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                    />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            )}
            {selected.href && (
              <a
                className="sky-project-link"
                href={selected.href}
                {...(selected.href.startsWith("https")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {selected.action || "Explore project"}
                <ArrowRightOutlined aria-hidden="true" />
              </a>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
