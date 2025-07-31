import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  BarChart3,
} from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string; // Added to identify AIExperiments
    title: string;
    description: string;
    fullDescription: string;
    impact?: string; // Made optional for AIExperiments
    timeline?: string; // Made optional for AIExperiments
    teamSize?: string; // Made optional for AIExperiments
    industry?: string; // Made optional for AIExperiments
    tags: string[];
    metrics?: string[];
    features: string[];
    link?: string;
  } | null;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  if (!product) return null;

  const isAIExperiment = product.id.startsWith("ai-"); // Check if the product is from AIExperiments

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            {product.title || "Untitled Product"} {/* Default title */}
            {product.link && (
              <Button variant="outline" size="sm" asChild>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  View Youtube Demo
                </a>
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Key Metrics */}
          {!isAIExperiment && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {product.impact && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <TrendingUp size={18} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className="font-medium">{product.impact}</p>
                  </div>
                </div>
              )}
              {product.timeline && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Calendar size={18} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="font-medium">{product.timeline}</p>
                  </div>
                </div>
              )}
              {product.teamSize && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Users size={18} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-medium">{product.teamSize}</p>
                  </div>
                </div>
              )}
              {product.industry && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Target size={18} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Industry</p>
                    <p className="font-medium">{product.industry}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.fullDescription || "No description available."} {/* Default description */}
            </p>
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Lightbulb size={20} className="text-primary" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {product.features?.length > 0 ? (
                product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))
              ) : (
                <li className="text-muted-foreground">No features available.</li>
              )}
            </ul>
          </div>

          <Separator />

          {/* Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              Key Metrics & Results
            </h3>
            <ul className="space-y-2">
              {product.metrics?.length > 0 ? (
                product.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{metric}</span>
                  </li>
                ))
              ) : (
                <li className="text-muted-foreground">No metrics available.</li>
              )}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies / Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags?.length > 0 ? (
                product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">No technologies listed.</span>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;