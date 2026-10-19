import {serviceVisuals} from './service-visuals.js';
import {learningCategories,learningDetails} from './learning-catalogue.js';
import {catalogueDetails,serviceCategories,additionalServices,energyService,serviceImages} from './catalogue.js';
export {serviceCategories,energyService};
export const detailPath=d=>d.parent==='energy-optimization'?'/energy-optimization/'+d.slug:d.parent==='professional-learning-development'?'/learning/'+d.slug:'/services/'+d.parent+'/'+d.slug;
export const services = [
  {
    "slug": "process-safety-risk",
    "name": "Process Safety & Risk",
    "short": "Process Safety & Risk",
    "icon": "ShieldCheck",
    "color": "teal",
    "eyebrow": "Understand risk. Define practical priorities.",
    "description": "Identify hazards, assess risk and evaluate the safeguards needed to support safer operations.",
    "intro": "We help industrial organisations understand major accident hazards and connect structured technical studies with clear decisions and practical improvement priorities.",
    "families": [
      "Hazard identification & process hazard analysis",
      "Quantitative risk & consequence assessment",
      "Protection layers & functional safety",
      "Barrier management & major accident control",
      "Operational process safety & readiness"
    ],
    "outputs": [
      "Study basis and workshop records",
      "Scenario and safeguard registers",
      "Assessment reports and recommendations",
      "Prioritised action registers"
    ],
    "detailSlugs": [
      "hazid-hazop",
      "lopa-sil",
      "quantitative-risk",
      "bowtie-barrier-management",
      "process-safety-management"
    ]
  },
  {
    "slug": "engineering-consultancy",
    "name": "Engineering Consultancy",
    "short": "Engineering Consultancy",
    "icon": "Waypoints",
    "color": "blue",
    "eyebrow": "Technical clarity for informed decisions.",
    "description": "Specialist engineering advice and reviews for defined technical and operating decisions.",
    "intro": "We examine the technical basis, operating requirements and relevant interfaces of an assignment, helping your team understand the implications and decide what action is required.",
    "families": [
      "Process engineering advisory",
      "Process documentation, PFD & P&ID review",
      "Relief & flare studies",
      "Technical & design reviews",
      "Engineering input into modifications"
    ],
    "outputs": [
      "Technical assessments",
      "Calculation and documentation reviews",
      "Marked-up documents and query registers",
      "Recommendations and decision inputs"
    ],
    "detailSlugs": [
      "process-engineering-reviews",
      "relief-flare"
    ]
  },
  {
    "slug": "hse-management-systems",
    "name": "HSE & Management Systems",
    "short": "HSE & Management Systems",
    "icon": "ClipboardCheck",
    "color": "green",
    "eyebrow": "Practical systems. Accountable implementation.",
    "description": "Clear processes, responsibilities and working arrangements that support consistent implementation.",
    "intro": "We help organisations develop and improve HSE arrangements and management systems that reflect their activities, risks and operating context.",
    "families": [
      "Occupational health & safety advisory",
      "Integrated management system development",
      "Auditing & gap assessments",
      "Incident investigation & organisational learning",
      "Emergency preparedness & business continuity",
      "Implementation planning & review"
    ],
    "outputs": [
      "Gap assessment and audit reports",
      "Policies, procedures, forms and registers",
      "Defined responsibilities and process structures",
      "Implementation and improvement plans"
    ],
    "detailSlugs": [
      "integrated-management-systems",
      "auditing-gap-assessments"
    ]
  },
  {
    "slug": "professional-learning-development",
    "name": "Professional Learning & Development",
    "short": "Learning & Development",
    "icon": "GraduationCap",
    "color": "purple",
    "eyebrow": "Learning that makes a difference at work.",
    "description": "Technical training and professional development designed around your people, objectives and operating context.",
    "intro": "We develop technical and professional learning programmes that connect clear learning objectives with practical workplace application. Delivery is shaped around the participant group, subject and organisational priorities.",
    "families": [
      "Technical and professional training",
      "Customised corporate programmes",
      "Training needs analysis",
      "Practical workshops and facilitated learning",
      "Learning pathways and programme evaluation"
    ],
    "outputs": [
      "Training needs and learning objectives",
      "Course outlines and learning materials",
      "Practical activities and knowledge checks",
      "Programme evaluation and development recommendations"
    ],
    "detailSlugs": [
      "learning-programme-design"
    ]
  },
  {
    "slug": "competency-assessment-assurance",
    "name": "Competency Assessment & Assurance",
    "short": "Competency Assessment & Assurance",
    "icon": "BadgeCheck",
    "color": "teal",
    "eyebrow": "Clear role requirements. Evidence-based assurance.",
    "description": "Define competence, assess capability and establish assurance arrangements around the work people perform.",
    "intro": "We help organisations translate role responsibilities into competency requirements, assessment evidence and assurance processes. Our approach connects individual capability with the requirements of technical and operational roles.",
    "families": [
      "Competency frameworks and role matrices",
      "Competency assessment and gap analysis",
      "Assessment methods and evidence tools",
      "Assessor and verifier development",
      "Competency assurance arrangements and review"
    ],
    "outputs": [
      "Role profiles and competency matrices",
      "Assessment plans and evidence records",
      "Individual competency gap reports",
      "Assurance procedures and development priorities"
    ],
    "detailSlugs": [
      "competency-frameworks",
      "competency-assurance"
    ]
  },
  {
    "slug": "software-solutions",
    "name": "Software Solutions",
    "short": "Software Solutions",
    "icon": "Workflow",
    "color": "blue",
    "eyebrow": "Digital tools built around your workflow.",
    "description": "Purpose-built applications that connect engineering, HSE, learning and operational information.",
    "intro": "We design and develop software solutions around clearly defined business processes and user needs. From structured registers to dashboards and assessment workflows, we turn working requirements into practical digital tools.",
    "families": [
      "Custom web applications and internal tools",
      "Operational dashboards and reporting",
      "HSE and action-tracking workflows",
      "Learning and competency management tools",
      "Data integration and process automation"
    ],
    "outputs": [
      "Agreed requirements and workflow maps",
      "Interactive prototypes and application interfaces",
      "Configured applications and reporting views",
      "User guidance and implementation handover"
    ],
    "detailSlugs": [
      "custom-applications",
      "dashboards-automation"
    ]
  }
];
export const details = [
  {
    "slug": "hazid-hazop",
    "parent": "process-safety-risk",
    "name": "HAZID & HAZOP Studies",
    "lead": "A structured examination of hazards and process deviations.",
    "summary": "Bring together appropriate methods, technical information and the knowledge of relevant client personnel.",
    "scope": [
      "Study preparation and information review",
      "Agreed study boundaries and methodology",
      "Workshop facilitation and structured recording",
      "Reporting and recommendation registers"
    ],
    "outputs": [
      "Study basis",
      "Workshop worksheets and scenario records",
      "Findings, safeguards and recommendations",
      "Action register"
    ],
    "inputs": [
      "Relevant process documents and operating information",
      "Defined study boundaries",
      "Participation from appropriate technical and operating disciplines"
    ],
    "cta": "Request a HAZOP proposal"
  },
  {
    "slug": "lopa-sil",
    "parent": "process-safety-risk",
    "name": "LOPA & SIL Services",
    "lead": "Define and evaluate required risk reduction.",
    "summary": "Assessment of protection layers, SIL requirements and defined verification calculations, matched to the scope of your assignment.",
    "scope": [
      "Layer of Protection Analysis",
      "Safety Integrity Level determination",
      "SIL verification calculations",
      "Defined functional safety lifecycle documentation support"
    ],
    "outputs": [
      "Assessment worksheets",
      "Risk reduction allocation records",
      "Calculation reports",
      "Findings and recommendations"
    ],
    "inputs": [
      "Scenario information and existing study records",
      "Function and equipment data appropriate to scope",
      "Agreed criteria and calculation assumptions"
    ],
    "cta": "Discuss your SIL requirements"
  },
  {
    "slug": "quantitative-risk",
    "parent": "process-safety-risk",
    "name": "Quantitative Risk & Consequence Studies",
    "lead": "Understand potential impacts and risk priorities.",
    "summary": "Defined studies of hazardous scenarios and their potential consequences, with likelihood assessment where included in scope.",
    "scope": [
      "Quantitative Risk Assessment",
      "Consequence modelling",
      "Fire and explosion assessment",
      "Defined evacuation and occupied-building studies"
    ],
    "outputs": [
      "Study basis and assumptions",
      "Scenario definitions and modelling results",
      "Assessment findings",
      "Risk reduction recommendations"
    ],
    "inputs": [
      "Facility information and layouts",
      "Inventories and operating conditions",
      "Scenario-specific data and assessment criteria"
    ],
    "cta": "Discuss your risk study"
  },
  {
    "slug": "bowtie-barrier-management",
    "parent": "process-safety-risk",
    "name": "Bowtie & Barrier Management",
    "lead": "Connect hazardous scenarios with safeguards and responsibilities.",
    "summary": "Describe major accident scenarios and the barriers intended to prevent or mitigate them, with a clear relationship to operational responsibility.",
    "scope": [
      "Bowtie development",
      "Safety-critical element and task identification",
      "Performance standard support",
      "Defined major accident control documentation"
    ],
    "outputs": [
      "Bowtie models",
      "Critical element and task registers",
      "Performance requirements",
      "Action records"
    ],
    "inputs": [
      "Hazard information and existing studies",
      "Operating arrangements",
      "Maintenance and assurance information"
    ],
    "cta": "Discuss barrier management"
  },
  {
    "slug": "process-safety-management",
    "parent": "process-safety-risk",
    "name": "Process Safety Management & Readiness",
    "lead": "Identify gaps. Establish practical priorities.",
    "summary": "Assessment of process safety arrangements and defined reviews of operational readiness.",
    "scope": [
      "PSM gap assessments",
      "Pre-Startup Safety Reviews",
      "SIMOPS and permitted operations support",
      "Defined alarm management and human factors support"
    ],
    "outputs": [
      "Assessment findings",
      "Readiness records",
      "Operating constraints where applicable",
      "Prioritised improvement actions"
    ],
    "inputs": [
      "Relevant procedures and records",
      "Project and operating information",
      "Participation from responsible personnel"
    ],
    "cta": "Request a process safety assessment"
  },
  {
    "slug": "process-engineering-reviews",
    "parent": "engineering-consultancy",
    "name": "Process Engineering & Technical Reviews",
    "lead": "Examine the technical basis for your next decision.",
    "summary": "Scoped reviews of process information, defined requirements and proposed modifications.",
    "scope": [
      "Process engineering advisory",
      "PFD and P&ID reviews",
      "Technical and design reviews",
      "Defined modification support"
    ],
    "outputs": [
      "Technical reports",
      "Marked-up documents",
      "Query registers",
      "Recommendations"
    ],
    "inputs": [
      "Applicable design and operating information",
      "Project requirements",
      "Agreed review criteria"
    ],
    "cta": "Request a technical review"
  },
  {
    "slug": "relief-flare",
    "parent": "engineering-consultancy",
    "name": "Relief & Flare Studies",
    "lead": "Review defined scenarios and system requirements.",
    "summary": "Scoped relief and flare assignments based on agreed scenarios, technical information and calculation requirements.",
    "scope": [
      "Relief scenario assessment",
      "Calculation reviews",
      "Defined relief and flare system studies",
      "Technical findings and recommendations"
    ],
    "outputs": [
      "Study basis",
      "Calculation reports",
      "Review findings",
      "Recommendations"
    ],
    "inputs": [
      "Equipment and system information",
      "Process and fluid data",
      "Agreed scenarios and requirements"
    ],
    "cta": "Discuss your relief or flare study"
  },
  {
    "slug": "integrated-management-systems",
    "parent": "hse-management-systems",
    "name": "HSE & Integrated Management Systems",
    "lead": "Translate requirements into practical working arrangements.",
    "summary": "Development and improvement of management systems suited to your organisation’s activities and responsibilities.",
    "scope": [
      "Gap assessment",
      "Process and documentation development",
      "Policies, procedures and registers",
      "Implementation support"
    ],
    "outputs": [
      "Process structures",
      "Controlled documents",
      "Gap assessment findings",
      "Implementation plans"
    ],
    "inputs": [
      "Organisational scope",
      "Existing documentation",
      "Relevant operating requirements"
    ],
    "cta": "Discuss your management system"
  },
  {
    "slug": "auditing-gap-assessments",
    "parent": "hse-management-systems",
    "name": "Auditing & Gap Assessments",
    "lead": "Understand the current position and prioritise improvement.",
    "summary": "Assess defined arrangements against agreed criteria and communicate findings clearly.",
    "scope": [
      "Assessment planning",
      "Document and record review",
      "Engagement with responsible personnel",
      "Evidence-based reporting"
    ],
    "outputs": [
      "Assessment plans",
      "Findings and reports",
      "Corrective-action priorities",
      "Improvement recommendations"
    ],
    "inputs": [
      "Assessment criteria",
      "Relevant documents and records",
      "Access to responsible personnel"
    ],
    "cta": "Request an assessment proposal"
  },
  {
    "slug": "competency-frameworks",
    "parent": "competency-assessment-assurance",
    "name": "Competency Frameworks & Assessment Support",
    "lead": "Define role capability and the evidence needed to assess it.",
    "summary": "Connect responsibilities, proficiency expectations, development activities and assessment arrangements.",
    "scope": [
      "Role requirements and proficiency levels",
      "Competency matrices and gap analysis",
      "Assessment methods and evidence tools",
      "Development and review pathways"
    ],
    "outputs": [
      "Role profiles",
      "Competency matrices",
      "Assessment tools",
      "Development plans"
    ],
    "inputs": [
      "Organisation structures",
      "Role responsibilities and task information",
      "Existing frameworks where available"
    ],
    "cta": "Discuss your competency framework"
  },
  {
    "slug": "learning-programme-design",
    "parent": "professional-learning-development",
    "name": "Learning Programme Design",
    "lead": "Connect learning objectives with practical development.",
    "summary": "Design technical and professional programmes around the audience, operating context and required learning outcomes.",
    "scope": [
      "Training needs analysis",
      "Learning objectives and course structure",
      "Learning materials and practical activities",
      "Programme evaluation"
    ],
    "outputs": [
      "Training needs summary",
      "Programme outline",
      "Learning materials",
      "Evaluation approach"
    ],
    "inputs": [
      "Participant roles and experience",
      "Development priorities",
      "Delivery requirements and timeframe"
    ],
    "cta": "Discuss your learning programme"
  },
  {
    "slug": "competency-assurance",
    "parent": "competency-assessment-assurance",
    "name": "Competency Assessment & Assurance",
    "lead": "Build confidence through relevant evidence.",
    "summary": "Establish a structured approach to assessing capability and reviewing the quality and consistency of assessment decisions.",
    "scope": [
      "Assessment planning and evidence requirements",
      "Assessment tools and recording",
      "Assessor and verifier arrangements",
      "Gap analysis and development priorities"
    ],
    "outputs": [
      "Assessment plans and tools",
      "Evidence records",
      "Competency gap reports",
      "Assurance and review arrangements"
    ],
    "inputs": [
      "Role requirements and existing frameworks",
      "Assessment records where available",
      "Access to subject-matter experts"
    ],
    "cta": "Discuss competency assurance"
  },
  {
    "slug": "custom-applications",
    "parent": "software-solutions",
    "name": "Custom Applications & Workflow Tools",
    "lead": "Make your working process easier to manage.",
    "summary": "Applications designed around the tasks, information and approvals your organisation needs to coordinate.",
    "scope": [
      "Requirements and workflow mapping",
      "User interface and prototype design",
      "Application development",
      "User guidance and handover"
    ],
    "outputs": [
      "Agreed functional scope",
      "Application prototype",
      "Implemented workflows",
      "Handover documentation"
    ],
    "inputs": [
      "Process requirements and user roles",
      "Existing data and systems",
      "Hosting and access requirements"
    ],
    "cta": "Discuss your software requirements"
  },
  {
    "slug": "dashboards-automation",
    "parent": "software-solutions",
    "name": "Dashboards, Reporting & Automation",
    "lead": "Turn operational information into usable insight.",
    "summary": "Connect defined data sources, reporting needs and routine tasks through dashboards and automation.",
    "scope": [
      "Data and reporting requirements",
      "Dashboard design",
      "Defined system integrations",
      "Workflow and notification automation"
    ],
    "outputs": [
      "Reporting and data specifications",
      "Dashboards and reporting views",
      "Defined integrations and automations",
      "User documentation"
    ],
    "inputs": [
      "Available data sources",
      "Reporting requirements",
      "Integration and access constraints"
    ],
    "cta": "Discuss dashboards and automation"
  }
];
export const industries = [
  {
    "slug": "oil-gas",
    "name": "Oil & Gas",
    "icon": "Flame",
    "description": "Support for defined process hazards, operating risks, modifications and workforce capability.",
    "services": [
      "process-safety-risk",
      "engineering-consultancy",
      "professional-learning-development",
      "competency-assessment-assurance"
    ]
  },
  {
    "slug": "petrochemicals-chemicals",
    "name": "Petrochemicals & Chemicals",
    "icon": "FlaskConical",
    "description": "Structured assessment of process scenarios, safeguards and practical management arrangements.",
    "services": [
      "process-safety-risk",
      "hse-management-systems"
    ]
  },
  {
    "slug": "refining-lng",
    "name": "Refining & LNG",
    "icon": "Factory",
    "description": "Specialist support for risk studies, operational process safety and targeted development programmes.",
    "services": [
      "process-safety-risk",
      "engineering-consultancy"
    ]
  },
  {
    "slug": "fertilisers",
    "name": "Fertilisers",
    "icon": "Leaf",
    "description": "Defined process risk, management system improvement and technical learning support.",
    "services": [
      "process-safety-risk",
      "hse-management-systems",
      "professional-learning-development",
      "competency-assessment-assurance"
    ]
  },
  {
    "slug": "power-utilities",
    "name": "Power & Utilities",
    "icon": "Zap",
    "description": "Engineering, HSE and competency support matched to the installation and operating requirements.",
    "services": [
      "engineering-consultancy",
      "hse-management-systems",
      "professional-learning-development",
      "competency-assessment-assurance"
    ]
  },
  {
    "slug": "epc-industrial",
    "name": "EPC & Industrial Projects",
    "icon": "HardHat",
    "description": "Clearly scoped specialist input, technical reviews and development support for industrial projects.",
    "services": [
      "engineering-consultancy",
      "process-safety-risk"
    ]
  }
];
export const programmes = [
  {
    "slug": "process-safety",
    "name": "Process Safety & Risk",
    "category": "Process safety",
    "icon": "ShieldCheck",
    "description": "Learning around risk assessment, safeguards and practical process safety responsibilities.",
    "topics": [
      "Process safety and risk assessment",
      "Hazard identification and HAZOP",
      "LOPA and functional safety",
      "Barrier management"
    ],
    "audience": "Process safety professionals, engineers, operations and HSE teams."
  },
  {
    "slug": "engineering",
    "name": "Engineering & Operational Practice",
    "category": "Engineering",
    "icon": "Waypoints",
    "description": "Focused technical learning linked to engineering and operational requirements.",
    "topics": [
      "Engineering and operational safety topics",
      "Technical reviews",
      "Application of process information",
      "Facilitated technical workshops"
    ],
    "audience": "Engineering, project and operational teams."
  },
  {
    "slug": "hse-systems",
    "name": "HSE & Management Systems",
    "category": "HSE & systems",
    "icon": "ClipboardCheck",
    "description": "Develop the understanding and working practices needed to apply management arrangements.",
    "topics": [
      "Occupational health and safety",
      "Management systems",
      "Auditing",
      "Implementation learning"
    ],
    "audience": "HSE professionals, management system owners and internal auditors."
  },
  {
    "slug": "competency-assessment",
    "name": "Competency & Assessment",
    "category": "Competency",
    "icon": "GraduationCap",
    "description": "Connect role requirements with development, appropriate evidence and assessment.",
    "topics": [
      "Role-based competency development",
      "Competency assessment",
      "Assessor development",
      "Internal assurance arrangements"
    ],
    "audience": "Learning and development teams, role owners, assessors and technical leaders."
  }
];
export const faqs = [
  [
    "How do we start a consultancy assignment?",
    "Start with the decision or requirement you need to address. We clarify the operating context, scope, available information, required participation and deliverables before defining the assignment."
  ],
  [
    "Can consultancy and training be combined?",
    "Yes. Where appropriate to the agreed scope, technical work can be supported by workshops, implementation guidance or competency development to help your team apply the outcomes."
  ],
  [
    "Can you design training for our organisation?",
    "Corporate programmes can be structured around your objectives, participant group and operating context. Content, delivery format and assessment arrangements are defined for the programme."
  ],
  [
    "How are course dates and recognition confirmed?",
    "Dates, fees, entry requirements and any programme-specific recognition are confirmed in the relevant programme information. An enquiry does not constitute a confirmed booking."
  ],
  [
    "What will we receive from a study?",
    "Deliverables depend on the agreed scope. They may include study records, technical reports, scenario registers, marked-up documents, frameworks and prioritised recommendations."
  ]
];
services.splice(3,0,...additionalServices);
serviceCategories['professional-learning-development']=learningCategories;
for(const s of [...services,energyService]){s.image=s.image||serviceImages[s.slug];if(serviceCategories[s.slug])s.families=serviceCategories[s.slug].map(c=>c.name)}
for(const d of details){d.category=({'competency-frameworks':'FRAME','competency-assurance':'ASSURE','learning-programme-design':'DESIGN','custom-applications':'APP','dashboards-automation':'APP'})[d.slug];d.legacy=!d.category}

