import { useState } from "react";
import { Button } from "@/components/ui/button";
import EquipmentCard, { EquipmentCardProps } from "./EquipmentCard";

// Демо-данные для оборудования
const equipmentData: EquipmentCardProps[] = [
  {
    id: "1",
    name: "Экскаватор-погрузчик JCB 3CX",
    image: "https://images.unsplash.com/photo-1579421573431-48c21e4cf421?q=80&w=1876&auto=format&fit=crop",
    category: "Экскаваторы",
    capacity: "1.5 тонны",
    pricePerHour: 2500,
    isAvailable: true
  },
  {
    id: "2",
    name: "Автокран XCMG 40 тонн",
    image: "https://images.unsplash.com/photo-1566996533071-2c578080c06e?q=80&w=1854&auto=format&fit=crop",
    category: "Автокраны",
    capacity: "40 тонн",
    pricePerHour: 4500,
    isAvailable: true
  },
  {
    id: "3",
    name: "Фронтальный погрузчик CAT 950GC",
    image: "https://images.unsplash.com/photo-1599577456698-7e5e766e6ae8?q=80&w=1974&auto=format&fit=crop",
    category: "Погрузчики",
    capacity: "5 тонн",
    pricePerHour: 3200,
    isAvailable: false
  },
  {
    id: "4",
    name: "Бульдозер Komatsu D65PX-16",
    image: "https://images.unsplash.com/photo-1572053675669-e6680b5abdd7?q=80&w=1974&auto=format&fit=crop",
    category: "Бульдозеры",
    capacity: "23 тонны",
    pricePerHour: 3800,
    isAvailable: true
  },
  {
    id: "5",
    name: "Самосвал КАМАЗ 6520",
    image: "https://images.unsplash.com/photo-1568605105043-db31208da595?q=80&w=2070&auto=format&fit=crop",
    category: "Самосвалы",
    capacity: "20 тонн",
    pricePerHour: 2000,
    isAvailable: true
  },
  {
    id: "6",
    name: "Мини-экскаватор Kubota KX71-3",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
    category: "Экскаваторы",
    capacity: "3 тонны",
    pricePerHour: 1800,
    isAvailable: true
  }
];

// Категории оборудования
const categories = ["Все", "Экскаваторы", "Автокраны", "Погрузчики", "Бульдозеры", "Самосвалы"];

const EquipmentSection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredEquipment = activeCategory === "Все" 
    ? equipmentData 
    : equipmentData.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Наша спецтехника</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Широкий выбор строительной и грузовой техники для решения задач любой сложности. 
            Вся техника проходит регулярное техническое обслуживание.
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category 
                  ? "bg-primary text-white"
                  : "border-gray-300 text-gray-700 hover:bg-primary/10 hover:text-primary"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Карточки техники */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              {...equipment}
            />
          ))}
        </div>

        {/* Кнопка "Смотреть все" */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;