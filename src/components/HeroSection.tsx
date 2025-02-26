import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  onScheduleClick?: () => void;
}

const HeroSection = ({
  name = "Jessica Lorena",
  title = "Advogada Trabalhista",
  description = "Especialista em direito trabalhista com mais de 10 anos de experiência, defendendo seus direitos com excelência e dedicação em Campo Grande.",
  imageUrl = "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  onScheduleClick = () => console.log("Schedule clicked"),
}: HeroSectionProps) => {
  return (
    <div className="w-full min-h-[600px] bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-amber-700">
              {title}
            </h2>
            <p className="text-lg text-blue-900/70 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white"
                onClick={onScheduleClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-900/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contato Direto
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt="Advogada Jessica Lorena"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
