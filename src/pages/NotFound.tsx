import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/bg-1.png')] opacity-5 bg-cover bg-center" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="text-center relative z-10 px-4">
        {/* Construction Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-xl">
              <Construction className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              !
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="mb-4 text-8xl md:text-9xl font-bold text-foreground/10 leading-none">
          404
        </h1>

        {/* Error Message */}
        <div className="mb-8 -mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Page Under Construction
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/services" className="text-accent hover:underline font-medium">
              Services
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/projects" className="text-accent hover:underline font-medium">
              Projects
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/about" className="text-accent hover:underline font-medium">
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contact" className="text-accent hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;