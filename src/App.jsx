import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFish, FaBiohazard, FaGlobeAmericas, FaHardHat, FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { RepoContent } from './RepoContent';
import { BentoGrid } from "./components/BentoGrid";


// ------------------- SVG Expandable COMPONENT -------------------
function ExpandableImage({ src, alt, description, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail / normal view */}
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl border border-slate-800"
        />
      </div>

      {description && (
        <p className="text-slate-200 text-sm leading-relaxed mt-1">{description}</p>
      )}

      {/* Modal / full-screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-full overflow-auto">
            <img src={src} alt={alt} className="w-full h-auto rounded-xl" />
            {title && (
              <h5 className="absolute top-4 left-4 text-white text-lg font-semibold">
                {title}
              </h5>
            )}
          </div>
        </div>
      )}
    </>
  );
}
// ------------------- END OF COMPONENT -------------------

const App = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [diagramKey, setDiagramKey] = useState(0); //
  const mermaidRef = useRef(null);

  // -----------------------------
  // CACHE (persists across views)
  // -----------------------------
  const mermaidCache = useRef({});

  // -----------------------------
  // INIT MERMAID (RUN ONCE)
  // -----------------------------
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
    });
  }, []);

  // -----------------------------
  // SCROLL TO TOP ON OPEN
  // -----------------------------
  useEffect(() => {
    if (activeProject) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeProject]);

  // -----------------------------
  // RENDER MERMAID DIAGRAM
  // -----------------------------
  useEffect(() => {
    const container = mermaidRef.current;
    if (!container) return;

    // ✅ ADD THIS LINE
    container.innerHTML = "";

    const graphDefinition = `
      flowchart LR
        subgraph S1["Data Ingestion"]
          A["Data Sources\\nField Sampling | Lab Analysis | Vessel Data\\nRemote Sensing | Public Data"]
        end

        subgraph S2["Data Management"]
          B["PostgreSQL + PostGIS\\nCleaning | QA/QC | Governance"]
        end

        subgraph S3["Analytics"]
          C["R | Python | Statistics | ML"]
        end

        subgraph S4["Applications"]
          D["Shiny | Streamlit Apps"]
        end

        subgraph S5["Stakeholders"]
          E["Regulators | Consultancies | ESG | HSE"]
        end

        A --> B --> C --> D --> E
    `;

    let cancelled = false;

    const render = async () => {
      try {
        const cacheKey = "main-diagram";

        let svg;

        if (mermaidCache.current[cacheKey]) {
          svg = mermaidCache.current[cacheKey];
        } else {
          const result = await mermaid.render(
            `mermaid-${Date.now()}`,
            graphDefinition
          );
          svg = result.svg;
          mermaidCache.current[cacheKey] = svg;
        }

        if (cancelled || !container) return;

        // ✅ ALWAYS inject into DOM (this is the fix)
        container.innerHTML = svg;
        container.dataset.svg = svg;

      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    };

    // IMPORTANT: wait for DOM paint after Framer Motion mount
  const waitForMountAndRender = () => {
    if (!container) return;

    // If already visible, render immediately
    if (container.offsetParent !== null) {
      render();
      return;
    }

    // Otherwise observe until it becomes visible
    const observer = new MutationObserver(() => {
      if (container.offsetParent !== null) {
        observer.disconnect();
        render();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  waitForMountAndRender();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [activeProject, diagramKey]);

//   const renderDiagram = async () => {
//     try {
//       const { svg } = await mermaid.render(
//         `mermaid-${Date.now()}`,
//         graphDefinition
//       );

//       mermaidRef.current.innerHTML = svg;
//       mermaidRef.current.dataset.svg = svg;
//     } catch (err) {
//       console.error("Mermaid render error:", err);
//     }
//   };

//   const timer = setTimeout(renderDiagram, 50);
//   return () => clearTimeout(timer);
// }, [activeProject]);

  // const graphDefinition = `flowchart LR
  //   subgraph S1["Data Ingestion"]
  //     A["Data Sources\\nField Sampling | Lab Analysis | Vessel Data\\nRemote Sensing (netCDF) | Public Data"]
  //   end

  //   subgraph S2["Data Management"]
  //     B["PostgreSQL + PostGIS\\nCleaning | Integration | QA/QC | Governance"]
  //   end

  //   subgraph S3["Analytics"]
  //     C["R | Python | Statistics | ML"]
  //   end

  //   subgraph S4["Applications"]
  //     D["Shiny | Streamlit Apps"]
  //   end

  //   subgraph S5["Stakeholders"]
  //     E["Regulators | Consultancies | ESG | HSE"]
  //   end

  //   A --> B --> C --> D --> E

  //   classDef bigFont font-size:16px, font-family:Arial, font-weight:bold;
  //   class A,B,C,D,E bigFont;
  // `;

//   const renderDiagram = async () => {
//     try {
//       const { svg } = await mermaid.render(`mermaid-${Date.now()}`, graphDefinition);
//       if (mermaidRef.current) {
//         mermaidRef.current.innerHTML = svg;

//         // Store clean SVG string for zoom
//         mermaidRef.current.dataset.svg = svg;
//       }
//     } catch (err) {
//       console.error("Mermaid render error:", err);
//     }
//   };

//   const timer = setTimeout(renderDiagram, 50);
//   return () => clearTimeout(timer);
// }, []);

  // This function handles the "Image Hunting" logic
  const handleImageError = (e) => {
    const src = e.target.src;
    if (src.endsWith('.JPG')) {
      e.target.src = src.replace('.JPG', '.jpg');
    } else if (src.endsWith('.jpg')) {
      e.target.src = src.replace('.jpg', '.png');
    } else {
      // Final fallback: A professional colored block with your initials
      e.target.style.display = 'none';
      e.target.parentElement.classList.add('bg-emerald-900/20', 'flex', 'items-center', 'justify-center');
      e.target.parentElement.innerHTML = '<span class="text-emerald-500 font-bold text-xl">EJP</span>';
    }
  };

  // Grouping repos for display
  const squidFestRepos = ["squidstack", "squidstock", "geotentacles"];
  const hseRepos = ["hseq"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">

      <AnimatePresence mode="wait">
        {!activeProject ? (
          /* --- HOMEPAGE / BENTO VIEW --- */
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <header className="max-w-6xl mx-auto px-6 pt-20 pb-12 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl bg-slate-900">
                <img 
                  src="/headshot.JPG" 
                  alt="Euchie Jn Pierre" 
                  className="w-full h-full object-cover" 
                  onError={handleImageError} 
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold mb-2 tracking-tight">Euchie <span className="text-emerald-400">Jn Pierre</span></h1>
                <p className="text-slate-400 text-lg font-light italic">Applied Environmental Data Scientist & Risk Analyst </p>
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <a href="https://github.com/Euchie23" target="_blank" className="hover:text-emerald-400 transition-colors"><FaGithub size={22} /></a>
                  <a href="https://www.linkedin.com/in/euchiejnpierre/" target="_blank" className="hover:text-emerald-400 transition-colors"><FaLinkedin size={22} /></a>
                  <a href="mailto:euchiejnpierre@gmail.com" className="hover:text-emerald-400 transition-colors"><FaEnvelope size={22} /></a>
                </div>
              </div>
            </header>

            {/* --- THE HERO SECTION --- */}
            <section className="max-w-6xl mx-auto px-6 mb-24 mt-16">
              {/* The "Power Line" - Adjusted Size */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 mb-10 leading-tight">
                I build <span className="text-emerald-400">risk-aware decision-support systems</span> that turn complex environmental and operational data into <span className="text-emerald-400 italic">defensible, decision-ready insights</span>.
              </h1>

              {/* Quick Context / Location */}
              <div className="flex flex-wrap gap-4 mb-16 text-slate-500 font-mono text-[15px] uppercase tracking-[0.2em]">
                <span>Environmental Data Scientist</span>
                <span className="text-slate-800">|</span>
                <span>HSE-Q Risk Analyst</span>
                <span className="text-slate-800">|</span>
                <span>Saint Lucia — Taiwan</span>
              </div>
            </section>

            {/* --- FEATURED PROJECT --- */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
              <h3 className="text-emerald-500 font-mono text-[14px] uppercase tracking-[0.3em] mb-6 relative after:block after:w-full after:h-px after:bg-emerald-500 after:opacity-50 after:mt-2">
                Featured Project
              </h3>

              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/40 transition-all">
                
                <h2 className="text-2xl font-bold text-white mb-3">
                  Biomass Simulator — Climate Risk Tool
                </h2>

                <p className="text-slate-400 text-sm mb-6 max-w-2xl leading-relaxed">
                  Simulates how squid populations respond to ocean warming scenarios (+2°C), supporting fisheries risk assessment and climate-informed planning.
                </p>

                <ul className="text-slate-300 text-sm space-y-2 mb-6">
                  <li>• Models biomass response under climate scenarios</li>
                  <li>• Links environmental conditions to population dynamics</li>
                  <li>• Supports early-stage ecological risk evaluation</li>
                </ul>

                <div className="flex gap-4">
                  <a
                    href="https://squidstock-ocean-dynamics.streamlit.app"
                    target="_blank"
                    className="px-5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20 transition text-sm font-semibold"
                  >
                    Launch App
                  </a>

                  <a
                    href= "https://github.com/Euchie23/SquidStock/blob/main/Case_Study.md"
                    target="_blank"
                    className="px-5 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-400 transition text-sm font-semibold"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </section>

            {/* --- DECISION SUPPORT ARCHITECTURE --- */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
              <h3 className="text-emerald-500 font-mono text-[14px] uppercase tracking-[0.3em] mb-6 relative after:block after:w-full after:h-px after:bg-emerald-500 after:opacity-50 after:mt-2">
                Decision-Support Architecture
              </h3>

              <p className="text-slate-400 text-sm mb-10 max-w-2xl leading-relaxed">
                A consistent pipeline guiding all projects — transforming raw environmental and operational data into structured,
                decision-ready intelligence. Read left to right: from data ingestion to stakeholder-facing tools.
              </p>

              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 overflow-x-auto">

                {/* Mermaid container */}
                {/* <div className="mermaid text-sm">
                  {`flowchart LR
                    A[Data Sources<br/>Environmental, Fisheries, HSE] --> 
                    B[PostgreSQL / PostGIS<br/>QA/QC, Schemas, Governance] --> 
                    C[Analytics Layers<br/>R, Python, Statistics, ML] --> 
                    D[Decision-Support Tools<br/>Shiny, Streamlit] --> 
                    E[End Users<br/>Regulators, Consultancies, ESG, HSE]`}
                </div> */}
                {/* Mermaid container */}
                {!activeProject && (
                  <div
                    ref={mermaidRef}
                    className="cursor-zoom-in w-full"
                    onClick={(e) => {
                      const svgString = e.currentTarget.dataset.svg;
                      if (!svgString) return;

                      const blob = new Blob([svgString], {
                        type: "image/svg+xml;charset=utf-8",
                      });

                      const url = URL.createObjectURL(blob);
                      window.open(url, "_blank");
                    }}
                  />
                )}
              </div>

              <p className="text-slate-500 text-xs mt-6 font-mono uppercase tracking-widest">
                Turning environmental and operational data into defensible, decision-ready risk intelligence
              </p>
            </section>

            {/* --- THE PILLARS CONTAINER --- */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
              <h3 className="text-emerald-500 font-mono text-[14px] uppercase tracking-[0.3em] mb-6 relative after:block after:w-full after:h-px after:bg-emerald-500 after:opacity-50 after:mt-2">
                Decision-Support Domains
              </h3>

              <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 border-t border-slate-800/60 pt-12 text-left">


                  {/* Pillar 2: Marine Monitoring */}
                  <div className="flex flex-col space-y-3 lg:border-l lg:border-slate-800/40 lg:pl-10">
                    <h3 className="text-emerald-500 font-mono text-[15px] uppercase tracking-[0.3em] font-semibold">Marine Risk</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Executed an <span className="font-bold text-slate-200">end-to-end 3-year study</span> (NTU) identifying COVID-19 reprieve signals and conducting <span className="font-bold text-slate-200">Human Health Risk Evaluations (EDI/HQ)</span>.
                    </p>
                  </div>

                  {/* Pillar 3: Fisheries Dynamics */}
                  <div className="flex flex-col space-y-3 lg:border-l lg:border-slate-800/40 lg:pl-10">
                    <h3 className="text-emerald-500 font-mono text-[15px] uppercase tracking-[0.3em] font-semibold">Fisheries Dynamics</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Modeling a <span className="font-bold text-slate-200">21-year dataset</span> to establish historical baselines and simulate <span className="font-bold text-slate-200">biomass shifts</span> under +2°C climate warming scenarios.
                    </p>
                  </div>

                  {/* Pillar 4: Spatial Intelligence */}
                  <div className="flex flex-col space-y-3 lg:border-l lg:border-slate-800/40 lg:pl-10">
                    <h3 className="text-emerald-500 font-mono text-[15px] uppercase tracking-[0.3em] font-semibold">Spatial Intelligence</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Building <span className="font-bold text-slate-200">PostGIS & Python</span> pipelines. Modeling industrial <span className="font-bold text-slate-200">pollution plumes</span> and <span className="font-bold text-slate-200">biological hotspots</span> to identify spatial risk overlap.
                    </p>
                  </div>

                  {/* Pillar 1: Industrial HSE-Q */}
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-emerald-500 font-mono text-[15px] uppercase tracking-[0.3em] font-semibold">Industrial HSE-Q</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Designing <span className="font-bold text-slate-200">ISO 45001</span> compliant architectures for Oil & Gas. Transforming field safety into <span className="font-bold text-slate-200">audit-ready risk intelligence</span> for high-stakes operations.
                    </p>

                  </div>

                </div>
              </div>
            </section>

            {/* <main className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(RepoContent).map((key) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveProject(key)}
                  className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all cursor-pointer group"
                >
                  <div className="text-emerald-400 text-3xl mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {key === 'squidstack' && <FaBiohazard />}
                    {key === 'squidstock' && <FaFish />}
                    {key === 'geotentacles' && <FaGlobeAmericas />}
                    {key === 'hseq' && <FaHardHat />}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{RepoContent[key].title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{RepoContent[key].tagline}</p>
                  <p className="mt-6 text-emerald-500 text-xs font-mono uppercase tracking-
                  dest flex items-center gap-2">
                    Explore Technical Deep-Dive <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </p>
                </motion.div>
              ))}
            </main> */}

            <main className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
              {/* --- Squid Fest Suite --- */}
              <section>
                <h3 className="text-emerald-500 font-mono text-[14px] uppercase tracking-[0.3em] mb-6 relative after:block after:w-full after:h-px after:bg-emerald-500 after:opacity-50 after:mt-2">
                  Decision Intelligence Systems (Projects)
                </h3>
                <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
                  Environmental Decision Systems
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Tools for monitoring marine ecosystems, fisheries dynamics, and spatial intelligence.
                </p>
                <BentoGrid
                  repos={squidFestRepos.reduce((obj, key) => {
                    obj[key] = RepoContent[key];
                    return obj;
                  }, {})}
                  onCardClick={(key) => setActiveProject(key)}
                />
              </section>

              {/* --- HSE Risk Intelligence --- */}
              <section>
                <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
                  HSE Risk Intelligence
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Decision-support tools for high-stakes safety and regulatory compliance in oil & gas.
                </p>
                <BentoGrid
                  repos={hseRepos.reduce((obj, key) => {
                    obj[key] = RepoContent[key];
                    return obj;
                  }, {})}
                  onCardClick={(key) => setActiveProject(key)}
                />
              </section>
              {/* --- ABOUT ME / FUN FACTS --- */}
              <section className="relative z-10 bg-slate-950 max-w-5xl mx-auto px-8 py-20 mb-24 rounded-2xl shadow-xl">
                <h3 className="text-emerald-500 font-mono text-[14px] uppercase tracking-[0.3em] mb-6 relative after:block after:w-full after:h-px after:bg-emerald-500 after:opacity-50 after:mt-2 text-center">
                  About Me
                </h3>

                <ul className="text-slate-400 text-sm space-y-3 list-disc list-inside">
                  <li>Name pronunciation: <span className="text-emerald-400 font-semibold">Euchie Jn Pierre (You-Chee Juhn Pee-air)</span></li>
                  <li>Caribbean-born, raised with a deep respect for nature and community.</li>
                  <li>Studied and worked in Asia for 12+ years; intermediate Mandarin speaker with strong cross-cultural adaptability.</li>
                  <li>Passionate about translating data into real-world environmental and operational insights.</li>
                  <li>Outdoor enthusiast: long-distance cycling, mountain adventures, hiking, and nature walks — nature fuels creativity and resilience.</li>
                </ul>
              </section>
            </main>
          </motion.div>
        ) : (
          /* --- REPO CONTENT DETAIL VIEW --- */

          <motion.div
            key="detail"
            initial={{ opacity: 0, x: "100vw" }} // start offscreen to the right
            animate={{ opacity: 1, x: 0 }} // slide to normal position
            exit={{ opacity: 0, x: "-100vw" }}  // slide offscreen to the left
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 overflow-auto bg-slate-950 z-50"
          >

          {/* ✅ RESTORE THIS WRAPPER */}
          <div className="max-w-5xl mx-auto px-6 py-16">

            <div className="flex justify-center mb-16">
              <button 
                onClick={() => {
                  setActiveProject(null);
                  setDiagramKey(prev => prev + 1);
                }}
                className="
                  flex items-center gap-2
                  bg-red-500/10 hover:bg-red-500/20
                  text-red-400
                  text-sm font-semibold font-mono
                  px-5 py-2.5
                  rounded-lg
                  border border-red-500/30
                  hover:border-red-400
                  transition-all
                "
              >
                <FaArrowLeft className="text-xl" />
                ESC / BACK TO OVERVIEW
              </button>
            </div>

            <div className="mb-16">
                <h2 className="text-6xl font-extrabold mb-4 tracking-tighter">{RepoContent[activeProject].title}</h2>
                <p className="text-2xl text-emerald-400/80 font-light">{RepoContent[activeProject].tagline}</p>
                {/* <img
                src={RepoContent[activeProject].image}
                alt={`${RepoContent[activeProject].title} screenshot`}
                className="w-full rounded-lg my-6"
              /> */}
              </div>

              <img
                src={RepoContent[activeProject].image}
                alt={`${RepoContent[activeProject].title} screenshot`}
                className="w-full rounded-lg my-10"
              />
              {/* <BentoGrid repos={RepoContent} /> */}

              {/* --- EXECUTIVE SUMMARY --- */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-16">
                  <section>
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">Executive Summary</h4>
                    <p className="text-slate-300 text-xl leading-relaxed font-light">{RepoContent[activeProject].overview}</p>
                  </section>

                  {/* --- USED FOR SECTION--- */}
                  <section>
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">
                      Purpose
                    </h4>

                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                      <p className="text-slate-200 text-lg leading-relaxed">
                        {RepoContent[activeProject].usedFor}
                      </p>
                    </div>
                  </section>

                  {/* --- TECHNICAL SNAPSHOT --- */}
                  <section>
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">
                      Technical Snapshot
                    </h4>
                    <ul className="text-slate-400 text-lg leading-relaxed space-y-2">
                      {RepoContent[activeProject].technical?.map((t, i) => (
                        <li key={i}>• {t}</li>
                      ))}
                    </ul>
                  </section>

                  {/* --- DEMONSTRATION SCENARIO --- */}
                  <section>
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">
                      Demonstration Scenario
                    </h4>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {RepoContent[activeProject].scenario}
                    </p>
                  </section>

                  {/* --- VISUAL EVIDENCE (PLOTS) --- */}
                  {Array.isArray(RepoContent[activeProject].plots) && (
                    <section>
                      <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">
                        Visual Evidence
                      </h4>

                      <div className="space-y-10">
                        {RepoContent[activeProject].plots.map((plot, i) => {
                          console.log("PLOT DEBUG:", plot); // 👈 ADD THIS

                          return (
                            <div key={i} className="space-y-4">

                              {/* TITLE */}
                              <h5 className="text-lg font-semibold text-white">
                                {plot?.title || "NO TITLE"}
                              </h5>

                              {/* IMAGE */}
                              {plot?.type?.toLowerCase() === "svg" ? (
                                <ExpandableImage
                                  src={plot?.src}
                                  alt={plot?.title}
                                  // description={plot?.description}
                                  title={plot?.title}
                                />
                              ) : (
                                <img
                                  src={plot?.src}
                                  alt={plot?.title}
                                  className="w-full rounded-xl border border-slate-800"
                                />
                              )}

                              {/* DESCRIPTION */}
                              <p className="text-slate-200 text-sm leading-relaxed">
                                {plot?.description || "NO DESCRIPTION"}
                              </p>

                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}
                  {/* --- INTERPRETIVE INSIGHTS --- */}
                  <section>
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">
                      Interpretive Insights
                    </h4>
                    <ul className="text-slate-400 text-lg leading-relaxed space-y-3">
                      {RepoContent[activeProject].insights?.map((insight, i) => (
                        <li key={i}>• {insight}</li>
                      ))}
                    </ul>
                  </section>

                  {/* --- CORE METHODOLOGIES --- */}
                  <section className="space-y-10">
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-6 tracking-[0.2em] border-b border-emerald-500/20 pb-2">Core Methodologies</h4>
                    {RepoContent[activeProject].modules.map((m, i) => (
                      <div key={i} className="group">
                        <h5 className="font-bold text-xl mb-3 text-slate-100 group-hover:text-emerald-400 transition-colors">{m.name}</h5>
                        <p className="text-slate-400 leading-relaxed text-lg">{m.detail}</p>
                      </div>
                    ))}
                  </section>
                </div>

                <aside className="space-y-10">
                  <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 sticky top-8">
                    <h4 className="text-[12px]font-bold mb-6 text-xs uppercase tracking-widest text-slate-500">Project Links</h4>
                    <div className="flex flex-col gap-4">
                      {/* Main links */}
                      {RepoContent[activeProject].links.map((l, i) => (
                        <a
                          key={i}
                          href={l.url}
                          target="_blank"
                          className="flex flex-col p-4 bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 rounded-xl transition-all text-sm font-semibold"
                        >
                          <div className="flex items-center justify-between">
                            <span>{l.label}</span>
                            <FaExternalLinkAlt size={15} />
                          </div>
                          {l.subLabel && <span className="text-xs text-slate-400 mt-1">{l.subLabel}</span>}
                          {l.description && <span className="text-[12px] text-slate-500 mt-2 leading-snug">{l.description}</span>}
                        </a>
                      ))}

                      {/* Side links */}
                      <div className="mt-6 flex flex-col gap-3">
                        {RepoContent[activeProject].sideLinks.map((l, i) => (
                          <a
                            key={i}
                            href={l.url}
                            target="_blank"
                            className="text-emerald-400 text-xs hover:underline"
                          >
                            {l.label}
                            {l.description && <span className="block text-slate-500 mt-1 text-[12px]">{l.description}</span>}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="mt-10 pt-10 border-t border-slate-800">
                      <p className="text-[12px] text-slate-500 uppercase tracking-widest leading-loose">
                        Confidentiality Notice: All data displayed is simulated to protect proprietary interests while maintaining analytical fidelity.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