for(const d of catalogueDetails){if(details.some(x=>x.parent===d.parent&&x.slug===d.slug)){const old=details.find(x=>x.parent===d.parent&&x.slug===d.slug);Object.assign(old,d,{legacy:false})}else details.push(d)}
for(const d of details.filter(d=>d.parent==='professional-learning-development')){d.category=({'ENE':'AWARE','RISK':'TECH','DRILL':'AWARE','DESIGN':'CORP'})[d.category]||d.category}
details.push(...learningDetails);
for(const s of [...services,energyService])s.detailSlugs=details.filter(d=>d.parent===s.slug&&!d.legacy).map(d=>d.slug);
for(const d of details){d.visual=serviceVisuals.details[d.parent+'/'+d.slug]}
for(const s of [...services,energyService])s.visual=serviceVisuals.services[s.slug];
for(const p of programmes)p.visual=serviceVisuals.programmes['programme-'+p.slug];
export const allRoutes = ['/', '/about', '/services',...services.map(s=>'/services/'+s.slug),...details.map(detailPath),...details.filter(d=>d.parent==='professional-learning-development').map(d=>'/services/professional-learning-development/'+d.slug),'/services/learning-competency','/services/learning-competency/competency-frameworks','/industries',...industries.map(i=>'/industries/'+i.slug),'/learning','/learning/programmes',...programmes.map(p=>'/learning/programmes/'+p.slug),'/learning/corporate','/services/energy-optimization','/software-solutions','/energy-optimization','/resources','/resources/company-overview','/certificates','/contact','/privacy','/terms'];

