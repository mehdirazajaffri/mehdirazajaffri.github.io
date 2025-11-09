import {
  aws,
  backend,
  berkeley,
  coverhunt,
  css,
  django,
  docker,
  frontend,
  git,
  graphql,
  html,
  java,
  javascript,
  lambda,
  nodejs,
  postgresql,
  prototyping,
  python,
  reactjs,
  redux,
  sellanycar,
  servicemart,
  tailwind,
  typescript,
  ux,
  venturedive,
  vistajet,
  xbyoj,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Microservices Development',
    icon: ux,
  },
  {
    title: 'Cloud / DevOps',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node js',
    icon: nodejs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'lambda',
    icon: lambda,
  },
];

const experiences = [
  {
    title: 'Junior Software Enginner',
    company_name: 'VentureDive',
    icon: venturedive,
    iconBg: '#333333',
    date: 'Feb 2016 - Dec 2018',
  },
  {
    title: 'Software Engineer',
    company_name: 'VentureDive',
    icon: venturedive,
    iconBg: '#333333',
    date: 'Dec 2018 - Dec 2019',
  },
  {
    title: 'Software Engineer',
    company_name: 'SellanyCar',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2020 - March 2021',
  },
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Berkeley Assets',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2021 - Apr 2022',
  },
  {
    title: 'Lead Full Stack Software Engineer',
    company_name: 'ojlifestyle',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Aether',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ServiceMarket',
    description:
      'ServiceMarket is the easiest way to book home services such as home cleaning, PCR test at home, moving, salon at home, home maintenance, handyman. Developed end to end System.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: servicemart,
    company: 'VentureDive',
    demo: 'https://servicemarket.com/',
  },
  {
    id: 'project-2',
    name: 'Sell Any Car',
    description:
      'Sell your car in 30 minutes, Developed Image Processing microservice using AWS Step Functions',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: sellanycar,
    demo: 'https://sellanycar.com/',
  },
  {
    id: 'project-3',
    name: 'VistaJet',
    description:
      'VistaJet offers access to a global fleet of silver and red jets, offering an unparalleled cabin experience flying into and out of the hardest to reach destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: vistajet,
    demo: 'https://vistajet.com/',
  },
  {
    id: 'project-4',
    name: 'Berkeley Assets',
    description: `Devloped the entire Admin System with DJango Admin, Novus App on Flutter and Django Rest`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: berkeley,
    demo: 'https://berkeley-assets.com/',
  },
  {
    id: 'project-5',
    name: 'X by OJ',
    description: 'Loyalty Application using djstripe, django and drf',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: xbyoj,
    demo: 'https://www.oj-lifestyle.com/en-gb/x/home',
  },
];

