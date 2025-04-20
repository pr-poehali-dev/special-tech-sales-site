import { 
  Clock, 
  Wrench, 
  UserCheck, 
  Banknote, 
  MapPin, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Быстрая подача",
    description: "Доставка техники на объект в течение 2-4 часов после оформления заказа"
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Исправная техника",
    description: "Вся техника в отличном состоянии и регулярно проходит ТО"
  },
  {
    icon: <UserCheck className="w-10 h-10 text-primary" />,
    title: "Опытные операторы",
    description: "Квалифицированные специалисты с опытом работы от 5 лет"
  },
  {
    icon: <Banknote className="w-10 h-10 text-primary" />,
    title: "Прозрачные цены",
    description: "Фиксированные тарифы без скрытых платежей и комиссий"
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Работаем везде",
    description: "Предоставляем услуги по всей России, включая удаленные регионы"
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Официальный договор",
    description: "Полное документальное сопровождение услуг и страхование техники"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Более 15 лет мы предоставляем надежные услуги аренды спецтехники 
            для строительных и промышленных компаний
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-muted p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;