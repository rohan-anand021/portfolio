"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedWrapper } from "./components/AnimatedWrapper";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "experience" | "skills" | "blog"
  >("projects");
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "FairCase AI",
      description:
        "RAG-LLM workflow to evaluate police misconduct allegations against departmental rules.",
      tech: [
        "Python",
        "OpenAI API",
        "LangChain",
        "Chroma",
        "FastAPI",
        "Pandas",
      ],
      github:
        "https://github.com/rohan-anand21/faircase-ai/tree/main/fa24/LLM_Assesment_Model",
      demo: "/pdfs/faircase-poster.pdf",
    },
    {
      title: "Hotel Sentiment Analysis",
      description:
        "Classification of hotel reviews as positive vs. negative across three NN architectures: LSTM, Stacked LSTM, and Mini BERT",
      tech: [
        "Python",
        "Tensorflow",
        "Transformers",
        "HuggingFace",
        "FastAPI",
        "Pandas",
      ],
      github:
        "https://github.com/rohan-anand21/Hotel-Sentiment-Analysis",
      demo: "https://huggingface.co/spaces/rohan0212/hotel-sentiment-analysis",
    },
    {
      title: "Maternal Health & Infant Outcomes Analysis",
      description:
        "A statistical exploration of how maternal lifestyle (esp. smoking) correlates with infant outcomes (birth weight, APGAR), with additional factors such as BMI.",
      tech: ["R", "Quarto"],
      github:
        "https://github.com/rohan-anand21/ma415-maternal-health-analysis/tree/main",
      demo: "https://ma-415-n8hl1cp2x-rohan-anands-projects.vercel.app",
    },
    {
      title: "Unemployment & Voting Patterns Analysis",
      description:
        "Regression analysis of county-level unemployment, age demographics, and Democratic vote share across seven swing states in the 2020 election.",
      tech: ["R", "Quarto"],
      github: "https://github.com/rohan-anand021/politics",
      demo: "/pdfs/399poster.pdf",
    },
    {
      title: "Boston 311 Service Tracker",
      description:
        "An analysis of 2.7M+ 311 requests (2011–2023) to surface disparities and service bottlenecks across neighborhoods.",
      tech: ["Python", "Pandas", "Ipywidgets", "PowerBI"],
      github:
        "https://github.com/rohan-anand21/311-service-tracker/tree/main/fa23-team-d",
      demo: "/pdfs/311-poster.pdf",
    },
    {
      title: "NFL Voronoi Map",
      description: "What NFL team should you root for based on where you live?",
      tech: ["Next.js"],
      github: "https://github.com/rohan-anand021/nfl-map",
      demo: "https://nfl-voronoi-map.vercel.app",
    },
    {
      title: "Graphing & Analyzing a Dataset in Rust",
      description:
        "A graph built with petgraph to explore degrees of separation and the friendship paradox on a Twitter-friends dataset.",
      tech: ["Rust", "petgraph"],
      github: "https://github.com/rohan-anand021/Analyzing-a-Graph-using-Rust",
      demo: "/pdfs/report.pdf",
    },
    {
      title: "COVID-19 Mortality Prediction",
      description:
        "Supervised learning (Decision Trees, k-NN) with SVD for dimensionality reduction on a Kaggle dataset to predict mortality.",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
      github: null,
      demo: "/pdfs/covid.pdf",
    },
  ];

  const experiences = [
    {
      title: "Data Engineer",
      company: "Dataeconomy",
      companyUrl: "https://dataeconomy.ai",
      location: "Charlotte, NC",
      period: "March 2025 - Present",
      description:
        "I developed and deployed an implicit-feedback ALS recommender that improved top-10 precision by ~50% versus a baseline. I deployed this model on AWS ECS as a Dockerized FastAPI service and fully automated its retraining and deployment with a Jenkins CI/CD pipeline. I also engineered a near-real-time data ingestion system with Kafka and Snowflake , rewrote a data validation package with PySpark and Great Expectations to cut runtime by ~70% , and implemented complete historical data management using SQL, dbt, and Iceberg tables",
      tech: [
        "Python",
        "SQL",
        "Snowflake",
        "AWS",
        "Docker",
        "Jenkins",
        "GraphQL",
        "dbt",
        "Git",
      ],
      libraries: [
        "Pandas",
        "NumPy",
        "Optuna",
        "Implicit",
        "FastAPI",
        "Snowpark",
        "PySpark",
        "Great Expectations",
        "Airflow",
      ],
    },
    {
      title: "AI Engineer",
      company: "BU Spark!",
      companyUrl: "https://www.bu.edu/spark/",
      location: "Boston, MA",
      period: "September 2024 - January 2025",
      description:
        "I built an end-to-end system that reduced client investigation time by ~80%. This involved creating data pipelines to ingest, clean, and deduplicate officer records and implementing an embeddings pipeline with OpenAI and a Chroma vector index. The solution was delivered as a FastAPI service, orchestrated with LangChain, which improved offline recall by ~40% through feature augmentation and targeted prompt templates.",
      tech: ["Python", "Excel", "OpenAI API", "Chroma", "FastAPI"],
      libraries: ["Pandas", "NumPy", "Seaborn", "Matplotlib"],
    },
    {
      title: "Data Services Intern",
      company: "Axis Technology, LLC",
      companyUrl: "https://www.axistechnologyllc.com",
      location: "Boston, MA",
      period: "May 2024 - Aug 2024",
      description:
        "I built a scalable synthetic-data generator in Python that substantially improved offline PII detection performance on a held-out real dataset. I also wrote a parser to read JSON database schemas and automatically tag column semantic types and authored tests to evaluate and document OpenSearch query relevance for a table-similarity search feature.",
      tech: ["Python", "SQL"],
      libraries: ["Faker", "MySQL"],
    },
    {
      title: "Data Analyst Intern",
      company: "AS Insurance Agnecy",
      companyUrl: "https://www.asureagency.com",
      location: "Manchester, NH",
      period: "June 2022 - Aug 2022",
      description:
        "I consolidated customer and policy data from 2,500+ documents with Pandas and wrote Snowflake SQL to segment customers. I then built 10-15 Power BI and Tableau dashboards for renewal targeting, which helped streamline the outreach process and contributed to a 95% client retention rate over the period.",
      tech: ["Python", "SQL", "Excel", "Snowflake", "Tableau"],
      libraries: ["Pandas"],
    },
  ];

  const resumes = [
    {
      label: "DE Resume",
      href: "/resumes/Resume%20-%20Rohan%20Anand.pdf",
    },
    {
      label: "DS Resume",
      href: "/resumes/Resume%20--%20Rohan%20Anand.pdf",
    },
  ];

  const projectTechSet = new Set(
    projects.flatMap((project) => project.tech ?? []),
  );
  const experienceToolSet = new Set(
    experiences.flatMap((experience) => [
      ...(experience.tech ?? []),
      ...(experience.libraries ?? []),
    ]),
  );
  const allToolSet = new Set([...projectTechSet, ...experienceToolSet]);
  const remainingTools = new Set(allToolSet);

  const pickTools = (candidates: string[]) => {
    const matched = candidates.filter((item) => remainingTools.has(item));
    matched.forEach((item) => remainingTools.delete(item));
    return matched;
  };

  const toolCategories = [
    {
      name: "Languages",
      items: pickTools(["Python", "R", "Rust", "SQL"]),
    },
    {
      name: "Frameworks",
      items: pickTools(["Quarto", "FastAPI", "LangChain"]),
    },
    {
      name: "Data & ML Tooling",
      items: pickTools([
        "Pandas",
        "scikit-learn",
        "Optuna",
        "Implicit",
        "PySpark",
        "Snowpark",
        "Chroma",
        "OpenAI API",
        "petgraph",
        "dbt",
      ]),
    },
    {
      name: "Cloud, DevOps & Orchestration",
      items: pickTools([
        "AWS",
        "Docker",
        "Jenkins",
        "Git",
        "Airflow",
        "Snowflake",
        "MySQL",
      ]),
    },
    {
      name: "Analytics & Visualization",
      items: pickTools([
        "PowerBI",
        "Tableau",
        "Ipywidgets",
        "Seaborn",
        "Matplotlib",
        "Excel",
        "NumPy",
      ]),
    },
    {
      name: "Data Quality & Utilities",
      items: pickTools(["Great Expectations", "Faker", "PyDeequ", "GraphQL"]),
    },
  ].filter((category) => category.items.length > 0);

  const socials = [
    {
      name: "github",
      url: "https://github.com/rohan-anand21",
      iconSrc: "/github-personal%20copy.svg",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/rohan-h-anand",
      iconSrc: "/linkedin%20copy.svg",
    },
    { name: "gmail", email: "anandro@bu.edu", iconSrc: "/gmail%20copy.svg" },
  ];

  const handleEmailCopy = async (email: string) => {
    if (!email) {
      return;
    }

    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = null;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopyMessage("Email copied to clipboard");
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch (error) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopyMessage("Email copied to clipboard");
      } catch {
        setCopyMessage("Unable to copy email");
      }
    }

    copyTimeoutRef.current = window.setTimeout(() => {
      setCopyMessage(null);
      copyTimeoutRef.current = null;
    }, 2000);
  };

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 min-h-svh flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="mb-6">
          <AnimatedWrapper delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
              <span>
                Hey, I&apos;m{" "}
                <span className="text-zinc-900 dark:text-zinc-100">Rohan</span>
              </span>
            </h1>
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
              Data Engineer in Charlotte &mdash; Analyzing data and building the
              systems to do so. Currently @{" "}
              <a
                href="https://dataeconomy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Dataeconomy
              </a>
              . Contact me below.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.6}>
            {/* Social Links */}
            <div className="flex w-full items-center justify-between gap-5">
              <div className="flex flex-row gap-3">
                {socials.map((social) => {
                  const iconContent = social.iconSrc ? (
                    <>
                      <img
                        src={social.iconSrc}
                        alt=""
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">{social.name}</span>
                    </>
                  ) : (
                    social.name
                  );

                  const sharedClasses =
                    "inline-flex items-center justify-center p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors";

                  if (social.url) {
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={sharedClasses}
                      >
                        {iconContent}
                      </a>
                    );
                  }

                  return (
                    <button
                      key={social.name}
                      type="button"
                      onClick={() => handleEmailCopy(social.email ?? "")}
                      className={sharedClasses}
                    >
                      {iconContent}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-row items-center gap-3">
                {resumes.map((resume) => (
                  <a
                    key={resume.href}
                    href={resume.href}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>{resume.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div
              className="mt-2 text-xs text-zinc-500 dark:text-zinc-400"
              style={{ minHeight: "1rem" }}
              aria-live="polite"
            >
              {copyMessage}
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.8}>
            {/* Navigation Tabs */}
            <div className="inline-flex h-9 w-fit items-center justify-center rounded-lg mb-4 border-none bg-transparent p-0 -ml-[8px] mt-8">
              <button
                onClick={() => setActiveTab("projects")}
                className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 !bg-transparent !border-none !shadow-none transition-all duration-300 ease-out ${
                  activeTab === "projects"
                    ? "!font-bold !text-neutral-800 dark:!text-neutral-100"
                    : "!font-light !text-neutral-400 dark:!text-neutral-400"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 !bg-transparent !border-none !shadow-none transition-all duration-300 ease-out ${
                  activeTab === "experience"
                    ? "!font-bold !text-neutral-800 dark:!text-neutral-100"
                    : "!font-light !text-neutral-400 dark:!text-neutral-400"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 !bg-transparent !border-none !shadow-none transition-all duration-300 ease-out ${
                  activeTab === "skills"
                    ? "!font-bold !text-neutral-800 dark:!text-neutral-100"
                    : "!font-light !text-neutral-400 dark:!text-neutral-400"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("blog")}
                className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 !bg-transparent !border-none !shadow-none transition-all duration-300 ease-out ${
                  activeTab === "blog"
                    ? "!font-bold !text-neutral-800 dark:!text-neutral-100"
                    : "!font-light !text-neutral-400 dark:!text-neutral-400"
                }`}
              >
                Blog
              </button>
            </div>
          </AnimatedWrapper>
        </section>

        {/* Projects Section */}
        {activeTab === "projects" && (
          <section className="mb-12">
            <div className="space-y-8">
              <ul className="space-y-8">
                {projects.map((project, index) => (
                  <AnimatedWrapper
                    key={index}
                    delay={(index + 1) * 0.1}
                    direction="x"
                  >
                    <li>
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">{project.title}</h3>
                        <div className="flex flex-row gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              GitHub{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3"
                                aria-hidden="true"
                              >
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              </svg>
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              View{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3"
                                aria-hidden="true"
                              >
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={tech}
                            className="text-xs text-zinc-400 dark:text-zinc-500"
                          >
                            {tech}
                            {i < project.tech.length - 1 && " /"}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimatedWrapper>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <section className="mb-12">
            <div className="space-y-8">
              <ul className="space-y-8">
                {experiences.map((experience, index) => (
                  <AnimatedWrapper
                    key={index}
                    delay={(index + 1) * 0.1}
                    direction="x"
                  >
                    <li>
                      <div className="mb-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-md font-medium">
                            {experience.title}
                            {experience.company && (
                              <>
                                {" "}
                                at{" "}
                                <a
                                  href={experience.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                  {experience.company}
                                </a>
                              </>
                            )}
                          </h3>
                          {experience.location && (
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                              {experience.location}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {experience.period}
                        </p>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {experience.libraries &&
                        experience.libraries.length > 0 && (
                          <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                            Libraries:{" "}
                            {experience.libraries.map((library, i) => (
                              <span key={library}>
                                {library}
                                {i < experience.libraries.length - 1 && " / "}
                              </span>
                            ))}
                          </div>
                        )}
                    </li>
                  </AnimatedWrapper>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <section className="mb-12">
            <div className="space-y-8">
              {toolCategories.map((category, index) => (
                <AnimatedWrapper
                  key={category.name}
                  delay={(index + 1) * 0.1}
                  direction="x"
                >
                  <div>
                    <h3 className="text-md font-medium mb-2">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </section>
        )}

        {/* Blog Section */}
        {activeTab === "blog" && (
          <section className="mb-12">
            <div className="space-y-8">
              <AnimatedWrapper delay={0.1} direction="x">
                <div>
                  <h3 className="text-md font-medium mb-2">
                    Papers from College
                  </h3>
                  <div className="space-y-3">
                    {[{
                      title: "Code of Ethics",
                      href: "https://rh-anand.bearblog.dev/code-of-ethics/",
                    },
                    {
                      title: "Hiring Bias at Amazon",
                      href: "https://rh-anand.bearblog.dev/hiring-bias-at-amazon/",
                    },
                    {
                      title: "More Comprehensive Facial Recognition",
                      href: "https://rh-anand.bearblog.dev/facial-recognition/",
                    }].map((paper) => (
                      <div
                        key={paper.href}
                        className="flex items-baseline justify-between"
                      >
                        <h4 className="text-sm text-zinc-500 dark:text-zinc-400">
                          {paper.title}
                        </h4>
                        <a
                          href={paper.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                          View
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                            aria-hidden="true"
                          >
                            <path d="M15 3h6v6" />
                            <path d="M10 14 21 3" />
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <AnimatedWrapper delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center"></footer>
      </AnimatedWrapper>
    </main>
  );
}