export const softwareApplications = [
  {
    "id": "psm-performance",
    "name": "PSM Performance Dashboard",
    "category": "Process safety performance",
    "icon": "ChartNoAxesCombined",
    "color": "teal",
    "description": "Bring process safety indicators into one view to monitor performance and focus improvement.",
    "problem": "Scattered KPI records make gaps and performance trends difficult to see.",
    "value": "A clearer view of process safety performance helps teams prioritise improvement."
  },
  {
    "id": "moc-rfc",
    "name": "MOC & RFC Tracker",
    "category": "Management of change",
    "icon": "Workflow",
    "color": "blue",
    "description": "Follow change requests from submission and review through approvals, execution and closeout.",
    "problem": "Email chains and disconnected registers make change approvals difficult to follow.",
    "value": "Clear stages, responsibilities and overdue visibility keep change requests moving."
  },
  {
    "id": "bowtie-studio",
    "name": "BowTie Studio",
    "category": "Risk & barrier management",
    "icon": "ShieldCheck",
    "color": "purple",
    "description": "Map hazards, threats, consequences and preventive and recovery barriers in visual BowTie models.",
    "problem": "Risk registers alone can make the relationship between hazards and safeguards hard to explain.",
    "value": "Visual scenarios make barrier roles and protection gaps easier to understand and review."
  },
  {
    "id": "action-tracker",
    "name": "Action Tracker",
    "category": "Action management",
    "icon": "ListChecks",
    "color": "coral",
    "description": "Coordinate actions with named owners, target dates, status updates and follow-up comments.",
    "problem": "Actions spread across spreadsheets and emails are easy to miss or leave overdue.",
    "value": "One follow-up view makes ownership, progress and outstanding actions clear."
  },
  {
    "id": "hse-insight",
    "name": "HSE Performance Dashboard",
    "category": "HSE analytics & reporting",
    "icon": "ChartNoAxesCombined",
    "color": "lime",
    "description": "Consolidate HSE indicators, incident information and management reporting in a clear dashboard.",
    "problem": "Disconnected HSE records slow reporting and make performance comparisons difficult.",
    "value": "A consolidated view helps management review trends and focus attention where it is needed."
  },
  {
    "id": "assurix",
    "name": "ASSURIX",
    "category": "Competency assessment & assurance",
    "icon": "BadgeCheck",
    "color": "blue",
    "description": "Connect role competency requirements with assessments, gap analysis and development priorities.",
    "problem": "Separate role matrices and assessment records make workforce capability difficult to review consistently.",
    "value": "A structured view of competency requirements and assessment outcomes helps target development and support assurance."
  }
];

