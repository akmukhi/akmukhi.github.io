import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { portfolioConfig, BlogPost } from "@/config/portfolio";
import { loadBlogPosts } from "@/lib/markdown";
import BlogPostCard from "./BlogPostCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Calendar, X } from "lucide-react";

import "highlight.js/styles/github-dark.css";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const loadedPosts = await loadBlogPosts();
        const postsToShow = portfolioConfig.blog?.postsPerPage 
          ? loadedPosts.slice(0, portfolioConfig.blog.postsPerPage)
          : loadedPosts;
        setPosts(postsToShow);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        // Set empty array to prevent crash
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    if (portfolioConfig.blog?.enabled) {
      fetchPosts();
    } else {
      setLoading(false);
    }
  }, []);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  if (!portfolioConfig.blog?.enabled) {
    return null;
  }

  if (loading) {
    return (
      <section id="blog" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <p className="section-heading">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Latest Posts
          </h2>
          <p className="text-muted-foreground">Loading posts...</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section id="blog" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <p className="section-heading">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Latest Posts
          </h2>
          <p className="text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="blog" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <p className="section-heading">Blog</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Latest Posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                {...post}
                onClick={() => handlePostClick(post)}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedPost?.title}</DialogTitle>
            {selectedPost && (
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{format(new Date(selectedPost.date), "MMMM d, yyyy")}</span>
                </div>
                {selectedPost.tags && selectedPost.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </DialogHeader>
          <div className="prose prose-invert prose-lg max-w-none mt-4 prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-code:bg-secondary/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code: ({ node, inline, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <pre className="bg-secondary/50 rounded-lg p-4 overflow-x-auto border border-border">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-sm text-foreground" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {selectedPost?.content || ""}
            </ReactMarkdown>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blog;
