// Top images for inside the card
import placeholderSquidStack from "./images/squidstackapp.png";
import placeholderSquidStock from "./images/squidstockapp.png";
import placeholderGeoTentacles from "./images/geotentaclesapp.png";
import placeholderHSEQ from "./images/hseq.png";

// Background images for the card panel
import bgSquidStack from "./images/squidstack.jpeg";
import bgSquidStock from "./images/squidstock.jpeg";
import bgGeoTentacles from "./images/geotentacles.png";
import bgHSEQ from "./images/hseq.png";

// Plots and Graph Images to be Rendered in Bento Cards
//SquidStack
import squidStackEdi from "./images/EDI.png";
import squidStackHq from "./images/HQ.png";
//SquidStock
import biomassScenarios from "./images/biomass_scenarios_comparison.png";
import tempGrowth from "./images/temperature_dependent_growth_rate.png";
import cpueScatter from "./images/cpue_vs_biomass_comparison.png";
//GeoTentacles
import toxicTideMapping from "./images/toxictidemapping.png";
import ecoPulseIndex from "./images/ecopulseindex.png";
import disruptionEcosystem from "./images/disruptionEcosystem.png";
import disruptionPressure from "./images/disruptionPressure.png";
//HSEQ
import hseqERD from "./images/ERD_white.svg";

