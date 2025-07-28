import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";

/* ----------------------------------------------------------------------------
 * Types
 * --------------------------------------------------------------------------*/
interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  impact?: string;
  timeline?: string;
  teamSize?: string;
  industry?: string;
  tags: string[];
  metrics?: string[];
  features: string[];
  icon?: LucideIcon;
  link?: string;
  imageUrl?: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

/* ----------------------------------------------------------------------------
 * Component
 * --------------------------------------------------------------------------*/
const ProductSection = ({
  id,
  title,
  subtitle,
  products,
}: ProductSectionProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  /* ---- Handlers ----------------------------------------------------------*/
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  /* ---- Filtering ---------------------------------------------------------*/
  const showIndustryFilter = id === "professional-products";
  const industries = [
    "All",
    "CPG",
    "Gaming",
    "Healthcare",
    "Manufacturing",
  ];

  const filteredProducts =
    showIndustryFilter && selectedIndustry !== "All"
      ? products.filter((product) => product.industry === selectedIndustry)
      : products;

  /* ---- Render ------------------------------------------------------------*/
  return (
    <section id={id} className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Industry Filter (Professional Products only) */}
        {showIndustryFilter && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
                className="text-sm"
              >
                {industry}
              </Button>
            ))}
          </div>
        )}

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                id={product.id} // Pass the id here
                title={product.title}
                description={product.description}
                impact={product.impact}
                timeline={product.timeline}
                teamSize={product.teamSize}
                tags={product.tags.slice(0, 3)} // show first 3 tags
                link={product.link}
                icon={product.icon}
                imageUrl={product.imageUrl}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductSection;