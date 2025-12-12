import { BlogPost } from "@/config/portfolio";

/**
 * Parse frontmatter from markdown content
 * Frontmatter format:
 * ---
 * title: "Post Title"
 * date: "2024-01-15"
 * excerpt: "Short description"
 * tags: ["tag1", "tag2"]
 * ---
 */
export function parseFrontmatter(content: string): {
  frontmatter: Record<string, any>;
  body: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterText = match[1];
  const body = match[2];

  const frontmatter: Record<string, any> = {};
  const lines = frontmatterText.split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse array format: ["item1", "item2"]
    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        value = JSON.parse(value);
      } catch {
        // If JSON parse fails, treat as string
      }
    }

    frontmatter[key] = value;
  }

  return { frontmatter, body };
}

/**
 * Load all blog posts from the content directory
 */
export async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    // Use Vite's glob import to get all markdown files
    // Note: Files are imported as raw strings using ?raw query
    const markdownModules = import.meta.glob("../content/blog/*.md?raw", {
      eager: true,
      import: "default",
    }) as Record<string, string>;

    const posts: BlogPost[] = [];

    for (const [path, content] of Object.entries(markdownModules)) {
      if (typeof content !== "string") {
        console.warn(`Skipping ${path}: content is not a string`);
        continue;
      }

      const { frontmatter, body } = parseFrontmatter(content);

      // Extract slug from filename
      const slug = path
        .split("/")
        .pop()
        ?.replace(/\.md\?raw$/, "") || "";

      if (!frontmatter.title || !frontmatter.date) {
        console.warn(`Skipping blog post ${slug}: missing required frontmatter`);
        continue;
      }

      // Parse tags if it's a string representation of an array
      let tags: string[] = [];
      if (frontmatter.tags) {
        if (Array.isArray(frontmatter.tags)) {
          tags = frontmatter.tags;
        } else if (typeof frontmatter.tags === "string") {
          try {
            tags = JSON.parse(frontmatter.tags);
          } catch {
            tags = [frontmatter.tags];
          }
        }
      }

      posts.push({
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt || "",
        tags,
        content: body,
      });
    }

    // Sort by date (newest first)
    posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    return posts;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
