
import React, { useEffect } from 'react';
import './App.css';

import {
  Link,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import CategoryPage from './pages/CategoryPage';
import ExpertisePage from './pages/ExpertisePage';

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

const socialLinks = [
  {
    name: 'Instagram',
    username: '@pixelparadox_creatives',
    description: 'Creative edits, reels and visual experiments.',
    url: 'https://www.instagram.com/pixelparadox_creatives?dlrf=aGJlejg1MmQ2OXE3',
    logo: '/instagram_logo.png',
  },
  {
    name: 'YouTube',
    username: '@pixelparadox_creatives',
    description: 'Video projects, showcases and creative content.',
    url: 'https://youtube.com/@pixelparadox_creatives',
    logo: '/youtube_logo.png',
  },
  {
    name: 'Facebook',
    username: 'Pixel Paradox',
    description: 'Updates, projects and creative community.',
    url: 'https://www.facebook.com/share/1FSt9CZc3s/',
    logo: '/facebook_logo.png',
  },
  {
    name: 'Pinterest',
    username: 'Pixel Paradox',
    description: 'Visual inspiration, creative references and ideas.',
    url: 'https://pin.it/62Bgs0vul',
    logo: '/pinterest_logo.png',
  },
];

// ==========================================
// 01. NAVIGATION
// ==========================================

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/#home" className="brand">
        <img
          src="/logo-yellow-nobg.png"
          alt="Pixel Paradox Logo"
          className="brand-logo"
        />

        <span className="brand-text">
          <span className="brand-name">PIXEL PARADOX</span>
          <span className="brand-subtitle">CREATIVE STUDIO</span>
        </span>
      </Link>

      <nav className="nav-links">
        <Link to="/#home">Home</Link>
        <Link to="/#works">Works</Link>
        <Link to="/expertise">Expertise</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </nav>

      <div className="nav-actions">
        <Link to="/#contact" className="nav-cta">
          Let's Talk ↗
        </Link>
      </div>
    </header>
  );
}

// ==========================================
// 02. HERO
// ==========================================

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot"></span>
          INDEPENDENT CREATIVE PORTFOLIO
        </p>

        <h1>
          Frames.
          <br />
          Motion.
          <br />
          <span>Stories.</span>
        </h1>

        <p className="hero-description">
          I'm Tapobrata Roy — a video editor and
          filmmaker transforming ideas into engaging
          visual experiences.
        </p>

        <div className="hero-buttons">
          <Link to="/#works" className="btn-primary">
            Explore My Work ↗
          </Link>

          <Link to="/#about" className="btn-secondary">
            Discover More ↓
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-label">
          <span>CREATIVE EXPRESSION</span>
          <span>EST. 2026</span>
        </div>

        <div className="visual-composition hero-logo-composition">
          <img
            src="/logo-yellow-nobg.png"
            alt="Pixel Paradox Original Brand Logo"
            className="hero-logo"
          />

          <span className="composition-caption">
            BEYOND THE ORDINARY
          </span>
        </div>

        <div className="visual-footer">
          <span>FRAMES × MOTION × STORIES</span>
          <span>01 — 04</span>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 03. DISCIPLINE STRIP
// ==========================================

function DisciplineStrip() {
  return (
    <section className="discipline-strip">
      <div className="container discipline-content">
        <span>VIDEO EDITING</span>
        <span>✳</span>
        <span>MOTION GRAPHICS</span>
        <span>✳</span>
        <span>FILMMAKING</span>
        {/* <span>✳</span> */}
        {/* <span>VISUAL STORYTELLING</span> */}
      </div>
    </section>
  );
}

// ==========================================
// 04. SELECTED WORKS
// ==========================================

