import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { COMPANY_INFO } from "@/lib/constants";
import { services } from "@/data/services";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b ${isScrolled
        ? "shadow-lg border-border"
        : "border-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-xl  flex items-center justify-center p-1.5">
                <img
                  src={isDark ? "/logo-dark.png" : "/logo.png"}
                  alt="Rigour Realty"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" sm:block">
              <p className="font-bold text-base leading-tight text-foreground">Rigour Realty</p>
              <p className="text-[7px] uppercase tracking-wider text-muted-foreground font-medium">Building With Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-sm font-medium transition-colors ${isActive(item.href)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-white"
                        }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 border-border/50">
                    <DropdownMenuItem asChild>
                      <Link to="/services" className="w-full cursor-pointer font-medium">
                        All Services
                      </Link>
                    </DropdownMenuItem>
                    <div className="my-1 h-px bg-border/50" />
                    {services.map((service) => (
                      <DropdownMenuItem key={service.id} asChild>
                        <Link
                          to={`/services/${service.slug}`}
                          className="w-full cursor-pointer group"
                        >
                          <service.icon className="mr-2 h-4 w-4 text-accent group-hover:text-white transition-colors" />
                          <span className="text-sm">{service.shortTitle}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-medium transition-colors ${isActive(item.href)
                      ? "text-accent"
                      : "text-foreground/70 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg text-foreground/70 hover:text-foreground"
            >
              {isDark ? (
                <Sun className="h-[1.1rem] w-[1.1rem]" />
              ) : (
                <Moon className="h-[1.1rem] w-[1.1rem]" />
              )}
            </Button> */}
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button
                variant="ghost"
                size="sm"
                className="hidden xl:flex text-foreground/70 hover:text-white font-medium"
              >
                <Phone className="mr-2 h-4 w-4" />
                {COMPANY_INFO.phone}
              </Button>
            </a>
            <Link to="/quote">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-accent/25 transition-all"
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button> */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-lg">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-l border-border/50">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center  p-1.5">
                      <img
                        src={isDark ? "/logo-dark.png" : "/logo.png"}
                        alt="Rigour Realty"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-base">Rigour Realty</p>
                      <p className="text-[7px] uppercase tracking-wider text-muted-foreground">Building With Excellence</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1 py-6 flex-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          onClick={() => !item.hasDropdown && setIsOpen(false)}
                          className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)
                            ? "bg-accent/10 text-accent"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                            }`}
                        >
                          {item.name}
                        </Link>
                        {item.hasDropdown && (
                          <div className="ml-2 mt-1 space-y-1 pl-2 border-l-2 border-border/30">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/30 transition-colors"
                              >
                                <service.icon className="h-4 w-4 text-accent flex-shrink-0" />
                                <span>{service.shortTitle}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="block">
                      <Button variant="outline" className="w-full font-medium">
                        <Phone className="mr-2 h-4 w-4" />
                        {COMPANY_INFO.phone}
                      </Button>
                    </a>
                    <Link to="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg mt-2 hover:shadow-accent/25 transition-all">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}