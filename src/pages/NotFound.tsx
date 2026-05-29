import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundGlow from "@/components/BackgroundGlow";
import SparkleCanvas from "@/components/SparkleCanvas";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden noise bg-background text-foreground">
      <BackgroundGlow />
      <SparkleCanvas />
      <CustomCursor />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full p-8 border border-border/50 rounded-2xl glass-card text-center shadow-2xl relative"
        >
          <div className="w-14 h-14 rounded-full border border-destructive/20 bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={24} className="text-destructive animate-pulse" />
          </div>

          <h1 className="text-7xl font-bold tracking-tighter mb-4 text-gradient tech-glitch-hover inline-block">
            404
          </h1>
          <h2 className="text-xl font-bold mb-3 font-sans">Route Not Found</h2>
          <p className="text-muted-foreground text-sm font-mono leading-relaxed mb-8">
            The path <span className="text-primary">{location.pathname}</span> does not exist or has been relocated within the system.
          </p>

          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-foreground text-background font-semibold tracking-wider text-xs uppercase rounded-lg hover:bg-foreground/90 transition-all duration-300 font-mono"
          >
            Return to Home
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
