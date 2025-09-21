import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch vụ", path: "/services" },
    { name: "Bảng giá", path: "/pricing" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <nav className="bg-background border-b shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TV</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-professional-blue">
                Thông Tắc Vinh
              </h1>
              <p className="text-xs text-muted-foreground">Dịch vụ chuyên nghiệp</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-professional-blue ${
                  location.pathname === item.path
                    ? "text-professional-blue border-b-2 border-trust-green"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0987654321" className="flex items-center space-x-2 text-professional-blue font-semibold">
              <Phone className="h-4 w-4" />
              <span>0987.654.321</span>
            </a>
            <Button className="bg-warm-orange hover:bg-warm-orange/90 text-white">
              Gọi ngay
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-professional-blue bg-soft-gray"
                      : "text-foreground hover:text-professional-blue hover:bg-soft-gray"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:0987654321"
                  className="flex items-center space-x-2 px-3 py-2 text-professional-blue font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  <span>0987.654.321</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;