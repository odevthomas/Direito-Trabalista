import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { Briefcase, Scale, FileText, Users, Gavel, Shield } from "lucide-react";

interface ServiceGridProps {
  services?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
  const defaultServices = [
    {
      title: "Reclamações Trabalhistas",
      description:
        "Representação em processos trabalhistas para garantir seus direitos",
      icon: <Briefcase className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Acordos e Negociações",
      description: "Mediação e negociação de acordos trabalhistas favoráveis",
      icon: <Scale className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Contratos de Trabalho",
      description: "Análise e elaboração de contratos trabalhistas",
      icon: <FileText className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Direitos Coletivos",
      description: "Atuação em causas coletivas e sindicais",
      icon: <Users className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Processos Administrativos",
      description: "Representação junto a órgãos administrativos",
      icon: <Gavel className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Consultoria Preventiva",
      description: "Orientação legal para prevenir conflitos trabalhistas",
      icon: <Shield className="h-6 w-6 text-blue-900" />,
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-blue-900/70 max-w-2xl mx-auto">
            Oferecemos serviços especializados em diversas áreas do direito
            trabalhista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => console.log(`Clicked ${service.title}`)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceGrid;
