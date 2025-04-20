import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Аренда спецтехники для любых строительных задач
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            Предоставляем услуги аренды строительной и грузовой техники с опытными операторами. 
            Работаем с объектами любой сложности по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg"
            >
              Заказать технику
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-bold text-lg"
            >
              Посмотреть каталог
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-primary text-3xl font-bold mb-1">15+</div>
              <div className="text-white">лет опыта на рынке</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-primary text-3xl font-bold mb-1">100+</div>
              <div className="text-white">единиц техники</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-primary text-3xl font-bold mb-1">1000+</div>
              <div className="text-white">выполненных проектов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;