import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Contact from "@/components/Contact";
import { professionalProducts, aiExperiments } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <ProductSection 
        id="professional-products"
        title="Professional Products"
        subtitle="Products I've built and managed that have driven real business impact and user value"
        products={professionalProducts}
      />
      
      <ProductSection 
        id="ai-experiments"
        title="AI Experiments"
        subtitle="Exploring the frontiers of AI and machine learning through hands-on experimentation"
        products={aiExperiments}
      />
      
      <Contact />
    </div>
  );
};

export default Index;
