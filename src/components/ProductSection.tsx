import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface Product {
  id: string;
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
}

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

const ProductSection = ({ id, title, subtitle, products }: ProductSectionProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id={id} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                impact={product.impact}
                timeline={product.timeline}
                teamSize={product.teamSize}
                tags={product.tags.slice(0, 3)} // Show only first 3 tags
                link={product.link}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
        </div>
      </div>
      
      <ProductModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductSection;