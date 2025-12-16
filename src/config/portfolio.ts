export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Stats {
  yearsExperience?: number;
  projectsCompleted?: number;
  happyClients?: number;
  customStat?: {
    value: string;
    label: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  content?: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    bio: string[];
    email: string;
    location?: string;
  };
  social: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  stats: Stats;
  about: {
    heading: string;
    paragraphs: string[];
  };
  blog?: {
    enabled: boolean;
    postsPerPage?: number;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Aakash Mukhi",
    firstName: "Aakash",
    lastName: "Mukhi",
    title: "DevOps Engineer",
    bio: [
      "I'm a DevOps and Platform Engineer who builds reliable, scalable systems that accelerate product development and reduce operational overhead.",
      "My work focuses on cloud-native architecture, automation, and developer platforms that create strong abstractions while removing friction for engineering teams.",
      "I approach problemts like a founder, not just a developer prioritizing clarity, veloocity, and long term technical leverage.",
      "I'm driven by designing systems that scale both technology and the people who use it."
    ],
    email: "akmukhi3@gmail.com",
    location: "Detroit, MI",
  },
  social: [
    { name: "GitHub", url: "https://github.com/akmukhi" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aakash-mukhi-561882118/" },
    //{ name: "Twitter", url: "https://twitter.com/yourusername" },
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend",
      skills: ["Bash", "Python", "PostgreSQL", "Java", "Ruby", "Go", "MySQL"],
    },
    {
      title: "Infrastructure as Code Tools",
      skills: ["Terraform", "Pulumi"],
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "GCP"],
    },
    {
      title: "Containerization and Orchestration",
      skills: ["Docker", "Kubernetes"],
    },
    {
      title: "CI/CD",
      skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Tekton", "Git"],
    },
    {
      title: "Monitoring and Logging",
      skills: ["Splunk", "Prometheus", "Grafana"],
    },
    {
      title: "Frameworks and Libraries",
      skills: ["Spring Boot", "Gradle", "Maven", "FastAPI"],
    }
  ],
  projects: [
    {
      title: "Developer Self-Service Portal",
      description:
        "A lightweight internal developer platform that lets engeineers deploy and manage Kubernetes services through a simple UI instead of complex YAML and CLI workflows. It automates service creation, temporary environments, secret management, and observability, giving teams faster, safer, and more consistent deployments.",
      technologies: ["React", "TypeScript", "FastAPI", "Python", "Kubernetes", "Terraform", "Docker"],
      githubUrl: "https://github.com/akmukhi/developer-self-service",
      //liveUrl: "https://yourproject.com",
      featured: true,
    },
    {
      title: "Config Validator Operator",
      description:
        "A Kubernetes operator built with Python and Kopf that automatically validates ConfigMaps and Secrets using declaritive, CRD based validation rules. It watches cluster resoruces, applies custom validation logic, and reports results through annotations, events and status. Bringing policy-as-code and strong abstraction to Kubernetes configuration hygiene.",
      technologies: ["Python", "Kopf", "Kubernetes", "Docker"],
      githubUrl: "https://github.com/akmukhi/kube-operator",
      //liveUrl: "https://yourproject.com",
    },
    {
      title: "CI/CD Developement Pipeline",
      description:
        "A fully automated, production ready CI/CD pipeline built with GitHub Actions, ArgoCD, and Kubernetes. It integrates multi-stage testing, mulit-architecture builds, security scanning, GitOps deployments, and progressive canary rollouts. The pipeline alos includes SLO monitoring, error budgets, and automated rollback logic. Providing a complete reliability focused delivery system that mirrors modern SRE and platform engineering best practices.",
      technologies: ["GitHub Actions", "ArgoCD", "Kubernetes", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/akmukhi/ci-cd-development-pipeline",
      //liveUrl: "https://yourproject.com",
    },
    {
      title: "Mini-IDP",
      description:
        "A lightweight internal developer platform that lets engineers deploy services, jobs and workers to Kubernetes without writing any YAML. It provides a unified CLI and REST API that generates Kubernetes resources with built-in best practices for autoscaling, metrics, logging, secrets, and GitOps. The platform mirrors what a production platform team builds on Day 1. Standardizing pattersn, secure defaults, and fully automated infrastructure with support for both direct deployments and ArgoCD driven workflos.",
      technologies: ["Python", "FastAPI", "Kubernetes", "Terraform", "Docker", "ArgoCD", "Prometheus", "Grafana", "GCP"],
      githubUrl: "https://github.com/akmukhi/mini-idp",
    },
    {
      title: "Golden Path",
      description:
        "A unified observability stack that delivers metrics, logs, and traces through a fully integrated Prometheus, Loki, Tempo, Granfana workflow. It includes Terraform modules for production GCP deployments, a Docker Compose setup for local development, pre-built Grafana dashboards, and smart alerting rules. A companion Python library provies automatic instrumentation, structured logging and tracing for Python applications.",
      technologies: ["Python", "FastAPI", "Kubernetes", "Terraform", "Docker", "ArgoCD", "Prometheus", "Grafana", "GCP", "Loki", "Tempo"],
      githubUrl: "https://github.com/akmukhi/golden-path",
      //liveUrl: "https://yourproject.com",
    },
    {
      title: "High-Scale Event Pipeline",
      description:
        "A high-scale, event-driven pipeline with dynamic autoscaling. Events are ingested via FastAPI service, published to Google Cloud Pub/Sub, and processed by consumer services that scale automatically based on queue lag. The system includes full observability with Prometheus metrics, OpenTelemetry traces, Loki logs, and Granfana dashboards. It showcases end-to-end production ready patterns.",
      technologies: ["Python", "FastAPI", "Docker", "GCP", "Prometheus", "OpenTelemetry", "Loki", "Grafana"],
      githubUrl: "https://github.com/akmukhi/high-scale-event-pipeline",
      //liveUrl: "https://yourproject.com",
    },
    {
      title: "Cloud Sentinal CLI",
      description:
        "Python based CLI tool for detecting cloud misconfigurations, IAM drift, and operational risks across GCP resources. It provides opinionated checks for IAM policies, Cloud Run services, Airflow/ETL workflows, JSON/YAML for automation, CI/CD integration, and alerting.",
      technologies: ["Python", "GCP", "Airflow"],
      githubUrl: "https://github.com/akmukhi/high-scale-event-pipeline",
      //liveUrl: "https://yourproject.com",
    },
    {
      title: "Data Pipeline Platform",
      description: "This is a production-ready ETL (Extract, Transform, Load) data pipeline platform built with Python, Celery, PostgreSQL, and Redis that enables efficient batch data processing from multiple database sources. The platform features asynchronous task processing, multiple transformation types (SQL, Python, or declarative configs), flexible write strategies, and built-in reliability features like automatic retries, idempotency, and schema evolution support. It includes a REST API, CLI, Docker setup, and comprehensive monitoring tools for managing and orchestrating scalable data pipelines in production environments.",
      technologies: ["Python", "Redis", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/akmukhi/data-pipeline-platform"
    }
  ],
  stats: {
    yearsExperience: 3,
    projectsCompleted: 20,
    //happyClients: 20,
    customStat: {
      value: "∞",
      label: "Cups of Coffee",
    },
  },
  about: {
    heading: "Crafting digital experiences with code and creativity.",
    paragraphs: [
      "Hello! I'm a passionate developer who loves turning ideas into reality through clean, efficient code. My journey in web development started years ago, and I've been hooked ever since.",
      "I specialize in building responsive web applications using modern technologies. I believe in writing code that's not just functional, but also maintainable and scalable.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
    ],
  },
  blog: {
    enabled: true,
    postsPerPage: 6,
  },
};

