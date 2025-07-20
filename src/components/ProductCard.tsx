import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  impact: string;
  timeline: string;
  teamSize: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  onClick: () => void;
}

const ProductCard = ({ 
  title, 
  description, 
  impact, 
  timeline, 
  teamSize, 
  tags, 
  imageUrl, 
  link,
  onClick 
}: ProductCardProps) => {
  return (
    <Card className="portfolio-card cursor-pointer group" onClick={onClick}>
      <CardContent className="p-0">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-subtle rounded-t-lg flex items-center justify-center border-b">
          <div className="text-muted-foreground text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={32} className="text-primary" />
            </div>
            <p className="text-sm">Product Thumbnail</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            {link && (
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp size={14} />
              <span>Impact: {impact}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={14} />
              <span>{timeline}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={14} />
              <span>Team: {teamSize}</span>
            </div>
          </div>
          
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