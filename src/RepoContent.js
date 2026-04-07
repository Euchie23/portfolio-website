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
    overview: "A suite of interactive dashboards that transforms marine pollution data into clear signals for ecosystem health and seafood safety. Built from multi-year research, it enables stakeholders to monitor contamination trends, assess risk, and act early.",
    technical: [
      "Data: Multi-year contaminant dataset (simulated, structurally representative)",
      "Pipeline: QA/QC → exploratory analysis → temporal trends → EDI/HQ risk modeling",
      "Stack: R (Shiny), ggplot2, dplyr",
      "Architecture: End-to-end decision-support pipeline from lab validation to risk outputs"
    ],

    scenario: "Simulates dietary exposure for high-consumption adults (95th percentile) using country-specific data (population weight and squid consumption). Argentina and Taiwan are shown as examples, but the model can assess any country with available input data. Contaminant concentrations in squid tissues are translated into Estimated Daily Intake (EDI) and Hazard Quotients (HQ), enabling stakeholders to explore variability across populations, tissues, and geographic regions under adjustable scenarios.",
    plots: [
      {
        title: "Estimated Daily Intake (EDI) Comparison",
        description:
          "Taiwan shows higher EDI across both normal and extreme scenarios due to higher squid consumption rates, indicating elevated exposure risk.",
        src: squidStackEdi
      },
      {
        title: "Hazard Quotient (HQ) Comparison",
        description:
          "HQ values are consistently higher for Taiwan, with extreme scenarios approaching or exceeding risk thresholds, highlighting population-specific vulnerability.",
        src: squidStackHq
      }
    ],

    insights: [
      "Exposure risk varies by country and scenario. Taiwan consistently shows the highest hazard for heavy metals across 2019–2021, with extreme consumption scenarios driving the greatest concern, followed by normal consumption. Argentina exhibits lower risk, though in 2019 extreme exposure for organics slightly exceeds Taiwan’s normal scenario.",
      "Under normal conditions, both countries show minimal risk from organics, while extreme consumption scenarios reveal emerging priorities, particularly for metals in Taiwan.",
      "Cross-year trends indicate that hazard patterns are generally stable for metals, with minor year-to-year shifts for organics, supporting targeted monitoring and adaptive risk management."
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
    overview: "A decision-support platform for squid fisheries that integrates standardized CPUE, mechanistic biomass simulation, and predictive modeling to assess stock dynamics under environmental change. It connects observed catch trends with modeled population responses, helping managers evaluate when CPUE reflects true abundance and when it may mislead decisions.",
    technical: [
      "Data: Multi-year fisheries dataset (catch records, environmental covariates)",
      "Pipeline: preprocessing → CPUE standardization → biomass simulation → scenario testing → predictive forecasting",
      "Stack: Python, Streamlit, pandas, scikit-learn, PyCaret",
      "Architecture: Modular app-based analytics pipeline integrating mechanistic and machine learning models"
    ],

    scenario: "Simulates a squid population starting at ~3 million tons under stable, low fishing pressure. Growth is driven by ocean conditions—especially temperature and productivity—with an assumed optimal temperature range for the species. The model compares baseline conditions with a +2°C warming scenario using a simplified environmental index. It excludes migration, ecosystem interactions, and changing fishing behavior to isolate how environmental change affects biomass and how reliably CPUE reflects those changes.",
    plots: [
      {
        title: "Biomass Under Warming Scenarios",
        description:
          "Simulated biomass diverges under +2°C warming, showing ~10% higher growth relative to baseline. Warming moves environmental temperatures closer to the species’ thermal optimum, though the model ignores migration, upwelling productivity, and ecosystem responses, likely overestimating real-world benefits.",
        src: biomassScenarios
      },
      {
        title: "Temperature-Dependent Growth Rate (Time Series)",
        description:
         "Orange dashed line shows modeled growth rate (r_t) over time; teal line shows biomass. Growth fluctuates between ~0.01–0.03 depending on proximity to the thermal optimum. Higher r_t (~0.025–0.03) slows biomass decline; lower r_t (~0.01–0.015) accelerates it. Note: this pattern reflects a simplified temperature-driven model and does not include feeding, migration, or stage-specific preferences.",
        src: tempGrowth
      },
      {
        title: "CPUE vs Biomass Relationship",
        description:
          "Catch per unit effort (CPUE) shows weak correlation with true biomass (correlation ~0.09). Even as biomass declines steadily, CPUE exhibits high variability due to aggregation, short-term environmental changes, and model simplifications. This demonstrates that CPUE is an unreliable standalone proxy for population status.",
        src: cpueScatter
      }
    ],
    insights: [
      "Environmental conditions significantly influence biomass trends, with temperature changes altering growth dynamics over time.",
      "Warming scenarios increase modeled biomass, but likely represent an upper-bound estimate due to simplified ecological assumptions.",
      "CPUE is a weak proxy for true abundance, as catch rates are influenced by aggregation and fishing dynamics.",
      "Combining standardized CPUE with environmental modeling improves reliability for interpreting stock trends and supporting management decisions."
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
  overview: "GeoTentacles is a suite of interactive spatial analytics tools that turn scattered marine and environmental data into actionable insights. The platform integrates monitoring, ecosystem assessment, and predictive modeling to help managers prioritize interventions, assess risk, and plan operations effectively.",

  technical: [
    "Data: Multi-year environmental, pollution, and fisheries datasets",
    "Pipeline: preprocessing → spatial analytics → predictive modeling → scenario evaluation",
    "Stack: Python, R, PostGIS, Folium, Streamlit, Shiny, scikit-learn",
    "Models: Random Forest for ecological and operational hotspot prediction; ElasticNet regression for pollution and environmental intensity forecasting",
    "Architecture: Modular app-based platform combining monitoring, prediction, and decision-support modules"
  ],

  scenario: "MarineScope, part of the GeoTentacles platform, provides spatially-interpretable insights into marine ecosystem condition. The platform highlights areas of elevated pollutant risk (Toxic Tide Mapping), aggregates scattered biological and environmental observations into a continuous ecosystem health metric (EcoPulse Index), and assesses ecosystem responses to human activity disruptions, such as COVID-related changes (Disruption Dynamics). Together, these visualizations guide monitoring, resource prioritization, and evidence-based decision-making in complex marine environments.",
  plots: [
    {
      title: "Toxic Tide Mapping — Metal_A Screening",
      description:
        "Spatial grid showing model-predicted concentrations of Metal_A using the environment-only model. Risk levels range from low to high, highlighting priority areas for monitoring and mitigation. Supports early-stage screening and spatial prioritization for marine management decisions.",
      src: toxicTideMapping // replace with your imported image variable
    },
    {
      title: "EcoPulse Index — Marine Health Overview",
      description:
        "Aggregated sampling locations visualized by EcoPulse Index, a spatial metric integrating pollution exposure and biological condition. Color-coded points indicate stress-to-resilience gradients, providing decision-makers a clear view of ecosystem condition and areas for follow-up action.",
      src: ecoPulseIndex // replace with your imported image variable
    },
    {
      title: "Ecosystem Response — Pre/Post COVID",
      description:
        "Bar chart comparing marine ecosystem condition using EcoPulse Index before and after COVID-19. Shows a modest decline in ecosystem health post-COVID, highlighting regional sensitivity and supporting evidence-based monitoring and management decisions.",
      src: disruptionEcosystem // replace with your imported image variable
    },
    {
      title: "Human Pressure Contributions — Pre/Post COVID",
      description:
        "Bar chart showing relative contributions of industrial and agricultural pressures to ecosystem condition before and after COVID-19. Highlights dominant stressors and informs decision-making for targeted interventions and resource allocation.",
      src: disruptionPressure // replace with your imported image variable
    }
  ],

  insights: [
    "Aggregates sparse observations into clear, spatially-interpretable insights for decision-making.",
    "Predictive models highlight likely hotspots for both ecological risk and operational focus.",
    "Integration of historical and current spatial data supports scenario-informed resource allocation.",
    "Interactive visualizations using Folium and Streamlit improve stakeholder communication and rapid operational planning."
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
    tagline: "Operational Safety & Risk Governance",

    overview: "A risk intelligence platform that structures day-to-day safety data into a connected system for monitoring, analysis, and decision-making. It integrates tasks, hazards, incidents, and corrective actions into a unified framework, enabling organizations to track risk, improve accountability, and support audit-ready safety management. The system is currently in development, with core database architecture and risk workflows implemented, and dashboards planned as the next phase.",

    technical: [
      "Data: Structured HSE records (tasks, hazards, observations, incidents, attendance, controls)",
      "Pipeline: data capture → relational linking → risk scoring → control effectiveness evaluation → corrective action tracking → KPI reporting",
      "Stack: PostgreSQL, normalized relational schema, ERD-driven system design",
      "Methods: Risk scoring (severity × probability), control effectiveness tracking, workflow governance aligned with ISO 45001 & NEBOSH principles"
    ],

    scenario: "In an active industrial environment, multiple tasks are executed daily across zones and phases, each with varying levels of risk exposure. The system structures how hazards are identified, assessed, controlled, and tracked over time. For example, a hazard identified during a task is linked to controls, evaluated for effectiveness, and escalated into corrective actions if risk persists—ensuring full traceability from detection to resolution within a centralized workflow.",
    plots: [
      {
        title: "Risk Intelligence System Architecture",
        description:
          "Entity Relationship Diagram (ERD) showing how tasks, hazards, controls, incidents, and corrective actions are structurally linked. The system captures the full risk lifecycle—from hazard identification and control implementation to incident response and corrective action tracking—ensuring audit-ready traceability and enabling advanced risk analytics.",
        src: hseqERD,   // your ERD image or rendered diagram
        type: "svg"
      }
    ],
    insights: [
      "Risk is dynamic and must be monitored continuously across task execution, not assessed only at planning stage.",
      "Tracking control effectiveness provides deeper insight than simply recording hazard presence.",
      "Linking observations, incidents, and corrective actions creates full lifecycle visibility and improves accountability.",
      "Structured data enables trend analysis across zones and phases, supporting proactive rather than reactive safety management."
    ],

    image: placeholderHSEQ,

    modules: [
      {
        name: "Decision Context",
        detail: "Supports site managers, HSE officers, and consultants in identifying high-risk activities, monitoring safety performance, and ensuring compliance with safety standards."
      },
      {
        name: "System Design",
        detail: "Built as a relational risk intelligence system connecting tasks, hazards, controls, incidents, and corrective actions into a unified and traceable workflow."
      },
      {
        name: "Decision Impact",
        detail: "Enables proactive risk management, improves intervention tracking, and supports data-driven safety decisions across daily operations and long-term planning."
      }
    ],

    links: [
      {
        label: "HSE Risk Intelligence System",
        subLabel: "Database & Architecture",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/",
        description: "Core system showcasing database design, risk workflows, and safety intelligence architecture.",
        flagship: true
      },
      {
        label: "Operations Manual",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/docs/Database_Operations_Manual.md",
        description: "Detailed documentation covering system logic, governance rules, and operational workflows."
      }
    ],

    sideLinks: [
      {
        label: "Entity Relationship Diagram (ERD)",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/#conceptual-risk-intelligence-model",
        description: "Visual overview of how tasks, hazards, controls, and incidents connect within the system."
      },
      {
        label: "How It Works (Non-Technical)",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/HOW_IT_WORKS.md",
        description: "Simple explanation of how the system captures, connects, and uses safety data."
      },
      {
        label: "Technical Case Study",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/Case_Study.md",
        description: "Detailed breakdown of system architecture, data models, and risk workflows."
      },

      {
        label: "Ask Your Questions",
        url: "mailto:euchiejnpierre@gmail.com",
        description: "Reach out for walkthroughs, consulting discussions, or technical clarifications."
      }
    ]
  }
};

