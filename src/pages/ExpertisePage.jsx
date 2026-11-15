
import { Link } from 'react-router-dom';

import {
  Clapperboard,
  Film,
  MonitorPlay,
  Scissors,
  Camera,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
} from 'lucide-react';

// ==========================================
// 01. EXPERTISE PAGE
// ==========================================

function ExpertisePage() {
  // CREATIVE SERVICES

  const services = [
    {
      number: '01',
      title: 'Video Editing',
      description:
        'Short-form content, promotional videos, talking-head edits and visual storytelling.',
    },
    {
      number: '02',
      title: 'Motion Graphics',
      description:
        'Animated elements, motion-led compositions and dynamic visual experiences.',
    },
    {
      number: '03',
      title: 'Filmmaking',
      description:
        'Short films, cinematic sequences and story-driven visual experiences.',
    },
  ];

  // CREATIVE SOFTWARE & TOOLS

  const tools = [
    {
      number: '01',
      name: 'Adobe After Effects',
      category: 'Motion Graphics & Animation',
      icon: Clapperboard,
    },
    {
      number: '02',
      name: 'Adobe Premiere Pro',
      category: 'Video Editing',
      icon: Film,
    },
    {
      number: '03',
      name: 'DaVinci Resolve',
      category: 'Editing & Color Grading',
      icon: MonitorPlay,
    },
    {
      number: '04',
      name: 'CapCut',
      category: 'Video Editing',
      icon: Scissors,
    },
    {
      number: '05',
      name: 'Adobe Photoshop',
      category: 'Visual Asset Preparation',
      icon: Clapperboard,
    },
    {
      number: '06',
      name: 'Adobe Lightroom',
      category: 'Photo Editing',
      icon: Camera,
    },
    {
      number: '07',
      name: 'AI Tools',
      category: 'AI-Powered Creative Workflow',
      icon: Sparkles,
    },
  ];

  return (
    <section className="expertise-section">
      <div className="container section">
        {/* PAGE INTRODUCTION */}

        <div className="section-heading">
          <div>
            <p className="eyebrow">
              02 / CREATIVE DISCIPLINES
            </p>

            <h2>
              What I <span>Create.</span>
            </h2>
          </div>

          <p className="section-description">
            Different creative disciplines. One visual language.
            Explore the services and tools behind my creative work.
          </p>
        </div>

        {/* CREATIVE SERVICES */}

        <div className="expertise-grid">
          {services.map((service) => (
            <article
              className="expertise-card"
              key={service.number}
            >
              <span className="card-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="card-arrow">
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </span>
            </article>
          ))}
        </div>

        {/* CREATIVE TOOLKIT */}

        <div className="toolkit-section">
          <div className="toolkit-heading">
            <div>
              <p className="eyebrow">
                MY CREATIVE TOOLKIT
              </p>

              <h3>
                Tools I <span>Work With.</span>
              </h3>
            </div>

            <p className="toolkit-description">
              The applications and technologies behind
              my creative workflow.
            </p>
          </div>

          <div className="toolkit-grid">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <article
                  className="tool-card"
                  key={tool.number}
                >
                  <div className="tool-card-top">
                    <span className="tool-number">
                      {tool.number}
                    </span>

                    <span className="tool-icon">
                      <Icon size={36} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="tool-card-info">
                    <h4>{tool.name}</h4>

                    <p>{tool.category}</p>
                  </div>

                  <span className="tool-arrow">
                    <ArrowUpRight size={20} strokeWidth={1.8} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        {/* BACK TO HOME */}

        <div className="expertise-back">
          <Link to="/#home" className="text-link">
            <ArrowLeft size={18} strokeWidth={1.8} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExpertisePage;
