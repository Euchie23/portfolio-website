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
import hseqArchitecture from "./images/operational_architecture.gif";

export const RepoContent = {
  squidstack: {
    title: "SquidStack",
    tagline: "Marine Pollution & Human Health Risk Intelligence",

    overview: "Transforms marine contamination data into interpretable human health risk indicators (EDI/HQ), connecting laboratory measurements, exposure assumptions, and population-level risk.",

    usedFor: "Supports seafood safety assessment by testing exposure scenarios, identifying priority contaminants, and translating analytical measurements into decision-ready risk indicators.",

    technical: [
      "Multi-year, laboratory-validated contaminant datasets covering metals and organic contaminants",
      "EDI / HQ exposure risk modelling pipeline",
      "R + Shiny interactive analytics application",
      "Scenario-based exposure analysis using country-specific consumption profiles",
      "End-to-end contamination → exposure → risk transformation workflow"
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
        label: "Watch the 5-Minute Guided Tour",
        subLabel: "Risk Evaluation Walkthrough",
        url: "https://youtu.be/YYWmWo-iLIg",
        description:
          "See how the dashboard tests dietary exposure assumptions, compares EDI and HQ scenarios, communicates uncertainty, and records decision-support notes.",
        type: "video"
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
    tagline: "Fisheries Analytics & Climate Scenario Modeling",

    overview: "Analyzes how environmental conditions, biomass dynamics, fishing pressure, and CPUE interact, using historical fisheries data and scenario modelling to evaluate climate-related decision risk.",

    usedFor: "Supports fisheries planning by comparing baseline and warming scenarios, testing biomass assumptions, and evaluating when CPUE may provide an unreliable signal of stock status.",

    technical: [
      "21-year fisheries dataset used to establish historical baselines",
      "CPUE standardisation across multi-year fisheries datasets",
      "Mechanistic biomass simulation under baseline and +2°C warming scenarios",
      "Temperature-dependent growth, productivity forcing, and fishing-pressure modelling",
      "Python + Streamlit interactive decision-support application",
      "Scenario analysis combining ecological dynamics with fisheries indicators"
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
        label: "Watch the 5-Minute Guided Tour",
        subLabel: "Ocean Dynamics Walkthrough",
        url: "https://youtu.be/UeumWYCHvPI",
        description:
          "See how users adjust ecological and fisheries assumptions, compare baseline and warming scenarios, interpret CPUE reliability, and restore saved analytical states.",
        type: "video"
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
    tagline: "Geospatial Environmental Intelligence & Risk Mapping",

    overview: "Transforms fragmented environmental and geospatial data into spatial risk surfaces that reveal pollution patterns, ecosystem stress, and priority monitoring areas.",

    usedFor: "Supports spatial risk assessment by identifying pollution hotspots, mapping ecosystem stress, and helping prioritize environmental monitoring and intervention.",

    technical: [
      "Multi-source environmental, biological, and fisheries datasets",
      "PostGIS geospatial data pipeline",
      "Spatial interpolation using IDW",
      "Random Forest hotspot prediction",
      "Python + Folium + Streamlit spatial analytics application",
      "Interactive spatial risk mapping and environmental intelligence"
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
      label: "Watch the 5-Minute Guided Tour",
      subLabel: "MarineScope Walkthrough",
      url: "https://youtu.be/m0ECpnxTsNI",
      description:
        "See how MarineScope transforms sampled and modelled environmental data into pollution surfaces, ecosystem-condition indicators, disruption analysis, and reusable investigation notes.",
      type: "video"
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
    tagline: "Operational HSE Decision Support & Risk Intelligence",

    overview:
      "Connects planning, field execution, observations, hazards, controls, incidents, corrective actions, emergency preparedness, and confirmed reporting in a traceable operational HSE system.",

    usedFor:
      "Designed to structure field HSE evidence, preserve operational relationships, support follow-up and verification, and turn daily site records into management-ready information.",

    technical: [
      "PostgreSQL relational architecture for operational HSE data",
      "Guided Streamlit workflows for field data entry and review",
      "Planned Work Packages, PTW, JSA, and Method Statement workflows",
      "Task execution, attendance, PPE/control verification, and weather context",
      "Observation → hazard → control traceability",
      "Incident/event lifecycle with task and observation relationships",
      "Corrective-action assignment, verification, and controlled closure",
      "Emergency drill lifecycle and operational record linkage",
      "Immutable daily management-report snapshots",
      "Multi-site, zone-lineage, security, and approval foundations"
    ],

    scenario:
      "Structures what happened on site, what risks and controls were identified, what incidents or follow-up occurred, and what management ultimately confirmed in the daily operational record.",

    plots: [
      {
        title: "Operational Risk Architecture",
        description:
          "Animated view of how operational foundation, field work, risk detection, incident response, follow-up, and management reporting connect.",
        src: hseqArchitecture,
        type: "image"
      }
    ],

    insights: [
      "Planned work and actual task execution need separate operational records.",
      "Observations, hazards, controls, and incidents gain value when their relationships remain traceable.",
      "Control presence is different from verified control effectiveness.",
      "Corrective-action completion and verified closure are separate assurance stages.",
      "Confirmed management records should remain historically reproducible."
    ],

    image: placeholderHSEQ,

    modules: [
      {
        name: "Decision Context",
        detail:
          "Connects site, workforce, planning, task execution, weather, and operational evidence so HSE records retain the context needed for review."
      },
      {
        name: "Risk & Assurance",
        detail:
          "Links observations, hazards, controls, incidents, and corrective actions while preserving human judgement and verification."
      },
      {
        name: "Management Traceability",
        detail:
          "Supports controlled daily confirmation, immutable report snapshots, emergency preparedness records, and management-ready reporting."
      }
    ],

    links: [
      {
        label: "HSE Risk Intelligence",
        subLabel: "System & Architecture",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/",
        description:
          "Version 1 operational HSE decision-support platform, database architecture, workflows, and roadmap.",
        flagship: true
      },
      {
        label: "Operations Manual",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/docs/Database_Operations_Manual.md",
        description:
          "Detailed Version 1 documentation covering operational relationships, workflow rules, lifecycle controls, and reporting."
      }
    ],

    sideLinks: [
      {
        label: "Operational Architecture",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/#conceptual-operational-risk-model",
        description:
          "High-level view of how foundation, field operations, risk, incidents, follow-up, and reporting connect."
      },
      {
        label: "How It Works",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/HOW_IT_WORKS.md",
        description:
          "Non-technical walkthrough of how field HSE information moves through the system."
      },
      {
        label: "Technical Case Study",
        url: "https://github.com/Euchie23/HSEQ_Risk_Intel/blob/main/Case_Study.md",
        description:
          "Problem framing, architecture decisions, implementation approach, limitations, and lessons learned."
      },
      {
        label: "Ask Your Questions",
        url: "mailto:euchiejnpierre@gmail.com",
        description:
          "Reach out for walkthroughs, project discussions, or technical questions."
      }
    ]
  }
};

