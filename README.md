# AITech Lab Website

This repository contains the source code for the AITech Lab website - a Next.js 15 TypeScript website with App Router for the research team at Ho Chi Minh City University of Technology (HCMUT).

> **Note**: This is a highly personalized project tailored specifically for our research team's needs and is not intended as a general-purpose template that can be easily modified for other uses.

## Getting Started

### Installation

1. Install Docker and Docker Compose on your system

   - [Docker Desktop](https://www.docker.com/products/docker-desktop/) is recommended for Windows and Mac users
   - For Linux users, follow the [Docker Engine installation](https://docs.docker.com/engine/install/) and [Docker Compose installation](https://docs.docker.com/compose/install/)

2. Clone this repository to your local machine

3. (Optional) Set up Python environment for citation management:

```bash
# Create and activate virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows
# OR
source venv/bin/activate      # Unix/MacOS

# Install Python dependencies
pip install -r scripts/citations/requirements.txt
```

### Development Server

We use Docker to ensure a standardized development environment across different devices. This helps avoid "it works on my machine" issues and ensures everyone on the team has the same setup.

Run the development server using Docker Compose:

```bash
# Start the development server with watch mode
docker compose watch
```

This will:

- Build the Docker container with all required dependencies
- Start the Next.js development server at http://localhost:3000
- Watch for file changes in:
  - src/
  - public/
  - content/
  - \_data/
  - scripts/
  - config files

Any changes to these directories will automatically be synced to the container, and Next.js hot reloading will update your browser view.

> **Note**: For changes to dependencies (package.json, yarn.lock), Docker will automatically rebuild the container.

### Alternative Development Methods

If you prefer not to use Docker, you can still run the development server directly:

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Start development server
npm run dev
# or equivalent with your package manager
```

## Content Management

This website uses a content-based approach where research publications, projects, and team members are defined in structured files. Here's how to update the content:

### Updating Research Publications

Research publications are managed through the `_data/sources.yaml` file.

#### Adding a Publication:

1. Open `_data/sources.yaml`
2. Add a new entry with the following format:

```yaml
- id: doi:10.xxxx/xxxxx # DOI of the publication
  image: https://example.com/image.png # Image URL (optional)
  tags: [paper] # Tags for categorization
```

The system will automatically fetch citation details from the DOI using Manubot.

#### Publication Entry Syntax:

- `id`: Required. Use the DOI in the format `doi:10.xxxx/xxxxx`
- `image`: Optional. URL to an image representing the publication
- `tags`: Required. Array of tags, typically includes "paper"

After updating, run the citation generation script:

```bash
# Activate your Python environment if not already active
source venv/Scripts/activate  # Windows
# OR
source venv/bin/activate      # Unix/MacOS

# Set required environment variables
export MANUBOT_USE_DOCKER=false

# Run the citation script
python scripts/citations/cite.py
```

This script will process the entries in `sources.yaml` and generate the complete citations in `_data/citations.yaml`.

### Updating Projects

Projects are managed through Markdown files in the `content/projects/` directory.

#### Adding a New Project:

1. Create a new markdown file in `content/projects/`
2. Use the following frontmatter format:

```markdown
---
title: Project Title
author: Author Names
image: images/projects/your-project-image.png
links: project-link.com
github: github.com/username/repo
group: normal # or featured
tag:
  - resource
---

<!-- excerpt start -->

Short description of the project for previews.

<!-- excerpt end -->

Full description of the project with additional details.
```

#### Project Frontmatter Syntax:

- `title`: Required. The title of the project
- `author`: Required. Names of the project authors
- `image`: Optional. Path to the project image (relative to public folder)
- `links`: Optional. External link to the project
- `github`: Optional. GitHub repository link
- `group`: Required. Either `normal` or `featured` to determine display priority
- `tag`: Required. Array of tags for categorization

#### Project Content:

Use HTML comments `<!-- excerpt start -->` and `<!-- excerpt end -->` to mark the short description for previews.

#### Project Images:

Place project images in `public/images/projects/` folder with a descriptive name that matches the image reference in the frontmatter.

### Updating Team Members

Team members are managed through Markdown files in the `content/team/` directory.

#### Adding a New Team Member:

1. Create a new markdown file in `content/team/`
2. Use the following frontmatter format:

```markdown
---
name: Member Name
image: images/members/member-name.jpg
description: Short description of the member
role: undergrad # or pi, alumni
aliases:
  - Alternative Name
  - Another Name Format
affiliation: Ho Chi Minh City University of Technology (HCMUT)
links:
  email: example@email.com
  linkedin: linkedin-username
  github: github-username
  google-scholar: scholar-id
  orcid: 0000-0000-0000-0000
---

Detailed biography of the team member. This can include education, research interests,
and other relevant information.
```

#### Team Member Frontmatter Syntax:

- `name`: Required. Full name of the member
- `image`: Required. Path to the member's profile photo (relative to public folder)
- `description`: Optional. Short description or tagline
- `role`: Required. One of: `pi` (Principal Investigator), `undergrad` (Undergraduate student), or `alumni` (Former member)
- `aliases`: Optional. Array of name variations for publication search linking
- `affiliation`: Optional. Institution affiliation
- `links`: Optional. Social and professional links
  - Supported platforms: `email`, `linkedin`, `github`, `google-scholar`, `orcid`, `home-page`, `facebook`

#### Team Member Images:

Place member profile photos in `public/images/members/` folder with a descriptive name that matches the image reference in the frontmatter.

## Technical Details

- Built with Next.js 15 with TypeScript and App Router
- This project is a landing page for our research team
- The site consumes Jekyll-style markdown files with Liquid templating as content
- These files are parsed into content for the Next.js 15 app
- The main design theme is minimalist

## Image Management Rules

- Member profile images must be stored in: `public/images/members/`
- Project images must be stored in: `public/images/projects/`
- All images should be optimized for web (compressed, appropriate dimensions)
- Recommended formats: JPEG, PNG, WebP
- For project images, maintain a consistent aspect ratio (16:9 or 4:3 recommended)
- When removing a project or team member, also remove the corresponding image

## Deploying to GitHub Pages

This website has been configured for static site generation and deployment to GitHub Pages. The Next.js configuration has been specifically modified to support static export for GitHub Pages hosting. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Next.js Static Export Configuration

The Next.js configuration has been customized to:

- Generate static HTML/CSS/JS files without server-side rendering requirements
- Configure proper base paths and asset prefixes for GitHub Pages hosting
- Handle routing for static deployment
- Ensure all internal links work correctly in the GitHub Pages environment

## Additional Information

- The website uses TailwindCSS for styling
- React components are defined in `src/components/`
- Page templates are in `src/app/`
- Helper functions are in `src/lib/`

For more information, refer to the Next.js documentation at [https://nextjs.org/docs](https://nextjs.org/docs).
