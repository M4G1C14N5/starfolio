import { Icons } from "@/components/icons";
import { House, Library, FileText } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Thomas Tsangou",
  initials: "TT",
  url: "https://thomas.camuedlabs.org",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York,+NY",
  description:
    "Building Scalable Data Pipelines and Production-Ready AI Systems.",
  summary:
    "I am a CS graduate specializing in the infrastructure and automation required to bring data and ML models to production. My expertise spans Linux system administration, Docker orchestration, and robust Python ETL/ELT. I thrive at the intersection of infrastructure, data, and machine learning, ensuring reliable, high-performance systems.",
  avatarUrl: "/worked.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false, // disabling hackathons section as not relevant
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false, // disable photos unless user has them
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me an email and I'll respond whenever I can.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "Postgres", icon: Postgresql },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Astro", icon: Astro },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "thomastsangou@gmail.com",
    tel: "929-586-1252",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/M4G1C14N5",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thomas-tsangou-ab99a218a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Thomas_Tsangou_Resume.pdf",
        icon: FileText,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:thomastsangou@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Work Ed",
      href: "https://worked.com/",
      badges: ["Education", "AI"],
      location: "New York, NY",
      title: "AI Instructor & Program Lead",
      logoUrl: "https://www.google.com/s2/favicons?domain=worked.com&sz=128",
      start: "Jan 2024",
      end: "Present",
      description:
        "Developing and delivering lessons on AI concepts and chatbot development to over 100 students. Guided students through practical prompt engineering and training their own classification models.",
    },
    {
      company: "Morrison Mentors",
      href: "https://www.mmentors.org/",
      badges: ["Education", "STEAM"],
      location: "New York, NY",
      title: "Lead Instructor",
      logoUrl: "https://www.google.com/s2/favicons?domain=mmentors.org&sz=128",
      start: "Nov 2024",
      end: "Nov 2025",
      description:
        "Led STEAM education programs delivering engaging classes in robotics, programming, and web design. Guided students in applying the scientific method to structure and visualize data sets.",
    },
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/",
      badges: ["Fellowship"],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "https://www.google.com/s2/favicons?domain=headstarter.co&sz=128",
      start: "Jul 2024",
      end: "Dec 2024",
      description:
        "Completed an intensive 7-week fellowship focused on shipping production-ready code. Built and deployed 5 different AI applications, prioritizing rapid prototyping and clean architecture.",
    },
    {
      company: "IBM Corporation",
      href: "https://ibm.com",
      badges: ["Data Engineering"],
      location: "New York, NY",
      title: "Data Engineering Intern (Security)",
      logoUrl: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      start: "Feb 2023",
      end: "Jan 2024",
      description:
        "Automated onboarding of 10,000 databases into IBM Guardium using Python scripting and REST APIs, clearing a massive data governance backlog. Improved team's reporting capabilities by embedding Python and pandas directly into Power BI.",
    },
    {
      company: "IBM Corporation",
      href: "https://ibm.com",
      badges: ["Software Engineering"],
      location: "New York, NY",
      title: "Talent Acquisition Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      start: "Jun 2022",
      end: "Dec 2022",
      description:
        "Collaborated with key stakeholders and developers to maintain new features for Select for IBM (SFI). Managed and optimized a Cloudant (NoSQL) Database using TypeScript.",
    },
  ],
  education: [
    {
      school: "Hunter College/CUNY",
      href: "https://hunter.cuny.edu",
      degree: "Bachelor of Arts, Computer Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=hunter.cuny.edu&sz=128",
      start: "Aug 2020",
      end: "Dec 2025",
    },
    {
      school: "NYC College of Technology/CUNY",
      href: "https://citytech.cuny.edu",
      degree: "Associate of Applied Science, Computer Systems Technology",
      logoUrl: "https://www.google.com/s2/favicons?domain=citytech.cuny.edu&sz=128",
      start: "Aug 2017",
      end: "Aug 2020",
    },
  ],
  projects: [
    {
      title: "Team of the Year Predictor",
      href: "https://github.com/M4G1C14N5/Data-Mining-TOTY-Prediction",
      dates: "2024",
      active: true,
      description:
        "Built an end-to-end predictive modeling pipeline, handling data ingestion by scraping 16 seasons of data and performing critical feature engineering. Established the foundation for a CI/CD pipeline to automate workflows.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "CI/CD",
        "Predictive Modeling",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/M4G1C14N5/Data-Mining-TOTY-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Football (Soccer) Scouting Report",
      href: "https://github.com/M4G1C14N5/scouting-report",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Engineered a resilient data acquisition pipeline combining static and dynamic scraping techniques, implementing a fault-tolerant system with custom retry logic and exponential backoff.",
      technologies: [
        "Python",
        "Docker",
        "PostgreSQL",
        "Apache Airflow",
        "Selenium",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/M4G1C14N5/scouting-report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "On-Premise Private Cloud Infrastructure",
      href: "https://github.com/M4G1C14N5/private-mission-control",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "Architected and provisioned a stable, bare-metal server for hosting containerized ML services, demonstrating expertise in Linux System Administration and security hardening using Docker, Nginx Proxy Manager, and ZeroTier VPN.",
      technologies: [
        "Linux",
        "Docker",
        "ZeroTier",
        "Cloudflare Tunnels",
        "Nginx",
        "Ollama",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/M4G1C14N5/private-mission-control",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
