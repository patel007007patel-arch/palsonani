import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Shopify Applications */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/palpatel007/Image-SEO-Booster.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository" loading="lazy" />
                </a>
                <a href="https://apps.shopify.com/sbit-image-seo-booster?search_id=0fd794bc-65e8-4af3-88a9-408d01f265fa&surface_detail=sbit+&surface_inter_position=1&surface_intra_position=1&surface_type=search" target="_blank" rel="noopener noreferrer">
                  <img src={externalLink} alt="Visit SBIT Image SEO Booster App" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SBIT – Image SEO Booster</h3>
              <p>
                Created a Shopify app to optimize store performance and SEO through image compression, WebP conversion, ALT text optimization, and performance monitoring. Built using Shopify Remix with full Shopify API integration and deployed on Heroku.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify Remix</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Shopify APIs</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/palpatel007/bulk_data_upload.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - SBIT Bulk Data Upload" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SBIT – Bulk Data Upload</h3>
              <p>
                Developed a Shopify app for bulk product data migration. Merchants can import CSV files from platforms like Amazon, WordPress, and Wix, and export Shopify data into platform-specific CSV formats for external marketplaces.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify Remix</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>CSV Import/Export</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>WhatFlow – WhatsApp Chat Automation</h3>
              <p>
                Built a Shopify app that automates customer communication via WhatsApp, including order confirmations, shipping updates, cart recovery, and back-in-stock alerts. Implemented event-driven messaging using Shopify webhooks and WhatsApp APIs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify Remix</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>WhatsApp API</li>
                <li>Webhooks</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Backend Projects */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/palsonani/College.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - College Admission Platform" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>College Admission Platform</h3>
              <p>
                Developed a college admission platform that enables students to explore colleges, browse available programs, and submit admission applications digitally. Built secure and scalable APIs to handle user authentication, application submissions, and data management.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JWT</li>
                <li>RESTful APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>Social Media Influencer Collaboration Platform</h3>
              <p>
                Built backend services for a collaboration platform connecting influencers with brands and other creators. The platform supports profile management, collaboration discovery, and secure communication through API-driven workflows.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>JWT</li>
                <li>RESTful APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/palsonani/stake.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - Lister.io Gaming Platform" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Lister.io – Real-Time Gaming Platform</h3>
              <p>
                Developed backend architecture for an interactive multiplayer gaming platform supporting real-time gameplay and messaging. Implemented APIs and real-time communication to enable seamless multiplayer interactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Socket.io</li>
                <li>RESTful APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>RentTaxi – Taxi Booking Platform</h3>
              <p>
                Developed the backend services for RentTaxi, a taxi booking and rental platform that allows users to book rides, schedule trips, and manage transportation services efficiently. The system supports user authentication, ride requests, booking management, fare handling, and trip status tracking through secure and scalable APIs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JWT</li>
                <li>RESTful APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/patel007007patel-arch/whatsapp-automation-backend.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - WhatsApp Automation SaaS" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>WhatsApp Automation SaaS Platform</h3>
              <p>
                Built a full-featured WhatsApp automation SaaS platform enabling businesses to automate messaging workflows. Features include QR-based WhatsApp login, bulk messaging, media sharing, API access via keys, subscription plans, and credit tracking. Developed separate admin and user panels with full control over sessions, transactions, and usage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JWT</li>
                <li>whatsapp-web.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/patel007007patel-arch/Reclaim.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - Reclaim Wellness Platform" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Reclaim – Wellness Platform (Admin Dashboard)</h3>
              <p>
                Developed backend APIs for a wellness platform's admin dashboard, enabling administrators to manage users, content (affirmations, lectures, quotes), community posts, and notifications. Implemented scheduled jobs, content moderation, and analytics-ready APIs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Firebase Storage</li>
                <li>OneSignal</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/patel007007patel-arch/beside-backend.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - Beside AI Phone Assistant" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Beside AI – Phone Assistant Platform</h3>
              <p>
                Built backend services for an AI-powered phone assistant that handles incoming calls using real-time voice processing. Integrated telephony services and AI pipelines to support call handling, intent recognition, team collaboration, calendar sync, and automated call summaries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Twilio</li>
                <li>WebSockets</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Web3 & Gaming Platforms */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/stonebitinfotech/alphalions.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - AlphaLions NFT Platform" loading="lazy" />
                </a>
                <a href="https://alphalions.io/" target="_blank" rel="noopener noreferrer">
                  <img src={externalLink} alt="Visit AlphaLions NFT Platform" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AlphaLions – NFT & Digital Collectibles Platform</h3>
              <p>
                Developed backend infrastructure for a Web3 NFT ecosystem featuring voxel-style digital collectibles. Built APIs to manage NFT metadata, ownership verification, user sessions, and frontend integration for galleries and wallet-based interactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Web3</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://esports.alphalions.io/" target="_blank" rel="noopener noreferrer">
                  <img src={externalLink} alt="Visit Alpha Lions Esports Platform" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Alpha Lions Esports</h3>
              <p>
                Designed and developed a competitive esports platform for hosting online tournaments. Built responsive frontend interfaces and scalable backend APIs to support registrations, leaderboards, tournament listings, and high-traffic live events.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/palpatel007/toxicskullsclubmain.git" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Repository - Toxic Skulls Club NFT Dashboard" loading="lazy" />
                </a>
                <a href="https://dashboard.toxicskullsclub.io/" target="_blank" rel="noopener noreferrer">
                  <img src={externalLink} alt="Visit Toxic Skulls Club NFT Dashboard" loading="lazy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Toxic Skulls Club – NFT Dashboard</h3>
              <p>
                Built a secure dashboard for an NFT community platform where users can connect wallets, view NFT holdings, access exclusive utilities, and manage profiles. Designed the system for scalability and future feature expansion.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Web3</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}