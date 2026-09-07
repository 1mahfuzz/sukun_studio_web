/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {type ReactNode, useState} from 'react';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Menu,
  Mic,
  Palette,
  PlayCircle,
  Settings,
  Video,
  X,
  Zap,
} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import sukunLogo from './sukun_logo.png';

const SERVICE_SUITES = [
  {
    id: 'video-production',
    title: 'Video Production & Shooting',
    subtitle: 'From the first script to the final frame.',
    icon: <Video className="h-5 w-5" />,
    categories: [
      {
        name: 'Production Types',
        items: [
          'Product Promos',
          'SaaS Explainers',
          'Commercial Advertisements',
          'Corporate Videos',
          'Brand Storytelling',
          'Tutorials & Walkthroughs',
          'Social Media Campaigns',
          'YouTube Content Production',
        ],
      },
      {
        name: 'Cinematography',
        items: [
          'Indoor & Outdoor Shoots',
          'Corporate Interviews',
          'Office & Workspace Shoots',
          'Event Coverage',
          'Podcast Filming',
          'Product Cinematography',
          'Reel & Short-form',
          'Multi-camera Setups',
        ],
      },
    ],
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Post-Production',
    subtitle: 'Polishing your footage for maximum audience retention.',
    icon: <Settings className="h-5 w-5" />,
    categories: [
      {
        name: 'Editing Services',
        items: [
          'Professional Editing',
          'Cinematic Cuts & Transitions',
          'Color Correction & Grading',
          'Sound Design & Audio Cleanup',
          'Subtitle & Caption Creation',
          'Social Media Optimization',
          'YouTube Editing',
          'Short-form Content',
        ],
      },
    ],
  },
  {
    id: 'podcast',
    title: 'Podcast Production',
    subtitle: 'High-fidelity audio and video for modern voices.',
    icon: <Mic className="h-5 w-5" />,
    categories: [
      {
        name: 'Podcast Services',
        items: [
          'Recording Setup',
          'Multi-camera Production',
          'Audio Enhancement',
          'Podcast Editing',
          'Intro & Outro Creation',
          'Short Clips for Social',
          'Studio-style Visuals',
        ],
      },
    ],
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & Animation',
    subtitle: 'Dynamic visuals that explain the complex.',
    icon: <Zap className="h-5 w-5" />,
    categories: [
      {
        name: 'Motion Services',
        items: [
          'Logo Animations',
          'UI/UX Animations',
          'Feature Animations',
          'Explainer Animations',
          'Kinetic Typography',
          'Animated Infographics',
          'Social Media Motion',
          'Intro & Outro Animations',
        ],
      },
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    subtitle: 'Building a strong, professional brand identity.',
    icon: <Palette className="h-5 w-5" />,
    categories: [
      {
        name: 'Design Services',
        items: [
          'Social Media Creatives',
          'Thumbnail Design',
          'Brand Identity Design',
          'Posters & Banners',
          'UI Presentation Graphics',
          'Marketing Materials',
          'Corporate Design Assets',
        ],
      },
    ],
  },
  {
    id: 'photography',
    title: 'Professional Photography',
    subtitle: 'Clean and modern imagery for brands and teams.',
    icon: <Camera className="h-5 w-5" />,
    categories: [
      {
        name: 'Photography Services',
        items: [
          'Product Photography',
          'Corporate Photography',
          'Team & Office Photography',
          'Event Photography',
          'Branding Photoshoots',
          'Social Media Photography',
          'Creative Commercial',
        ],
      },
    ],
  },
];

const WORKFLOW = [
  {
    title: 'Concept Development',
    description: 'Scripting and storyboarding to align with your vision.',
    step: '01',
  },
  {
    title: 'Cinematic Production',
    description: 'High-end cameras, professional lighting, and studio-grade audio.',
    step: '02',
  },
  {
    title: 'Strategic Delivery',
    description: 'Pacing, visual consistency, and platform optimization.',
    step: '03',
  },
];

const PORTFOLIO_VIDEOS = [
  {id: 'mrg1vDYkOCI', title: 'Creative Showcase I'},
  {id: 'mxRz32bP8GE', title: 'SaaS Motion Design'},
  {id: 'mQDdETKXpzM', title: 'Studio Showreel'},
  {id: 'DC7Ma6LpPeo', title: 'Digital Production'},
  {id: '9-S_gKh9IbQ', title: 'Brand Storytelling'},
];

const NAV_LINKS = ['Services', 'Workflow', 'Portfolio', 'About'];

function CalButton({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      data-cal-link="sukun-studio/15min"
      data-cal-namespace="15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={className}
    >
      {children}
    </button>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between border border-white/10 bg-[#050514]/75 px-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <img
            src={sukunLogo}
            alt="Sukun Studio Logo"
            className="h-9 w-9 shrink-0 rounded-[8px] border border-white/10 object-cover"
          />
          <span className="font-syne text-sm font-bold tracking-[0.22em] text-white sm:text-base">
            SUKUN STUDIO
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-medium text-secondary transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <CalButton className="button-primary h-10 px-5 text-xs">
            Book a Consultation
          </CalButton>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-white/10 text-white md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            className="mx-auto mt-2 max-w-7xl border border-white/10 bg-[#060616]/95 p-4 backdrop-blur-2xl md:hidden"
          >
            <div className="grid gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-secondary hover:text-white"
                >
                  {link}
                </a>
              ))}
              <CalButton className="button-primary mt-2 h-12 text-sm">
                Book a Consultation
              </CalButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-title ${centered ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="hero-grid relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="spotlight spotlight-left" />
      <div className="spotlight spotlight-right" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className="relative z-10"
        >
          <span className="eyebrow">Production • Post • Animation</span>
          <h1 className="mt-5 max-w-4xl font-syne text-[clamp(2.85rem,6vw,5.7rem)] font-bold leading-[0.95] text-white">
            Cinematic Content for{' '}
            <span className="text-violet-200">Tech, SaaS,</span> and Digital
            Creators.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-secondary md:text-lg">
            Sukun Studio is a full-service creative production studio
            transforming ideas into professional visual experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={scrollToServices} className="button-primary h-[52px] px-7">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </button>
            <CalButton className="button-secondary h-[52px] px-7">
              Book a Consultation
            </CalButton>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.94}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.15, duration: 0.8}}
          className="hero-media"
        >
          <div className="hero-media-header">
            <span>Official Showreel</span>
            <PlayCircle className="h-4 w-4 text-violet-200" />
          </div>
          <div className="hero-video-frame">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vwrsKY1SQaY?autoplay=0&rel=0"
              title="Sukun Studio Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="hero-stat-panel">
            <span>100+</span>
            <p>Projects successfully delivered for global tech brands.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-band px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our Capabilities"
          title="Comprehensive Service Suites"
          centered
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_SUITES.map((suite, idx) => (
            <motion.article
              key={suite.id}
              initial={{opacity: 0, y: 22}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: idx * 0.06}}
              viewport={{once: true, margin: '-80px'}}
              className="feature-card group"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="icon-tile">{suite.icon}</div>
                  <h3 className="mt-6 font-syne text-2xl font-bold text-white">
                    {suite.title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-white/20">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-secondary">
                {suite.subtitle}
              </p>

              <div className="mt-8 space-y-6">
                {suite.categories.map((cat) => (
                  <div key={cat.name}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-violet-200">
                      {cat.name}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span key={item} className="service-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySukun() {
  return (
    <section id="about" className="section-band section-band-deep px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{opacity: 0, x: -24}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-80px'}}
        >
          <SectionTitle
            eyebrow="Our Mission"
            title="Helping brands communicate their vision"
          />
          <blockquote className="mt-8 border-l border-violet-300/70 pl-6 font-syne text-2xl font-semibold leading-snug text-white md:text-3xl">
            "We focus on content that builds trust, engagement, and long-term
            brand value."
          </blockquote>
          <p className="mt-8 max-w-2xl text-base leading-8 text-secondary md:text-lg">
            At Sukun Studio, we believe that every digital product and tech
            service deserves to be presented as a masterpiece. Our focus is on
            the intersection of technology and artistry.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {[
              'Result-driven storytelling',
              'Studio-grade production quality',
              'Global creative standard',
              'Expert handling of tech-focused content',
            ].map((item) => (
              <div key={item} className="check-row">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true, margin: '-80px'}}
          className="studio-panel"
        >
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOUg3yZ-5Dk69_YXfgHO5nWnoko4Nk0tYM65rul=s680-w680-h510-rw"
            alt="Sukun Studio Professional Setup"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="studio-panel-caption">
            <span>100+</span>
            <p>Projects successfully delivered for global tech brands.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="section-band px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our Process"
          title="The Sukun Workflow"
          centered
        />

        <div className="workflow-rail mt-16 grid gap-4 md:grid-cols-3">
          {WORKFLOW.map((item, idx) => (
            <motion.article
              key={item.step}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: idx * 0.12}}
              viewport={{once: true, margin: '-80px'}}
              className="workflow-card"
            >
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-band section-band-deep px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Showcase"
            title="Portfolio & Showreel"
          />
          <a
            href="https://www.youtube.com/@SukunStudioBD"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary h-12 w-fit px-5 text-sm"
          >
            View Full Archive on YouTube
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PORTFOLIO_VIDEOS.map((video, idx) => (
            <motion.article
              key={video.id}
              initial={{opacity: 0, y: 22}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: idx * 0.07}}
              viewport={{once: true, margin: '-80px'}}
              className="portfolio-card"
            >
              <div className="portfolio-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="font-syne text-xl font-bold text-white">
                  {video.title}
                </h3>
                <a
                  href={`https://youtu.be/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${video.title} on YouTube`}
                  className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 text-violet-200 transition-colors hover:border-violet-200 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="contact-glow" />
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-80px'}}
        className="contact-panel mx-auto max-w-6xl"
      >
        <div>
          <h2 className="max-w-3xl font-syne text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's create something extraordinary together.
          </h2>
        </div>

        <div className="contact-details">
          <div>
            <span>Email:</span>
            <a href="mailto:sukunstudioofficial@gmail.com">
              sukunstudioofficial@gmail.com
            </a>
          </div>
          <div>
            <span>Location:</span>
            <a href="https://maps.app.goo.gl/RExm6PvptiXgdbWq9">
              House 771, Road 10 Avenue 6, Dhaka 1216
            </a>
          </div>
          <div>
            <span>WhatsApp:</span>
            <a href="https://wa.me/8801706575704" target="_blank" rel="noopener noreferrer">
              +880 1706-575704
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:hello@sukunstudio.com" className="button-light h-[52px] px-7">
            Send Email
            <ChevronRight className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/8801705527357"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary h-[52px] px-7"
          >
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02020a] px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={sukunLogo}
              alt="Sukun Studio Logo"
              className="h-9 w-9 rounded-[8px] border border-white/10 object-cover"
            />
            <span className="font-syne text-sm font-bold tracking-[0.22em] text-white">
              SUKUN STUDIO
            </span>
          </div>
          <h2 className="mt-8 font-syne text-[clamp(2rem,7vw,2.625rem)] font-bold leading-tight text-white">
            <span className="block whitespace-nowrap">Ready to transform</span>
            <span className="block whitespace-nowrap">your brand’s visuals?</span>
          </h2>
          <a
            href="mailto:sukunstudioofficial@gmail.com"
            className="mt-6 inline-block break-all font-syne text-xl font-bold text-violet-200 transition-colors hover:text-white md:text-2xl"
          >
            sukunstudioofficial@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div>
            <p className="footer-heading">Explore</p>
            <ul className="footer-links">
              <li>
                <a href="#services">All Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#workflow">Process</a>
              </li>
              <li>
                <a href="#about">Clients</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Studio</p>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="mailto:sukunstudioofficial@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="footer-heading">Social</p>
            <ul className="footer-links">
              {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map((social) => (
                <li key={social}>
                  <a href="#">{social}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row">
        <p>© 2024 Sukun Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhySukun />
        <Workflow />
        <Portfolio />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
