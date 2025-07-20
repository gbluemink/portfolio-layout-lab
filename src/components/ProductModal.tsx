import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Calendar, Users, TrendingUp, Target, Lightbulb, BarChart3 } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    fullDescription: string;
    impact: string;
    timeline: string;
    teamSize: string;
    tags: string[];
    challenges: string[];
    solutions: string[];
    metrics: string[];
    link?: string;
  } | null;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            {product.title}
            {product.link && (
              <Button variant="outline" size="sm" asChild>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  View Live
                </a>
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <TrendingUp size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Impact</p>
                <p className="font-medium">{product.impact}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Calendar size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-medium">{product.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Users size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Team Size</p>
                <p className="font-medium">{product.teamSize}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
          </div>

          <Separator />

          {/* Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              Key Metrics & Results
            </h3>
            <ul className="space-y-2">
              {product.metrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;