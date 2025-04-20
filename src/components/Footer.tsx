import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-md">
                <span className="text-white font-bold text-xl">СТ</span>
              </div>
              <span className="text-xl font-bold text-white">СпецТехника</span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональные услуги спецтехники для строительства, 
              земляных работ и перевозки грузов. Работаем по всей России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-primary transition-colors">Каталог техники</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">О компании</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Виды техники</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/excavators" className="text-gray-300 hover:text-primary transition-colors">Экскаваторы</Link>
              </li>
              <li>
                <Link to="/catalog/bulldozers" className="text-gray-300 hover:text-primary transition-colors">Бульдозеры</Link>
              </li>
              <li>
                <Link to="/catalog/cranes" className="text-gray-300 hover:text-primary transition-colors">Автокраны</Link>
              </li>
              <li>
                <Link to="/catalog/loaders" className="text-gray-300 hover:text-primary transition-colors">Погрузчики</Link>
              </li>
              <li>
                <Link to="/catalog/trucks" className="text-gray-300 hover:text-primary transition-colors">Самосвалы</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium">8 (800) 555-35-35</p>
                  <p className="text-sm text-gray-400">Ежедневно 8:00-20:00</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span>info@spectehnika.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-1" />
                <span>г. Москва, ул. Строительная, д. 1, офис 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2024 СпецТехника. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;