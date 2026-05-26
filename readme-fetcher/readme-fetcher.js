const { Octokit } = require("@octokit/rest");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const blogDir = path.resolve(__dirname, "../src/content/blog");
const projectsJsonPath = path.resolve(__dirname, "../src/data/projects-generated.json");

async function fetchReadme(owner, repo) {
  try {
    const { data } = await octokit.repos.getReadme({ owner, repo });
    const content = Buffer.from(data.content, "base64").toString("utf8");

    const frontmatter = `---
title: "${repo} README"
publishedAt: "${new Date().toISOString().split("T")[0]}"
updatedAt: "${new Date().toISOString().split("T")[0]}"
author: "Thomas Tsangou"
summary: "Auto-fetched README from ${owner}/${repo}"
---
`;

    fs.writeFileSync(path.join(blogDir, `${repo}-readme.md`), frontmatter + content);
    console.log(`Successfully fetched and saved ${repo} README.`);
  } catch (error) {
    console.error(`Error fetching README for ${owner}/${repo}:`, error.message);
  }
}

async function fetchProjectMeta(owner, repo) {
  try {
    const { data: repoData } = await octokit.repos.get({ owner, repo });
    const { data: topicsData } = await octokit.repos.getAllTopics({ owner, repo });

    const created = new Date(repoData.created_at);
    const month = created.toLocaleString("en-US", { month: "long" });
    const year = created.getFullYear();

    const technologies =
      topicsData.names.length > 0
        ? topicsData.names
        : [repoData.language].filter(Boolean);

    const links = [
      { type: "GitHub", href: repoData.html_url },
      ...(repoData.homepage ? [{ type: "Website", href: repoData.homepage }] : []),
    ];

    return {
      title: repoData.name,
      href: repoData.html_url,
      dates: `${month} ${year} - Present`,
      active: !repoData.archived,
      description: repoData.description || "",
      technologies,
      links,
      image: "",
      video: "",
    };
  } catch (error) {
    console.error(`Error fetching project meta for ${owner}/${repo}:`, error.message);
    return null;
  }
}

async function updateProjectsJson() {
  let existing = [];
  try {
    existing = JSON.parse(fs.readFileSync(projectsJsonPath, "utf8"));
  } catch (_) {
    // File doesn't exist yet — start fresh
  }

  const existingByHref = new Map(existing.map((p) => [p.href, p]));

  const updated = [];
  for (const { owner, repo } of projectRepos) {
    const expectedHref = `https://github.com/${owner}/${repo}`;
    const meta = await fetchProjectMeta(owner, repo);

    if (!meta) {
      // GitHub fetch failed — preserve existing entry so it isn't lost
      const existingEntry = existingByHref.get(expectedHref);
      if (existingEntry) updated.push(existingEntry);
      continue;
    }

    const existingEntry = existingByHref.get(meta.href);
    if (existingEntry) {
      // Preserve hand-curated description/dates/technologies; only sync active status
      updated.push({ ...existingEntry, active: meta.active });
    } else {
      updated.push(meta);
    }
  }

  fs.writeFileSync(projectsJsonPath, JSON.stringify(updated, null, 2));
  console.log("Successfully updated projects-generated.json");
}

// Repos fetched for blog README posts
const repos = [
  { owner: "M4G1C14N5", repo: "starfolio" },
  { owner: "M4G1C14N5", repo: "Data-Mining-TOTY-Prediction" },
  { owner: "M4G1C14N5", repo: "Football-Analytics-Engine" },
  { owner: "M4G1C14N5", repo: "scouting-report" },
  { owner: "M4G1C14N5", repo: "private-mission-control" },
  { owner: "M4G1C14N5", repo: "StackMap" },
  { owner: "M4G1C14N5", repo: "Multi-tenant-RAG-Engine" },
];

// Repos shown in the My Projects section
const projectRepos = [
  { owner: "M4G1C14N5", repo: "Data-Mining-TOTY-Prediction" },
  { owner: "M4G1C14N5", repo: "scouting-report" },
  { owner: "M4G1C14N5", repo: "private-mission-control" },
  { owner: "M4G1C14N5", repo: "StackMap" },
  { owner: "M4G1C14N5", repo: "Multi-tenant-RAG-Engine" },
];

async function run() {
  for (const { owner, repo } of repos) {
    await fetchReadme(owner, repo);
  }
  await updateProjectsJson();
}

run();
