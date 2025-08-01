// Sample product data - replace with your actual products

import { AreaChart } from "lucide-react";   // ✅ correct name 
import { TrendingUpDown } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { BriefcaseMedical } from "lucide-react";
import { Files } from "lucide-react";
import { Binary } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Accessibility } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Hospital } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { BookImage } from "lucide-react";
import { ClipboardList } from "lucide-react";

export const professionalProducts = [
  {
    id: "1",
    title: "Sales and Marketing Analytics Platforms",
    icon: AreaChart, 
    description: "Global analytics platforms to optimize sales and marketing strategies across regional and international teams",
    fullDescription: " Led discovery, design, development, and iterative enhancement of global sales and marketing analytics platforms for two international clients. Delivered technical enablers, models, and front end tools to improve pricing strategy, promotion effectiveness, competitor response, and customer segmentation using advanced analytics.   ",
    impact: "$25M YoY profit margin increase",
    timeline: "6 Months to MVP; iterative enhancements thereafter",
    teamSize: "25 (engineers, data scientists, data architect)",
    industry: "CPG",
    tags: ["Machine Learning", "LLMs", "Python", "R programming","Redshift"],
    features: [
      "Predictive analytics to optimize promotions across brands and retailers",
      "End-to-end profit pool tools to align manufacturer and retailer margins and identify optimal consumer pricing",
      "In-store display execution monitoring to assess display performance (timing, inventory compliance, etc.)",
      "Customer jobs-to-be-done segmentation to guide promotion targeting and product strategy",
      "Competitor and macro environment intelligence to surface insights, risks, and corresponding impacts on sales and marketing strategies"
    ],/*
    challenges: [
      "Complex user journey with multiple touchpoints",
      "Integration with legacy payment systems",
      "Performance optimization for different devices",
      "Cross-platform consistency"
    ],
    solutions: [
      "Implemented user-centric design thinking approach",
      "Created comprehensive API gateway for system integration",
      "Developed progressive loading and caching strategies",
      "Established design system for consistent experience"
    ],*/
    metrics: [
      "$25M YoY profit increase",
      "$50M cost avoidence during inflationary period",
      "$10M in recovered reimbursements",
      "90% adoption rate across tools",
      "92% user satisfaction rating average across tools"
    ],
    /*link: "https://example.com"*/
  },
  {
    id: "2", 
    title: "Constraint Based Optimization & Supply Chain Analytics",
    icon: TrendingUpDown,
    description: "Supply‑chain analytics suite that detects raw‑material shortages and prescribes mitigation tactics.",
    fullDescription: "Constraint‑based optimization tool suite that surfaced real‑time raw‑goods shortages, quantified downstream impacts on finished goods, warehousing, inventory, retail sales, and financials, and delivered predictive and prescriptive recommendations",
    impact: "$7M loss avoidances",
    timeline: "4 months to MVP; iterative enhancements thereafter",
    teamSize: "15 people (engineers, data scientists)",
    industry: "CPG",
    tags: ["SaaS", "Machine Learning", "Python", "AWS"],
    features: [
      "Live shortage dashboards",
      "Impact determination to finished goods, warehouse manufacturing, inventories, retail sales, financials, paid-promotions",
      "Prescriptive analytics to reduce impact",
      "Inventory re-routing"
    ],
      


    metrics: [
      "$7M loss avoidances during period of supply shortages"
    ]
  },
  {
    id: "2.5", 
    title: "Production Forecasting",
    icon: ClipboardList,
    description: "Determined the most cost‑effective base production plan that met demand forecasts, incorporated recent sales trends, and adhered to service‑level and operational constraints on a monthly, quarterly, and yearly cycle.",
    fullDescription: 
    
    "Developed and deployed multi-horizon production-planning product that determined the most cost-effective base production plan by triangulating forward demand forecasts, current inventory on hand and in transit, dynamic safety-stock thresholds, recent sales trends, and plant-level capacity limits. The engine automatically recommended schedules, flags only the exceptions that need planner review, and exported approved plans to downstream Commercial Off-The-Shelf (COTS) production-planning system.",
  
    
    impact: "3% reduction in CPU (cost per unit)",
    timeline: "4 months",
    teamSize: "5 people (engineers, data scientists)",
    industry: "CPG",
    tags: ["SaaS", "Machine Learning", "Python", "AWS"],
    features: [
      "Multi-horizon planning engine: monthly, quarterly, and yearly" ,
      "Integration with downstream COTS production planning systems updates",
      "Flagged products for planners that do not require review"
    ],
    
    metrics: [
      "Planner override rate reduced by 30%",
      "Days of Inventory on Hand dropped by 10% without raising stock-outs"
    ]
  },

{
    id: "3", 
    title: "Encounter / Claims Management Platform",
    icon: ArrowLeftRight, 
    description: "End‑to‑end ingestion, cleansing, transformation, and submission of billing data to state agencies.",
    fullDescription: "Consolidated billing data from disparate systems, transformed it into compliant formats, automated acknowledgements, and routed exceptions to relevant teams (to remediate), creating a single source of truth for encounter management.",
    
    impact: "$10M YoY profit margin increase",
    timeline: "6 month MVP; iterative enhancements thereafter",
    teamSize: "40 people (engineers, data scientists, data analytists, architect, security)",
    industry: "Healthcare",
    tags: ["SaaS", "Java", "AWS", "B2G"],
    features: [
      "Executive dashboards for performance, revenue, compliance risk",
      "Redesigned and automated workflows across 5 departments",
      "Automated data pipeline from multiple sources",
      "Anomaly detection and alerting", 
      "Chatbot support for real-time analytics" 
    ],
 
 
    metrics: [
      "500+ active business users",
      "Decreased error rate from 5% to 0%",
      "40% productivity increase - encounter management staff" 
    ]
  },

  {
    id: "4",
    title: "Patient Outcome Performance Platform",
    icon: BriefcaseMedical, 
    description: "Analytics platform that elevates clinician performance and patient outcomes to national top‑decile benchmarks",
    fullDescription: "Integrated billing, Electronic Health Records (EHRs), and performance data to give clinicians real‑time visibility into 400 key metrics and patient‑level drill‑downs, enabling data‑driven coaching and Centers for Medicare & Medicaid Services (CMS) reporting.",
    impact: "$20M YoY Profit Margins",
    timeline: "7 months to MVP; iterative enhancements thereafter",
    teamSize: "30 people (engineers, 1 designer, architect, security)",
    industry: "Healthcare",
    tags: ["AWS", "Python", "Power BI", "ML", "B2C", "B2G", "B2B"],
    features: [
      "Unified source of truth across billing, EHR, and clinical measures",
      "Clinician portal for real-time performance tracking, root cause analysis, and drill downs",
      "Clinician groups oversight of clinician performance to support coaching and training",
      "Disease surveillance to identify trends and outbreaks",
      "Integration with CMS for yearly MIPS / MACRA reporting",
      "Auto‑selection of highest‑yield measures for reimbursement"
    ],/*
    challenges: [
      "Strict HIPAA compliance requirements",
      "Integration with existing EMR systems",
      "Complex appointment scheduling logic",
      "Accessibility requirements for diverse patient demographics"
    ],
    solutions: [
      "Implemented end-to-end encryption and audit trails",
      "Created standardized API layer for EMR integration",
      "Developed intelligent scheduling algorithm",
      "Followed WCAG 2.1 accessibility standards"
    ],*/
    metrics: [
      "60% improvement in appointment scheduling efficiency",
      "30% reduction in no-show rates",
      "90% patient satisfaction score",
      "100% HIPAA compliance audit pass"
    ]
  },

  {
    id: "5", 
    title: "Medical Abstraction and Coding Platform",
    icon: Binary, 
    description: "OCR‑driven system that merges paper records, EHRs, and billing data for high‑volume abstraction.",
    fullDescription: "Deployed Optical Character Recognition (OCR) and automated workflows to ingest twelve million yearly records, load‑balance work across two vendors and 800 abstractors, enabling rapid abstraction. ",
    impact: "$6M annual cost savings",
    timeline: "4 months to MVP; iterative enhancements thereafter",
    teamSize: "30 people (engineers, data scientists, data analytists, architect, security)",
    industry: "Healthcare",
    tags: ["SaaS", "OCR", "AWS", "B2B"],
    features: [
      "Load balancing across 2 vendors for 100% utilization",
      "12M yearly abstracted records" 
    ],
 
 
    metrics: [
      "100% productivity across 800 abstractors",
      "$6M annual cost savings"  
    ]
  },
  {
    id: "6", 
    title: "Marketing Promotion Management Platform",
    icon: BadgeDollarSign, 
    description: "Promotional capabilities that increased new‑customer acquisition, session length, and retention across 140 gaming locations.",
    fullDescription: "Implemented AI‑driven promotional capabilities and virtualized gaming servers, resulting in longer gameplay sessions, higher retention, and a sustained double‑digit profit‑margin lift.",
    impact: ">10 % profit‑margin increase; ≈$500 K per day",
    timeline: "4 month MVP; iterative enhancements thereafter",
    teamSize: "25 people (engineers, data scientists, data analytists, architect, security)",
    industry: "Gaming",
    tags: ["SaaS",  "AWS", "B2C"],
    features: [
      "Created in-game promotions that made the product more sticky, enjoyable, value-adding for customers",
      "AI to automtically determine optimal promotions and implement them",
      "Analytics dashboard to view performance of promotions, customer engagement, retention, and length of game play, etc",
      "Virtualized gaming servers across 140 locations to support promotions and game play" 
    ],
 
 
    metrics: [
      ">10%+ profit margin increase",
      "30 % labor‑cost reduction" 
    ]
  },
  {
    id: "7", 
    title: "Durable Medical Equipment (DME) Order Intake & Billing Platform",
    icon: Accessibility, 
    description: "Order‑intake and billing solution serving half of Florida’s at‑home patient population.",
    fullDescription: "Redesigned intake workflows, automated renewals for prescriptions and authorizations, and produced Health Insurance Portability and Accountability Act (HIPAA)‑compliant claims files for 48 health plans, boosting revenue capture.",
    impact: "25% increase in revenue capture on $1.7B in annual transactions",
    timeline: "7 month MVP; iterative enhancements thereafter",
    teamSize: "35 people (engineers, data scientists, data analytists, business analysts, architect, security)",
    industry: "Healthcare",
    tags: ["SaaS", "AWS", "B2B"],
    features: [
      "Comprehensive intake capturing prescriptions and authorizations ",
      "AI / Automation to obtain for renewals and rebill: prescriptions, authorizations, and other HP requirements",
      "837i/837p claims generation and acknowledgement processing"
    ],
 
 
    metrics: [
      "25% increase in revenue capture for $1.7B in annual transactions",
      "Reduction in manual: re-depolyed team of 20 through automation" 
    ]
  }


,
  {
    id: "8", 
    title: "Home Health, Pharmacy, and DME Analytics",
    icon: ChartLine, 
    description: "Executive and tactical dashboards for operational and financial performance across three service lines.",
    fullDescription: "Delivered end‑to‑end analytics covering order flow, revenue cycle, customer value, vendor performance / quality, and workforce productivity, enabling data‑driven decisions that increased margins and reduced costs.",
    impact: "multiple",
    timeline: "7 month MVP",
    teamSize: "10 people (engineers, data scientists, architect)",
    industry: "Healthcare",
    tags: ["SaaS", "AWS", "B2B"],
    features: [
      "Bottleneck detection in order processing",
      "Revenue Forecasting",
      "Revenue Cycle Reporting",
      "Customer value and profitability",
      "Employee productivity analytics",
      "Home health nursing fullfillment tracking",
      "Vendor scorecards and performance tracking"
    ],
 
 
    metrics: [
      "Order to delivery time reduced by 10%",
      "8% reduction in labor costs",
      "10%+ increase in profit margins enabled by profitability analytics and contract renegotiation" 
    ]
  }

,
  {
    id: "9", 
    title: "Online Explanation of Benefits",
    icon: Hospital, 
    description: "Digital and print‑ready monthly roll‑up of patient claims into a single patient‑friendly monthly statement.",
    fullDescription: "Consolidated individual EOBs across medical, pharmacy, and ancillary claims into a unified monthly statement, accessible online and via mail for 7M patients, improving transparency and reducing support costs. ",
    impact: "$6M annual cost savings",
    timeline: "6 month MVP",
    teamSize: "20 people (engineers, architect)",
    industry: "Healthcare",
    tags: ["SaaS", "AWS", "B2C"],
    features: [
      "Patient portal to view EOBs",
      "Aggregation of multiple claims (medical, pharmacy, etc) to a single monthly statement" 
    ],
 
 
    metrics: [
      "$6M annual cost savings",
      "35% reduction in customer service calls",
      "Reduction in paper statements" 
    ]
  }

,
  {
    id: "10", 
    title: "Vendor Bidding and Evaluation Platform",
    icon: BadgeDollarSign, 
    description: "Online bidding and comparative evaluation across 30 vendor categories",
    fullDescription: "Enabled vendors to submit bids online, automated error checks, and provided purchasing managers with side‑by‑side comparisons based on cost, quality, delivery, and issue history, accelerating award decisions.",
    impact: "$14.3M annual cost savings",
    timeline: "6 month MVP",
    teamSize: "5 people (engineers, architect)",
    industry: "Manufacturing",
    tags: ["SaaS", "AWS", "B2B"],
    features: [
      "Vendor portal for bid submission",
      "Automated bid validation",
      "Multi‑criteria vendor scorecards", 
    ],
 
 
    metrics: [
      "$14.3M annual cost savings", 
      "Reduction in billing errors by 15%"
    ]
  },

  {
    id: "11", 
    title: "Labor / Material Scheduler Suite",
    icon: CalendarCheck, 
    description: "Schedule‑driven procurement, purchase‑order generation, and workforce planning for custom manufacturing jobs",
    fullDescription: "Automatically scheduled labor and material requirements for 650 + annual custom jobs valued at $200K+ each, generated purchase orders, and enabled supervisors to reconcile deliveries via mobile app, halving project lead times.",
    impact: "$3M annual labor / cost savings",
    timeline: "6 month MVP",
    teamSize: "10 people (engineers, architect)",
    industry: "Manufacturing",
    tags: ["SaaS", "AWS", "B2B"],
    features: [
      "Auto-schedule labor and materials",
      "Auto-generate purchase order generation / submission to vendors",
      "Vendor portal changes to view purchase orders and delivery status", 
      "Ability for job supervisors to reconcile labor and materials delivered against order via mobile app"
    
    ],
 
 
    metrics: [
      "$3M annual cost savings",
      "Reduction in schedule from 60 days to 30 days"  
    ]
  }




];