export const companyLogos = [
  {
    "name": "TÜV NORD Egypt",
    "key": "tuv-nord",
    "src": "/assets/company-logos/tuv-nord.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "MOPCO",
    "key": "mopco",
    "src": "/assets/company-logos/mopco.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "FAHSS",
    "key": "fahss",
    "src": "/assets/company-logos/fahss.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "TÜV SÜD",
    "key": "tuv-sud",
    "src": "/assets/company-logos/tuv-sud.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "TÜV AUSTRIA",
    "key": "tuv-austria",
    "src": "/assets/company-logos/tuv-austria.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Bureau Veritas Abu Dhabi — Technical Center",
    "key": "bureau-veritas",
    "src": "/assets/company-logos/bureau-veritas.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Sustain Plus",
    "key": "sustain-plus",
    "src": "/assets/company-logos/sustain-plus.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Bureau Veritas Egypt",
    "key": "bureau-veritas",
    "src": "/assets/company-logos/bureau-veritas.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "PICO Energy Group",
    "key": "pico",
    "src": "/assets/company-logos/pico.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "EPROM",
    "key": "eprom",
    "src": "/assets/company-logos/eprom.gif",
    "ink": false,
    "muted": false
  },
  {
    "name": "Modern Gas",
    "key": "modern-gas",
    "src": "/assets/company-logos/modern-gas.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Enppi",
    "key": "enppi",
    "src": "/assets/company-logos/enppi.webp",
    "ink": true,
    "muted": false
  },
  {
    "name": "Overseas Gas",
    "key": "overseas-gas",
    "src": "/assets/company-logos/overseas-gas.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "STATERRA — KSA Branch",
    "key": "staterra",
    "src": "/assets/company-logos/staterra.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Shalateen Mineral Resource Company",
    "key": "smrc",
    "src": "/assets/company-logos/smrc.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "ABS Group — USA",
    "key": "abs",
    "src": "/assets/company-logos/abs.svg",
    "ink": true,
    "muted": false
  },
  {
    "name": "Damietta LNG (DLNG)",
    "key": "dlng",
    "src": "/assets/company-logos/dlng.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "PetroSafe",
    "key": "petrosafe",
    "src": "/assets/company-logos/petrosafe.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Intertek Egypt",
    "key": "intertek",
    "src": "/assets/company-logos/intertek.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Apave Group",
    "key": "apave",
    "src": "/assets/company-logos/apave.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "ADNOC",
    "key": "adnoc",
    "src": "/assets/company-logos/adnoc.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Aramco",
    "key": "aramco",
    "src": "/assets/company-logos/aramco.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "PDO",
    "key": "pdo",
    "src": "/assets/company-logos/pdo.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "PETROJET",
    "key": "petrojet",
    "src": "/assets/company-logos/petrojet.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Hill International",
    "key": "hill",
    "src": "/assets/company-logos/hill.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Methanex",
    "key": "methanex",
    "src": "/assets/company-logos/methanex.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Khatib & Alami",
    "key": "khatib-alami",
    "src": "/assets/company-logos/khatib-alami.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "RATP",
    "key": "ratp",
    "src": "/assets/company-logos/ratp.svg",
    "ink": true,
    "muted": false
  },
  {
    "name": "Hassan Allam Construction",
    "key": "hassan-allam",
    "src": "/assets/company-logos/hassan-allam.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "ENAP",
    "key": "enap",
    "src": "/assets/company-logos/enap.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "QatarEnergy",
    "key": "qatarenergy",
    "src": "/assets/company-logos/qatarenergy.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Red Sea Global",
    "key": "red-sea-global",
    "src": "/assets/company-logos/red-sea-global.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "L’Oréal",
    "key": "loreal",
    "src": "/assets/company-logos/loreal-visible.svg",
    "ink": true,
    "muted": false
  },
  {
    "name": "Wood",
    "key": "wood",
    "src": "/assets/company-logos/wood.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Worley",
    "key": "worley",
    "src": "/assets/company-logos/worley.webp",
    "ink": true,
    "muted": false
  },
  {
    "name": "Air Liquide",
    "key": "air-liquide",
    "src": "/assets/company-logos/air-liquide.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Halliburton",
    "key": "halliburton",
    "src": "/assets/company-logos/halliburton.svg",
    "ink": false,
    "muted": false
  },
  {
    "name": "Marsh",
    "key": "marsh",
    "src": "/assets/company-logos/marsh.svg",
    "ink": false,
    "muted": true
  },
  {
    "name": "National Water Company (NWC)",
    "key": "nwc",
    "src": "/assets/company-logos/nwc.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "REDA",
    "key": "reda",
    "src": "/assets/company-logos/reda.webp",
    "ink": false,
    "muted": false
  },
  {
    "name": "Boost Mind Technology",
    "key": "boostmind",
    "src": "/assets/company-logos/boostmind.webp",
    "ink": false,
    "muted": false
  }
];

const hseIndex=softwareApplications.findIndex(a=>a.id==='hse-insight');
softwareApplications.splice(1,0,...softwareApplications.splice(hseIndex,1));

for(const app of softwareApplications)app.visual=serviceVisuals.software['app-'+app.id];
