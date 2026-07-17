// Top images for inside the card
import placeholderSquidStack from "./images/squidstackapp.webp";
import placeholderSquidStock from "./images/squidstockapp.webp";
import placeholderGeoTentacles from "./images/geotentaclesapp.webp";
import placeholderHSEQ from "./images/hseq.webp";

// Background images for the card panel
import bgSquidStack from "./images/squidstack.webp";
import bgSquidStock from "./images/squidstock.webp";
import bgGeoTentacles from "./images/geotentacles.webp";
import bgHSEQ from "./images/hseq.webp";

// Plots and Graph Images to be Rendered in Bento Cards
//SquidStack
import squidStackEdi from "./images/EDI.webp";
import squidStackHq from "./images/HQ.webp";
//SquidStock
import biomassScenarios from "./images/biomass_scenarios_comparison.webp";
import tempGrowth from "./images/temperature_dependent_growth_rate.webp";
import cpueScatter from "./images/cpue_vs_biomass_comparison.webp";
//GeoTentacles
import toxicTideMapping from "./images/toxictidemapping.webp";
import ecoPulseIndex from "./images/ecopulseindex.webp";
import disruptionEcosystem from "./images/disruptionEcosystem.webp";
import disruptionPressure from "./images/disruptionPressure.webp";
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

    overview: "Explores how environmental forcing, biomass dynamics, fishing pressure, and CPUE signals interact under baseline and warming scenarios.",

    usedFor: "Used to test biomass response under climate scenarios, evaluate CPUE reliability, and support risk-aware fisheries decision-making.",

    technical: [
      "CPUE standardisation across multi-year fisheries datasets",
      "Mechanistic biomass simulation under baseline and +2°C warming scenarios",
      "Temperature-dependent growth, productivity forcing, and catchability-based harvest modelling",
      "Python + Streamlit interactive decision-support pipeline",
      "Hybrid ecological + predictive fisheries analytics framework"
    ],

    scenario: "Simulates squid population response under baseline and warming conditions, then compares CPUE against selected biomass scenarios to assess whether catch rates reliably reflect stock dynamics.",

    plots: [
      {
        title: "Biomass Under Warming Scenarios",
        description:
          "Compares baseline biomass against a +2°C warming scenario. The warming line sits slightly above baseline, showing a modest positive biomass response, while the percentage-change panel shows the stock ending around 5% higher under current model assumptions.",
        src: biomassScenarios
      },
      {
        title: "Temperature-Dependent Growth",
        description:
          "Shows simulated biomass alongside the temperature-dependent growth rate (rₜ). Biomass increases gradually while rₜ fluctuates through time, indicating that temperatures remain reasonably close to the modelled thermal optimum and support positive growth.",
        src: tempGrowth
      },
      {
        title: "CPUE vs Biomass",
        description:
          "Shows that CPUE does not reliably follow simulated biomass. In the current scenario, biomass trends upward while CPUE fluctuates and can move in the opposite direction, producing a weak to moderate negative relationship and warning that catch rates alone may misrepresent stock status.",
        src: cpueScatter
      }
    ],

    insights: [
      "SST influences biomass through a temperature-dependent growth response.",
      "Chlorophyll-a acts as a productivity modifier rather than being merged directly with temperature into one environmental index.",
      "CPUE should not be treated as a standalone abundance indicator, especially for mobile and aggregating squid.",
      "Moderate warming may produce small biomass gains in the model, but real-world benefits may be overestimated because migration, upwelling, and spatial habitat shifts are simplified."
    ],

    image: placeholderSquidStock,
    modules: [
      {
        name: "Decision Context",
        detail: "Helps fisheries managers and policymakers understand stock variability, environmental sensitivity, harvest pressure, and the reliability of CPUE as an abundance indicator."
      },
      {
        name: "System Design",
        detail: "Combines mechanistic biomass simulation with standardized and predictive CPUE workflows, separating thermal suitability, productivity forcing, and fishing pressure to support clearer scenario interpretation."
      },
      {
        name: "Decision Impact",
        detail: "Enables users to compare baseline and warming biomass scenarios, identify when CPUE may misrepresent abundance, and stress-test climate-risk assumptions before making monitoring or quota decisions."
      }
    ],

    links: [
      {
        label: "Biomass Simulator & Estimation Module",
        subLabel: "Ocean Dynamics",
        url: "https://squidstock-ocean-dynamics.streamlit.app",
        description: "Flagship module: simulates squid biomass under baseline and warming scenarios, quantifying how temperature-dependent growth, productivity conditions, catchability, and fishing effort interact to shape stock trajectories and decision risk.",
        flagship: true
      },

      {
        label: "View Full Project & Data Suite",
        url: "https://github.com/Euchie23/SquidStock/",
        description: "Access the full SquidStock suite covering Temporal Catch Analysis, CPUE Standardization and Prediction, and Biomass Simulation under Warming Scenarios."
      }
    ],

    sideLinks: [
      {
        label: "Technical Case Study",
        url: "https://github.com/Euchie23/SquidStock/blob/main/Case_Study.md",
        description: "Explore the detailed project workflow, assumptions, and analysis approach."
      },
      {
        label: "Notebooks & Methods",
        url: "https://github.com/Euchie23/SquidStock/tree/main/notebooks/",
        description: "Review the analytical notebooks and modelling methods used."
      },
      {
        label: "Ask Your Questions",
        url: "mailto:euchiejnpierre@gmail.com",
        description: "Reach out for clarifications or additional insights."
      }
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