export const aiExperiments = [
  {
    id: "ai-1",
    title: "Sacrificial Concept Generation ",
    icon: BookImage, 
    description: "Produces multiple solution concepts (text + images) using generative AI",
    fullDescription: "During product management discovery, we use divergent thinking, generating many solution ideas, before converging on an optimal solution. This experiment automates that exploratory phase by using genAI to create a set of solution concepts, complete with descriptive narratives and illustrative images, tailored to the user‑defined problem statement, JTBD persona insights, and business goals, objectives, etc. ",
    /*impact: "25% increase in click-through rate",*/
    timeline: "3 hours",
    /*teamSize: "4 people (2 ML engineers, 1 backend engineer)",
    industry: "Gaming",*/
    tags: ["Tailwind CSS", "Next.JS", "OpenAI API", "VS Code", "Dalle-3 image generation"],
    features: [
      "Enriches user input data with industry specific context, terminology, and concepts",
      "Generates 25 unique ideas to solve for user problem: looks across industries for metaphors, challenging industry norms, leveraging new technologies, ways to integrate with existing assets etc",
      "Optional: Rank / sort ideas based on problem / solution fit, product goal fit, user fit, feasibility, and business fit",
      "Dalle-3 for corresponding image generation"
    ],
    /*challenges: [
      "Cold start problem for new users",
      "Balancing exploration vs exploitation",
      "Real-time inference at scale",
      "Measuring recommendation quality"
    ],
    solutions: [
      "Implemented hybrid recommendation approach",
      "Used multi-armed bandit algorithms",
      "Built model serving infrastructure with caching",
      "Developed comprehensive evaluation metrics"
    ],
    metrics: [
      "25% increase in click-through rate",
      "15% improvement in user session duration",
      "10% increase in purchase conversion",
      "Sub-100ms response time for recommendations"
    ]
   */
    link: "https://youtu.be/m_XvtTWpXmo"
  }
  
  
];