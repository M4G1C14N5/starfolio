# Starfolio Portfolio

A clean, minimalist developer portfolio template adapted from [webrating/starfolio](https://github.com/webrating/starfolio).

## Features

- **Minimalist & Fast**: Built with Astro and React for an incredibly lightweight footprint.
- **Dynamic Data**: All portfolio information (experience, projects, skills) is driven by a single `resume.tsx` file.
- **Printable/Exportable**: Includes an integrated resume PDF generation pipeline.
- **Docker/Coolify Ready**: Runs on `@astrojs/node` standalone, making it trivial to deploy in modern containerized environments.

## Setup & Deployment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/M4G1C14N5/starfolio.git
   cd starfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Update your data:**
   Edit `src/data/resume.tsx` to add your own experience, skills, and projects.

5. **Deploy (Docker/Coolify):**
   The repository is configured for Docker deployments. In Coolify, select Nixpacks or Dockerfile builder, and set the start command to:
   ```bash
   npm run start
   ```

## Credits
This portfolio template is based on [Starfolio by webrating](https://github.com/webrating/starfolio).
