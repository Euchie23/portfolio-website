import React from 'react';
import { motion } from 'framer-motion';

// --- Top images for inside the card ---
import placeholderSquidStack from "../images/squidstackapp.png";
import placeholderSquidStock from "../images/squidstockapp.png";
import placeholderGeoTentacles from "../images/geotentaclesapp.png";
import placeholderHSEQ from "../images/hseq.png";

// --- Background images for the card panel ---
import bgSquidStack from "../images/squidstack.jpeg";
import bgSquidStock from "../images/squidstock.jpeg";
import bgGeoTentacles from "../images/geotentacles.png";
import bgHSEQ from "../images/hseq.png";


import { FaFish, FaBiohazard, FaGlobeAmericas, FaHardHat } from 'react-icons/fa';

// For background only
const repoBackgrounds = {
  squidstack: bgSquidStack,
  squidstock: bgSquidStock,
  geotentacles: bgGeoTentacles,
  hseq: bgHSEQ,
};

// For top image inside card
const repoTopImages = {
  squidstack: placeholderSquidStack,
  squidstock: placeholderSquidStock,
  geotentacles: placeholderGeoTentacles,
  hseq: placeholderHSEQ,
};

export const BentoCard = ({ repoKey, repo, onClick, className = "", style = {}, delay = 0 }) => {
  
  console.log("BentoCard props:", repoKey, repo);
  // Determine images
  const bgImage = repo.bgImage || repoBackgrounds[repoKey];   // Background only
  const topImage = repo.appImage || repoTopImages[repoKey];    // Top inside card

  // Debug check
  console.log("Rendering card for:", repoKey, repo.title);

  return (
    <motion.div
      onClick={onClick}
      className={`glass-panel group ${className}`}
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, color: "white" }}>
        <div className="text-emerald-400 text-3xl mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
          {repoKey === 'squidstack' && <FaBiohazard />}
          {repoKey === 'squidstock' && <FaFish />}
          {repoKey === 'geotentacles' && <FaGlobeAmericas />}
          {repoKey === 'hseq' && <FaHardHat />}
        </div>
        
        {/* Title & tagline */}
        <h3 className="text-xl font-bold text-white">{repo.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{repo.tagline}</p>

        <p className="mt-6 text-emerald-500 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
          Explore Technical Deep-Dive
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </p>

        {/* <img
          src={fullImage}
          alt={`${repo.title} screenshot`}
          style={{ width: "100%", borderRadius: "8px", margin: "1rem 0" }}
        /> */}

        {/* <p>{repo.overview}</p>

        {repo.technical && repo.technical.length > 0 && (
          <>
            <h4>Technical Snapshot</h4>
            <ul>
              {repo.technical.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {repo.scenario && (
          <>
            <h4>Demonstration Scenario</h4>
            <p>{repo.scenario}</p>
          </>
        )}

        {repo.insights && repo.insights.length > 0 && (
          <>
            <h4>Interpretive Insights</h4>
            <ul>
              {repo.insights.map((insight, idx) => (
                <li key={idx}>{insight}</li>
              ))}
            </ul>
          </>
        )}

        {repo.modules && repo.modules.length > 0 && (
          <>
            <h4>Modules & Impact</h4>
            <ul>
              {repo.modules.map((module, idx) => (
                <li key={idx}>
                  <strong>{module.name}:</strong> {module.detail}
                </li>
              ))}
            </ul>
          </>
        )}

        {repo.links && repo.links.length > 0 && (
          <div className="repo-links">
            {repo.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
                {link.subLabel && ` — ${link.subLabel}`}
              </a>
            ))}
          </div>
        )}

        {repo.sideLinks && repo.sideLinks.length > 0 && (
          <div className="repo-side-links">
            {repo.sideLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )} */}
      </div>
    </motion.div>
  );
};