function SelectedWorks() {
  const categories = [
    {
      number: '01',
      title: 'Motion Graphics & Animation',
      description: 'Dynamic animations, typography and motion-led visuals.',
      slug: 'motion-graphics-title-animation',
    },
    {
      number: '02',
      title: 'Color Grading & Cinematic Storytelling',
      description: 'Cinematic tones, visual moods and carefully crafted storytelling.',
      slug: 'cinematic-color-grading',
    },
    {
      number: '03',
      title: 'Talking Head & Creator Content',
      description: 'Engaging edits crafted for creators and digital storytellers.',
      slug: 'talking-head-creator-content',
    },
    {
      number: '04',
      title: 'Travel & Destination Vlogs',
      description: 'Visual journeys, destinations and stories worth exploring.',
      slug: 'travel-destination-vlogs',
    },
    {
      number: '05',
      title: 'Podcast Intros & Highlights',
      description: 'Conversations transformed into compelling visual content.',
      slug: 'podcast-intros-highlights',
    },
    {
      number: '06',
      title: 'Short-Form Reels & Shorts (9:16)',
      description: 'Fast-paced vertical content designed to capture attention.',
      slug: 'short-form-reels-shorts',
    },
    {
      number: '07',
      title: 'Commercial & Brand Promos',
      description: 'Creative promotional content that brings brands to life.',
      slug: 'commercial-brand-promos',
    },
  ];

  return (
    <section className="section container" id="works">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / THE PORTFOLIO</p>

          <h2>
            Selected <span>Works.</span>
          </h2>
        </div>

        <p className="section-description">
          A curated collection of projects, creative
          experiments and visual stories.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            to={`/works/${category.slug}`}
            className="category-card"
            key={category.slug}
          >
            <span className="category-number">
              {category.number}
            </span>

            <div className="category-card-content">
              <p className="eyebrow">EXPLORE CATEGORY</p>

              <h3>{category.title}</h3>

              <p>{category.description}</p>
            </div>

            <span className="category-arrow">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 05. ABOUT
// ==========================================

function About() {
  return (
    <section
      className="about-section section container"
      id="about"
    >
      <p className="eyebrow">
        03 / BEHIND THE CREATIVE WORK
      </p>

      <h2>
        It's not just about
        <br />
        what you <span>see.</span>
        <br />
        It's about what you feel.
      </h2>

      <div className="about-bottom">
        <p>
          I'm Tapobrata Roy, a creative professional
          passionate about video editing, motion graphics
          and filmmaking. I believe every visual has
          a story worth telling.
        </p>

        <Link to="/#contact" className="text-link">
          More About Me ↗
        </Link>
      </div>
    </section>
  );
}

// ==========================================
// 06. SOCIAL MEDIA
// ==========================================

function SocialMediaSection() {
  return (
    <section
      className="social-section section container"
      id="socials"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / STAY CONNECTED</p>

          <h2>
            Beyond the <span>Portfolio.</span>
          </h2>
        </div>

        <p className="section-description">
          Follow our creative journey, explore our latest
          work and discover more of Pixel Paradox.
        </p>
      </div>

      <div className="social-grid">
        {socialLinks.map((social) => (
          <a
            href={social.url}
            className="social-card"
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Pixel Paradox on ${social.name}`}
          >
            <div className="social-card-top">
              <span className="social-icon">
                <img
                  src={social.logo}
                  alt={`${social.name} logo`}
                  className="social-platform-logo"
                />
              </span>

              <span className="social-arrow">↗</span>
            </div>

            <div className="social-card-content">
              <h3>{social.name}</h3>

              <span className="social-username">
                {social.username}
              </span>

              <p>{social.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 07. CONTACT
// ==========================================

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="eyebrow">
          05 / LET'S CONNECT
        </p>

        <h2>
          Have a story
          <br />
          worth <span>telling?</span>
        </h2>

        <p>
          Let's connect and create something meaningful.
        </p>

        <a
          href="mailto:pixel.paradox.creatives@gmail.com"
          className="btn-primary"
        >
          Get In Touch ↗
        </a>

        <div className="contact-email-wrapper">
          <p className="contact-email-label">
            OR DROP ME AN EMAIL
          </p>

          <a
            href="mailto:pixel.paradox.creatives@gmail.com"
            className="contact-email"
          >
            pixel.paradox.creatives@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 08. FOOTER
// ==========================================

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-main">
        <Link to="/#home" className="brand">
          <img
            src="/logo-yellow-nobg.png"
            alt="Pixel Paradox Logo"
            className="brand-logo"
          />

          <span className="brand-text">
            <span className="brand-name">PIXEL PARADOX</span>
            <span className="brand-subtitle">CREATIVE STUDIO</span>
          </span>
        </Link>
      </div>

      <div className="footer-socials">
        <span className="footer-social-label">
          FOLLOW THE JOURNEY
        </span>

        <div className="footer-social-links">
          {socialLinks.map((social) => (
            <a
              href={social.url}
              className="footer-social-link"
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Pixel Paradox on ${social.name}`}
              title={social.name}
            >
              <img
                src={social.logo}
                alt={`${social.name} logo`}
                className="footer-social-logo"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Tapobrata Roy</span>
        <span>DESIGNED WITH CREATIVE INTENT.</span>
      </div>
    </footer>
  );
}

// ==========================================
// 09. HOME PAGE
// ==========================================

function HomePage() {
  return (
    <>
      <Hero />
      <DisciplineStrip />
      <SelectedWorks />
      <About />
      <SocialMediaSection />
      <Contact />
    </>
  );
}

// ==========================================
// 10. MAIN APPLICATION
// ==========================================

function App() {
  const location = useLocation();

  useEffect(() => {
    let animationFrame;

    if (location.hash) {
      const targetId = decodeURIComponent(
        location.hash.slice(1)
      );

      animationFrame = window.requestAnimationFrame(() => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="portfolio dark-theme">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/expertise"
            element={<ExpertisePage />}
          />

          <Route
            path="/works/:category"
            element={<CategoryPage />}
          />

          <Route
            path="*"
            element={
              <div className="container category-page">
                <h1>Page not found.</h1>
                <Link to="/">Back to Home</Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
