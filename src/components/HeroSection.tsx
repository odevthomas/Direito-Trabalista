import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  onScheduleClick?: () => void;
}

const HeroSection = ({
  name = "Jessica Lorena",
  title = "Direito Trabalhista",
  description = "Especialista em direito trabalhista com mais de 10 anos de experiência, defendendo seus direitos com excelência e dedicação em Campo Grande.",
  imageUrl = "/hero.jpg", // Usando a imagem da estátua da justiça
  onScheduleClick = () => console.log("Schedule clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/50 to-gray-900/30" />
          <img
            src={imageUrl}
            alt="Símbolo da Justiça"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Efeito de partículas/luz */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.1),_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.1),_transparent_70%)]" />
        </motion.div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block mb-3 px-4 py-1.5 bg-blue-900/90 text-white rounded-full backdrop-blur-sm"
          >
            <span className="font-medium">Justiça & Comprometimento</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-blue-400 mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-900 text-white text-lg py-6 px-8 rounded-full shadow-lg shadow-blue-900/20 transition-transform hover:scale-105"
              onClick={onScheduleClick}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-blak hover:bg-white/80 text-lg py-6 px-8 rounded-full backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contato Direto
            </Button>
          </motion.div>

          {/* Indicadores de credibilidade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex items-center space-x-8"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-blue-100/80 text-sm">Anos de Experiência</span>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-blue-100/80 text-sm">Casos Resolvidos</span>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">98%</span>
              <span className="text-blue-100/80 text-sm">Clientes Satisfeitos</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-900/30 to-transparent z-10"></div>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 right-8 z-20 w-32 h-32 text-white/10"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;