import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain, MapPin, Archive, Calendar, Camera } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Mountain },
    { name: "Virtual Tours", href: "/tours", icon: Camera },
    { name: "Map", href: "/map", icon: MapPin },
    { name: "Archives", href: "/archives", icon: Archive },
    { name: "Calendar", href: "/calendar", icon: Calendar },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-monastery border-b border-monastery-stone/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Mountain className="h-8 w-8 text-monastery-gold transition-monastery group-hover:scale-110" />
              <div className="absolute inset-0 bg-monastery-gold/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-monastery" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-monastery-brown">Monastery360</h1>
              <p className="text-xs text-muted-foreground -mt-1">Digital Heritage Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-monastery ${
                    isActive(item.href)
                      ? "bg-monastery-gold/20 text-monastery-brown"
                      : "text-muted-foreground hover:text-monastery-brown hover:bg-monastery-cream"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Start Exploring
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-monastery-stone/20 bg-background/98 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-monastery ${
                    isActive(item.href)
                      ? "bg-monastery-gold/20 text-monastery-brown"
                      : "text-muted-foreground hover:text-monastery-brown hover:bg-monastery-cream"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-4 border-t border-monastery-stone/20">
              <Button variant="hero" size="sm" className="w-full">
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};