import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

interface ProductCardProps {
  id: string;          // Used to identify AI‑Experiments
  title: string;
  description: string;
  impact?: string;
  timeline?: string;
  teamSize?: string;
  tags: string[];
  imageUrl?: string;
  icon?: LucideIcon;
  link?: string;
  onClick: () => void;
}

const ProductCard = ({
  id,
  title,
  description,
  impact,
  timeline,
  teamSize,
  tags,
  imageUrl,
  icon: Icon = TrendingUp,
  link,
  onClick,
}: ProductCardProps) => {
  const isAIExperiment = id.startsWith("ai-");  // AI‑Experiment flag

  return (
    <Card className="portfolio-card cursor-pointer group" onClick={onClick}>
      <CardContent className="p-0">
        {/* Thumbnail */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-48 w-full object-cover rounded-t-lg border-b"
          />
        ) : (
          <div className="h-48 bg-gradient-subtle rounded-t-lg flex items-center justify-center border-b">
            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon size={40} className="text-primary" />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            {link && (
              <ExternalLink
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            )}
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Metrics */}
          <div className="space-y-2 mb-4 text-sm">
            {!isAIExperiment && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp size={14} />
                <span>Impact: {impact}</span>
              </div>
            )}

            {/* Timeline always visible */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={14} />
              <span>{timeline}</span>
            </div>

            {!isAIExperiment && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={14} />
                <span>Team: {teamSize}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
