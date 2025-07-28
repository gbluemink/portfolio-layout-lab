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
        subtitle="Products I've led, from Discovery, Strategy, Execution, GTM through Growth"
        products={professionalProducts}
      />
      
      <ProductSection 
        id="ai-experiments"
        title="AI Experiments"
        subtitle="4 hour or less experiments to explore different AI ideas. More to come!"
        products={aiExperiments}
      />
      
      <Contact />
    </div>
  );
};

export default Index;
