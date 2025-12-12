# Blog Content Directory

This directory contains all your blog post Markdown files.

## How to Create a Blog Post

1. Create a new `.md` file in this directory (e.g., `my-post.md`)
2. Add frontmatter at the top of the file with metadata
3. Write your content in Markdown below the frontmatter

## Frontmatter Format

Each blog post must start with frontmatter (YAML metadata) between `---` markers:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A short description of your post that appears in the preview"
tags: ["DevOps", "Kubernetes", "Platform Engineering"]
---

# Your Post Content

Your markdown content goes here...
```

## Required Fields

- `title`: The title of your blog post
- `date`: Publication date in format "YYYY-MM-DD"
- `excerpt`: Short description (appears in blog card preview)

## Optional Fields

- `tags`: Array of tags for categorizing posts (e.g., `["DevOps", "Kubernetes"]`)

## Example Blog Post

See `example-post.md` for a complete example with various Markdown features.

## File Naming

- Use kebab-case for filenames (e.g., `my-first-post.md`, `kubernetes-deployment-guide.md`)
- The filename (without `.md`) becomes the post's slug

## Markdown Features Supported

- Headers (# ## ###)
- **Bold** and *italic* text
- `Inline code` and code blocks with syntax highlighting
- Lists (ordered and unordered)
- Links
- Images
- Tables (GitHub Flavored Markdown)
- And more!
