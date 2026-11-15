import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

// ==========================================
// 01. PORTFOLIO CATEGORIES
// ==========================================

const categories = {
  'motion-graphics-title-animation': {
    title: 'Motion Graphics & Animation',
    description: 'Dynamic animations, typography and motion-led visuals.',
    layout: 'portrait',
    aspectRatio: '9 / 16',
  },

  'cinematic-color-grading': {
    title: 'Color Grading & Cinematic Storytelling',
    description: 'Visual moods, tones and cinematic looks, Storytelling pacing.',
    layout: 'landscape',
    aspectRatio: '16 / 9',
  },

  'talking-head-creator-content': {
    title: 'Talking Head & Creator Content',
    description: 'Engaging edits crafted for creators and digital storytellers.',
    layout: 'portrait',
    aspectRatio: '9 / 16',
  },

  'travel-destination-vlogs': {
    title: 'Travel & Destination Vlogs',
    description: 'Visual journeys, destinations and stories worth exploring.',
    layout: 'portrait',
    aspectRatio: '9 / 16',
  },

  'podcast-intros-highlights': {
    title: 'Podcast Intros & Highlights',
    description: 'Conversations transformed into compelling visual content.',
    layout: 'landscape',
    aspectRatio: '16 / 9',
  },

  'short-form-reels-shorts': {
    title: 'Short-Form Reels & Shorts (9:16)',
    description: 'Fast-paced vertical content designed to capture attention.',
    layout: 'portrait',
    aspectRatio: '9 / 16',
  },

  'commercial-brand-promos': {
    title: 'Commercial & Brand Promos',
    description: 'Creative promotional content that brings brands to life.',
    layout: 'portrait',
    aspectRatio: '9 / 16',
  },
};

// ==========================================
// 02. YOUTUBE VIDEO ID EXTRACTOR
// ==========================================

function getYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.slice(1);
    }

    if (parsedUrl.pathname.startsWith('/shorts/')) {
      return parsedUrl.pathname.split('/')[2];
    }

    if (parsedUrl.pathname.startsWith('/embed/')) {
      return parsedUrl.pathname.split('/')[2];
    }

    return parsedUrl.searchParams.get('v');
  } catch {
    return null;
  }
}

// ==========================================
// 03. CATEGORY PAGE
// ==========================================

function CategoryPage() {
  const { category } = useParams();

  const currentCategory = categories[category];

  // CATEGORY NOT FOUND
  if (!currentCategory) {
    return (
      <main className="category-page container">
        <h1>Category not found.</h1>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </main>
    );
  }

  // GET PROJECTS FOR THE CURRENT CATEGORY
  const categoryProjects = projects.filter(
    (project) => project.category === currentCategory.title
  );

  return (
    <main className="category-page container">

      {/* BACK NAVIGATION */}
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      {/* CATEGORY HEADER */}
      <div className="category-page-header">
        <p className="eyebrow">THE CREATIVE ARCHIVE</p>

        <h1>
          {currentCategory.title}
          <span>.</span>
        </h1>

        <p>{currentCategory.description}</p>
      </div>

      {/* CATEGORY PROJECT GRID */}
      <div
        className={`category-projects category-projects-${currentCategory.layout}`}
      >
        {categoryProjects.length > 0 ? (
          categoryProjects.map((project) => {
            const videoId = getYouTubeVideoId(project.videoLink);

            return (
              <article
                className={`project-card project-card-${currentCategory.layout}`}
                key={project.id}
              >
                {videoId ? (
                  <div
                    className="project-video"
                    style={{
                      '--project-aspect-ratio': currentCategory.aspectRatio,
                    }}
                  >
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <p>Video could not be loaded.</p>
                )}

                {/* PROJECT INFORMATION */}
                <div className="project-info">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>
              </article>
            );
          })
        ) : (
          <p className="empty-projects">
            Projects coming soon.
          </p>
        )}
      </div>
    </main>
  );
}

export default CategoryPage;