export const RepoContent = {
  squidstack: {
    title: "SquidStack",
    tagline: "Marine Pollution & Risk Intelligence",

    overview: "Translates marine contamination data into human health risk signals (EDI/HQ) for seafood safety and exposure assessment.",

    usedFor: "Used to assess seafood safety risk and quantify population-level exposure under real consumption scenarios.",

    technical: [
      "CRM-validated multi-year contaminant datasets (metals + organics)",
      "EDI / HQ exposure risk modelling pipeline",
      "R + Shiny interactive analytics dashboards",
      "End-to-end contamination → risk transformation workflow"
    ],

    scenario: "Models population-level exposure using country-specific consumption profiles to convert contamination levels into EDI/HQ risk signals.",

    plots: [
      {
        title: "Estimated Daily Intake (EDI)",
        description:
          "Taiwan shows consistently higher exposure due to elevated consumption rates, indicating increased population-level risk.",
        src: squidStackEdi
      },
      {
        title: "Hazard Quotient (HQ)",
        description:
          "Higher HQ values in Taiwan highlight greater vulnerability under both normal and extreme consumption scenarios.",
        src: squidStackHq
      }
    ],

    insights: [
      "Taiwan consistently shows higher exposure risk due to consumption intensity.",
      "Extreme intake scenarios drive hazard escalation for heavy metals.",
      "Organic contaminants remain low under normal conditions but increase under stress scenarios."
    ],

    image: placeholderSquidStack,
    modules: [
      {
        name: "Decision Context",
        detail: "Guides regulators, public health authorities, and environmental teams to identify contamination patterns, interpret exposure risk, and prioritize monitoring and policy actions."
      },
      {
        name: "System Design",
        detail: "Integrates validated laboratory measurements with structured workflows to transform complex contaminant data into reliable, decision-ready indicators."
      },
      {
        name: "Decision Impact",
        detail: "Supports early detection of ecosystem stress, informs sustainable seafood consumption guidance, and provides actionable insights for environmental monitoring and public health interventions."
      }
    ],

    links: [
      {
        label: "Dietary Risk & Exposure Intelligence Module",   // consultancy name
        subLabel: "Risk Evaluation",
        url: "https://euchie23.shinyapps.io/risk_evaluation/",
        description: "Flagship app for translating contaminant data into human health risk insights. Interactive tools enable scenario-based exploration, identification of priority pollutants, and actionable recommendations.",
        flagship: true
      },
      {
        label: "View Full Project & Data Suite",
        url: "https://github.com/Euchie23/SquidStack/",
        description: "Explore complementary modules covering analytical validation, exploratory dashboards, and temporal trend analyses including COVID-19 reprieve periods."
      }
    ],
    sideLinks: [
      { label: "Technical Case Study", url: "https://github.com/Euchie23/SquidStack/blob/main/Case_Study.md", description: "Deep dive into the full project workflow, decision-support framework, and risk evaluation methodology." },
      { label: "Request Full Analytical Workflow", url: "mailto:euchiejnpierre@gmail.com", description: "Request the complete Shiny app code or ask any question." }
    ]
  },

  squidstock: {
    title: "SquidStock",
    tagline: "Fisheries Analytics & Predictive Insight",

    overview: "Separates true biomass dynamics from misleading CPUE signals under climate variability.",

    usedFor: "Used to detect true stock trends and forecast climate-driven shifts in fishery abundance.",

    technical: [
      "CPUE standardisation across multi-year fisheries datasets",
      "Mechanistic biomass simulation under +2°C climate scenarios",
      "Python + Streamlit predictive modelling pipeline",
      "Hybrid ecological + ML forecasting framework"
    ],

    scenario: "Simulates squid population response under warming conditions to evaluate how reliably CPUE reflects true biomass dynamics.",

    plots: [
      {
        title: "Biomass Under Warming Scenarios",
        description:
          "Warming produces ~10% biomass increase under simplified ecological assumptions, likely representing an upper-bound response.",
        src: biomassScenarios
      },
      {
        title: "Temperature-Dependent Growth",
        description:
          "Growth rate varies with thermal optimum (r ≈ 0.01–0.03), directly influencing biomass stability.",
        src: tempGrowth
      },
      {
        title: "CPUE vs Biomass",
        description:
          "Weak correlation (r ≈ 0.09) shows CPUE is an unreliable proxy for true population size under environmental variability.",
        src: cpueScatter
      }
    ],

    insights: [
      "Temperature is the primary driver of biomass variation in the model.",
      "CPUE is an unreliable proxy for true population size.",
      "Warming scenarios likely overestimate real-world growth."
    ],

    image: placeholderSquidStock,
    modules: [
      {
        name: "Decision Context",
        detail: "Helps fisheries managers and policymakers understand stock variability, environmental sensitivity, and reliability of CPUE as an abundance indicator."
      },
      {
        name: "System Design",
        detail: "Combines mechanistic biomass simulation with standardized and predictive CPUE workflows, linking environmental signals to operational fisheries decisions."
      },
      {
        name: "Decision Impact",
        detail: "Enables managers to identify when CPUE may misrepresent stock abundance, evaluate warming impacts on biomass, and make scenario-informed decisions for quota setting, monitoring, and climate-risk planning."
      }
    ],
    links: [
      {
        label: "Biomass Simulator & Estimation Module",   // consultancy name
        subLabel: "Ocean Dynamics",                // your original name
        url: "https://squidstock-ocean-dynamics.streamlit.app",
        description: "Flagship module: simulates squid biomass dynamics under baseline and warming scenarios, quantifying how temperature-driven growth and fishing pressure interact to shape stock trajectories and management risk.",
        flagship: true
      },

      {
        label: "View Full Project & Data Suite",
        url: "https://github.com/Euchie23/SquidStock/",
        description: "Access the other modules covering Temporal CPUE analysis, CPUE Standardization and Prediction, and Biomass Simulations under Warming Scenarios"
      }
    ],

    sideLinks: [
      { label: "Technical Case Study", url: "https://github.com/Euchie23/SquidStock/blob/main/Case_Study.md", description: "Explore the detailed project workflow and analysis approach." },
      { label: "Notebooks & Methods", url: "https://github.com/Euchie23/SquidStock/tree/main/notebooks/", description: "Review the analytical notebooks and modeling methods used." },
      { label: "Ask Your Questions", url: "mailto:euchiejnpierre@gmail.com", description: "Reach out for clarifications or additional insights." }
    ]
  },


  geotentacles: {
    title: "GeoTentacles",
    tagline: "Spatial Marine Intelligence & Decision Support",

    overview: "Transforms fragmented environmental data into spatial risk maps for pollution and ecosystem health.",

    usedFor: "Used to identify pollution hotspots and prioritise spatial environmental risk interventions.",

    technical: [
      "Multi-source environmental + fisheries datasets",
      "Spatial interpolation (IDW) + Random Forest hotspot prediction",
      "PostGIS geospatial database pipeline",
      "Python + Folium + Streamlit spatial analytics system"
    ],

    scenario: "Maps pollution gradients and ecosystem health patterns to identify high-risk marine zones and environmental stress areas.",

    plots: [
      {
        title: "Toxic Tide Mapping",
        description:
          "Spatial model identifies pollutant hotspots for early-stage environmental risk prioritisation.",
        src: toxicTideMapping
      },
      {
        title: "EcoPulse Index",
        description:
          "Combines biological and pollution signals into a continuous ecosystem health gradient.",
        src: ecoPulseIndex
      },
      {
        title: "Ecosystem Response (COVID)",
        description:
          "Shows modest post-COVID decline in ecosystem health, indicating environmental sensitivity.",
        src: disruptionEcosystem
      },
      {
        title: "Human Pressure Contributions",
        description:
          "Shifts in industrial vs agricultural pressure highlight dominant environmental stress drivers.",
        src: disruptionPressure
      }
    ],

    insights: [
      "Sparse environmental data is transformed into continuous, decision-ready risk surfaces.",
      "Hotspot models identify priority monitoring zones.",
      "Ecosystem health indices reveal spatial stress gradients."
    ],

    image: placeholderGeoTentacles,

    modules: [
    {
      name: "Decision Context",
      detail: "Helps stakeholders understand where risk, environmental stress, and resource value intersect in marine systems."
    },
    {
      name: "System Design",
      detail: "Combines geospatial data, mapping workflows, and predictive models into a modular suite that turns fragmented datasets into actionable intelligence."
    },
    {
      name: "Decision Impact",
      detail: "Supports targeted monitoring, scenario-informed planning, and operational prioritization through easy-to-interpret maps and predictions."
    }
  ],

  links: [
    {
      label: "MarineScope",
      subLabel: "Environmental & Operational Insights",
      url: "https://geotentacles-marinescope.streamlit.app",
      description: "Visualizes ecosystem health, pollution distribution, and operational hotspots through interactive spatial layers.",
      flagship: true
    },
    {
      label: "View Full Project & Data Suite",
      url: "https://github.com/Euchie23/GeoTentacles/",
      description: "Access other modules, including predictive analysis of squid aggregations and spatial risk assessments."
    }
  ],

  sideLinks: [
    { label: "Technical Case Study", url: "https://github.com/Euchie23/GeoTentacles/blob/main/Case_Study.md", description: "Explore the full workflow, methods, and model integration." },
    { label: "Request Extended Data & Models", url: "mailto:euchiejnpierre@gmail.com", description: "Request interactive dashboards, Shiny code, or additional datasets." }
  ]
  },

  hseq: {
    title: "HSE Risk Intelligence",
    tagline: "Operational Safety, Risk Engineering & Decision Intelligence",

    overview: "Transforms daily industrial operations into a structured, traceable risk intelligence system combining planning, execution, automation, and predictive analysis.",

    usedFor: "Used to monitor operational risk in real time, automate safety workflows, and generate audit-ready, decision-grade safety intelligence.",

    technical: [
      "Relational HSE database (tasks, hazards, controls, incidents, workforce)",
      "Dynamic risk engine (conditions + controls + barrier integrity)",
      "Bowtie risk modeling (threats, barriers, consequences)",
      "Barrier effectiveness scoring system",
      "Event-driven automation (hazards, actions, validations)",
      "Scenario simulation engine (what-if risk modelling)",
      "KPI & analytics layer (leading + lagging indicators)",
      "PostgreSQL + Streamlit architecture",
      "ISO 45001, NEBOSH-aligned governance framework"
    ],

    scenario: "Captures how risk emerges from real-world conditions, evaluates control and barrier performance, simulates failure scenarios, and drives corrective actions across industrial operations.",

    plots: [
      {
        title: "Risk Intelligence Architecture",
        description:
          "ERD showing full lifecycle from planning and execution to automation, bowtie modeling, risk scoring, and KPI analytics.",
        src: hseqERD,
        type: "svg"
      }
    ],

    insights: [
      "Risk is dynamic and evolves during execution, not just planning.",
      "Barrier integrity is a key driver of operational risk.",
      "Automation ensures consistent hazard detection and response.",
      "Simulation enables proactive decision-making before failure occurs.",
      "Structured data enables audit-ready and AI-ready safety systems."
    ],

    image: placeholderHSEQ,

    modules: [
      {
        name: "Decision Context",
        detail: "Supports site managers, HSE officers, and executives in identifying high-risk activities, evaluating barrier integrity, and maintaining operational safety compliance."
      },
      {
        name: "System Design",
        detail: "Built as a modular risk intelligence platform integrating task execution, hazard modeling (bowtie), control effectiveness, automation, simulation, and KPI analytics into a unified system."
      },
      {
        name: "Decision Impact",
        detail: "Enables proactive risk mitigation, automated corrective action workflows, and data-driven decision-making across daily operations and long-term planning."
      }
    ],

    links: [
      {
        label: "HSE Risk Intelligence System",
        subLabel: "Database & Architecture",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/",
        description: "Core system showcasing database design, automation, risk modeling, and safety intelligence architecture.",
        flagship: true
      },
      {
        label: "Operations Manual",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/docs/Database_Operations_Manual.md",
        description: "Detailed documentation covering system logic, governance rules, automation, and risk workflows."
      }
    ],

    sideLinks: [
      {
        label: "Entity Relationship Diagram (ERD)",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/#conceptual-risk-intelligence-model",
        description: "Visual overview of how planning, execution, hazards, controls, automation, and analytics connect."
      },
      {
        label: "How It Works (Non-Technical)",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/HOW_IT_WORKS.md",
        description: "Step-by-step explanation of how the system captures, connects, and uses safety data."
      },
      {
        label: "Technical Case Study",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/Case_Study.md",
        description: "Detailed breakdown of architecture, risk engine, automation, and simulation layers."
      },
      {
        label: "Ask Your Questions",
        url: "mailto:euchiejnpierre@gmail.com",
        description: "Reach out for walkthroughs, consulting discussions, or technical clarifications."
      }
    ]
  }
};