const backendProjects = [
  {
    id: 'backend-1',
    name: 'Internal LLM',
    shortDescription:
      'AI-powered chatbot that converts natural language queries into SQL using RAG and Claude LLM.',
    fullDescription: `Enterprise AI system that converts natural language queries into SQL using RAG and Claude LLM. Enables non-technical employees to query data warehouses without SQL knowledge.

**Key Features:**
• Natural language to SQL conversion
• RAG-based context retrieval from database schema
• Real-time query execution against AWS Redshift
• Conversational history for complex analysis

**Technical Stack:**
• AWS Lambda + FastAPI (serverless API)
• AWS Bedrock (Claude LLM)
• Amazon Titan (embeddings)
• MongoDB (vector storage)
• LangChain (agent orchestration)

**Architecture:**
• Schema metadata embedded as vectors in MongoDB
• Vector similarity search for relevant context
• SQL generation using retrieved schema context
• Query validation and execution pipeline`,
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'AWS Lambda',
        color: 'green-text-gradient',
      },
      {
        name: 'Claude',
        color: 'pink-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'orange-text-gradient',
      },
      {
        name: 'LangChain',
        color: 'purple-text-gradient',
      },
      {
        name: 'RAG',
        color: 'yellow-text-gradient',
      },
    ],
    image: aws,
    demo: 'https://osamaaref.com/projects/internal-llm',
    flowSteps: [
      {
        step: 'User Query',
        description:
          'Employee submits natural language question through chat interface',
      },
      {
        step: 'Process Query',
        description: 'FastAPI endpoint receives and validates the request',
      },
      {
        step: 'Extract Keywords',
        description:
          'Claude LLM analyzes query and extracts relevant keywords and intent',
      },
      {
        step: 'Vector Search',
        description:
          'Embed keywords and search MongoDB for matching schema context using similarity',
      },
      {
        step: 'Build SQL',
        description:
          'Claude generates SQL query using retrieved schema context and user intent',
      },
      {
        step: 'Execute Query',
        description:
          'Validate and execute SQL against AWS Redshift data warehouse',
      },
      {
        step: 'Format Results',
        description:
          'Transform query results into readable format and return to user',
      },
    ],
  },
  {
    id: 'backend-2',
    name: 'Enterprise NATS Messaging',
    shortDescription:
      'Distributed messaging system for real-time sports data distribution with high availability.',
    fullDescription: `Distributed messaging system for real-time sports data distribution with high availability and fault tolerance. Handles MQTT feeds and distributes to internal systems and web clients.

**Key Features:**
• 3-node NATS cluster for fault tolerance
• JetStream persistence (message durability & replay)
• Zero message loss architecture
• Wildcard subscriptions (match-specific or category-wide)
• Low latency real-time distribution

**Technical Stack:**
• NATS (messaging broker)
• Go (authentication service)
• Docker (containerization)
• AWS (infrastructure)
• JetStream (persistence layer)

**Security:**
• Private IP cluster communication
• NKEY authentication (internal systems)
• JWT token validation (web clients)
• Multi-tenant security with separate accounts
• TLS encryption for all communications`,
    tags: [
      {
        name: 'Go',
        color: 'blue-text-gradient',
      },
      {
        name: 'Docker',
        color: 'green-text-gradient',
      },
      {
        name: 'AWS',
        color: 'pink-text-gradient',
      },
      {
        name: 'JetStream',
        color: 'orange-text-gradient',
      },
      {
        name: 'MQTT',
        color: 'purple-text-gradient',
      },
    ],
    image: aws,
    demo: 'https://osamaaref.com/projects/nats',
    flowSteps: [
      {
        step: 'MQTT Feed',
        description:
          'External sports provider sends real-time updates via MQTT protocol',
      },
      {
        step: 'System Client',
        description:
          'Go client receives MQTT messages, formats data, and authenticates with NKEY',
      },
      {
        step: 'Publish to NATS',
        description:
          'Client publishes formatted messages to NATS cluster on topic channels',
      },
      {
        step: 'Cluster Distribution',
        description:
          '3-node NATS cluster replicates and distributes messages via JetStream',
      },
      {
        step: 'Internal Systems',
        description:
          'Backend services consume messages using NKEY authentication',
      },
      {
        step: 'Web Clients',
        description:
          'Browser clients connect via TLS, authenticate with JWT, and receive updates',
      },
    ],
  },
  {
    id: 'backend-3',
    name: 'Rebill Optimization ML',
    shortDescription:
      'Machine learning pipeline that predicts optimal timing for payment retry attempts.',
    fullDescription: `ML system that predicts optimal timing for payment retry attempts. Classifies failed payments into 192 time-slot categories to maximize success rates.

**Key Features:**
• Predicts retry timing (1 hour to next week)
• 50+ engineered features from transaction data
• Weekly model retraining
• Real-time inference endpoint
• Automated evaluation and deployment

**Technical Stack:**
• AWS Step Functions (orchestration)
• AWS Glue (ETL & feature engineering)
• Amazon SageMaker (model training & deployment)
• Random Forest classifier
• Redshift (data source)

**ML Pipeline:**
• Extract historical transaction data
• Feature engineering (temporal, behavioral, payment patterns)
• Model training and validation
• Automated deployment with quality thresholds
• Real-time inference integration`,
    tags: [
      {
        name: 'Step Functions',
        color: 'blue-text-gradient',
      },
      {
        name: 'SageMaker',
        color: 'green-text-gradient',
      },
      {
        name: 'AWS Glue',
        color: 'pink-text-gradient',
      },
      {
        name: 'Machine Learning',
        color: 'orange-text-gradient',
      },
      {
        name: 'ETL',
        color: 'purple-text-gradient',
      },
    ],
    image: aws,
    demo: 'https://osamaaref.com/projects/rebill-optimization',
    flowSteps: [
      {
        step: 'Trigger Pipeline',
        description:
          'Scheduled event or manual trigger initiates Step Functions workflow',
      },
      {
        step: 'Extract Data',
        description:
          'AWS Glue job extracts historical transaction data from Redshift warehouse',
      },
      {
        step: 'Feature Engineering',
        description:
          'Glue transforms raw data into 50+ ML features including temporal and behavioral patterns',
      },
      {
        step: 'Train Model',
        description:
          'SageMaker trains Random Forest classifier on prepared training dataset',
      },
      {
        step: 'Evaluate Model',
        description:
          'Test model on validation set and check if metrics meet deployment thresholds',
      },
      {
        step: 'Deploy Endpoint',
        description:
          'If approved, deploy new model version to SageMaker endpoint for production inference',
      },
    ],
  },
];

export { services, technologies, experiences, projects, backendProjects };
