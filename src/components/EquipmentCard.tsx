import { Button } from "@/components/ui/button";

export interface EquipmentCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  capacity: string;
  pricePerHour: number;
  isAvailable: boolean;
}

const EquipmentCard = ({
  name,
  image,
  category,
  capacity,
  pricePerHour,
  isAvailable
}: EquipmentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {!isAvailable && (
          <div className="absolute top-2 right-2 bg-destructive text-white text-xs font-bold px-2 py-1 rounded">
            Занята
          </div>
        )}
        <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-secondary mb-2 truncate">{name}</h3>
        <div className="text-sm text-muted-foreground mb-4">
          <div className="flex justify-between mb-2">
            <span>Грузоподъемность:</span>
            <span className="font-medium text-secondary">{capacity}</span>
          </div>
          <div className="flex justify-between">
            <span>Стоимость:</span>
            <span className="font-bold text-primary">{pricePerHour.toLocaleString()} ₽/час</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-white"
            disabled={!isAvailable}
          >
            Арендовать
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;