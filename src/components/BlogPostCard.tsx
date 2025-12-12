import { Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { BlogPost } from "@/config/portfolio";

interface BlogPostCardProps extends BlogPost {
  onClick?: () => void;
}

const BlogPostCard = ({
  title,
  date,
  excerpt,
  tags = [],
  onClick,
}: BlogPostCardProps) => {
  const formattedDate = format(new Date(date), "MMM d, yyyy");

  return (
    <article
      className="group relative bg-card border border-border rounded-lg p-6 card-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <span className="font-mono text-primary text-lg">#</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Calendar size={14} />
            <span className="font-mono">{formattedDate}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
          {excerpt}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded flex items-center gap-1"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="font-mono text-xs text-muted-foreground">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
