import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-md">
            <span className="text-white font-bold text-xl">СТ</span>
          </div>
          <span className="text-xl font-bold text-secondary">СпецТехника</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-secondary hover:text-primary font-medium transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="text-secondary hover:text-primary font-medium transition-colors">
            Каталог техники
          </Link>
          <Link to="/services" className="text-secondary hover:text-primary font-medium transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="text-secondary hover:text-primary font-medium transition-colors">
            О компании
          </Link>
          <Link to="/contacts" className="text-secondary hover:text-primary font-medium transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-secondary font-medium">8 (800) 555-35-35</span>
            <span className="text-sm text-muted-foreground">Ежедневно 8:00-20:00</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Phone className="mr-2 h-4 w-4" /> Заказать звонок
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-secondary hover:text-primary py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="text-secondary hover:text-primary py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог техники
            </Link>
            <Link 
              to="/services" 
              className="text-secondary hover:text-primary py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/about" 
              className="text-secondary hover:text-primary py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </Link>
            <Link 
              to="/contacts" 
              className="text-secondary hover:text-primary py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="pt-2 border-t">
              <span className="text-secondary font-medium block">8 (800) 555-35-35</span>
              <span className="text-sm text-muted-foreground">Ежедневно 8:00-20:00</span>
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-white">
                <Phone className="mr-2 h-4 w-4" /> Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;