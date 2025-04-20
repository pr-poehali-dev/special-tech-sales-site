import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Нужна техника для вашего проекта?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Оставьте заявку, и наш менеджер поможет подобрать оптимальное решение для ваших задач. 
                Мы перезвоним вам в течение 15 минут в рабочее время.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold"
                >
                  Оставить заявку
                </Button>
                <div className="flex items-center text-white">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  <span className="font-medium">
                    Или звоните: 8 (800) 555-35-35
                  </span>
                </div>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </div>
            </div>
            <div 
              className="hidden lg:block relative" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1586232602302-7c9201dab2c3?q=80&w=2079&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;