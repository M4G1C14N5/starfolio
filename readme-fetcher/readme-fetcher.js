const { Octokit } = require("@octokit/rest");
require("dotenv").config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function fetchReadme(owner, repo) {
  try {
    const { data } = await octokit.repos.getReadme({ owner, repo });
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    
    // Frontmatter for Astro
    const frontmatter = `---
title: "${repo} README"
publishedAt: "${new Date().toISOString().split('T')[0]}"
updatedAt: "${new Date().toISOString().split('T')[0]}"
author: "Thomas Tsangou"
summary: "Auto-fetched README from ${owner}/${repo}"
---
`;
    
    const fs = require('fs');
    fs.writeFileSync(`/home/pluto/starfolio/src/content/blog/${repo}-readme.mdx`, frontmatter + content);
    console.log(`Successfully fetched and saved ${repo} README.`);
  } catch (error) {
    console.error(`Error fetching README for ${owner}/${repo}:`, error.message);
  }
}

// Updated repo list
const repos = [
  { owner: 'M4G1C14N5', repo: 'Data-Mining-TOTY-Prediction' },
  { owner: 'M4G1C14N5', repo: 'Football-Analytics-Engine' },
  { owner: 'M4G1C14N5', repo: 'scouting-report' },
  { owner: 'M4G1C14N5', repo: 'private-mission-control' }
];

async function run() {
  for (const repo of repos) {
    await fetchReadme(repo.owner, repo.repo);
  }
}

run();
