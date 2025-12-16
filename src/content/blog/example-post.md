<!---
title: "Welcome to My Blog"
date: "2024-01-15"
excerpt: "This is an example blog post to demonstrate the blog functionality. You can use this as a template for your own posts."
tags: ["DevOps", "Kubernetes", "Platform Engineering"]
---

# Welcome to My Blog

This is an example blog post that demonstrates how to write blog posts for your portfolio. You can use this as a template for creating your own posts.

## Getting Started

To create a new blog post:

1. Create a new `.md` file in the `src/content/blog/` directory
2. Add frontmatter at the top with metadata
3. Write your content in Markdown below

## Features

The blog supports:

- **Markdown formatting** - Headers, lists, code blocks, and more
- **Code syntax highlighting** - For various programming languages
- **Tags** - Organize posts by topics
- **Excerpts** - Short descriptions for previews

## Code Example

Here's an example of a code block:

```python
def deploy_service(name: str, image: str):
    """Deploy a service to Kubernetes"""
    config = {
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {"name": name},
        "spec": {
            "selector": {"app": name},
            "ports": [{"port": 80, "targetPort": 8080}]
        }
    }
    return k8s_client.create_service(config)
```

## Lists

You can create ordered and unordered lists:

- First item
- Second item
- Third item

1. Numbered item one
2. Numbered item two
3. Numbered item three

## Links and Emphasis

You can add [links](https://example.com), **bold text**, *italic text*, and `inline code`.

## Conclusion

This is just a starting point. Feel free to customize and expand your blog posts with your own content!
-->