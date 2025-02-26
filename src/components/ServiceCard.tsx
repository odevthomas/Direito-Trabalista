import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ServiceCard = ({
  title = "Direito Trabalhista",
  description = "Especialização em casos trabalhistas, defendendo seus direitos com excelência e dedicação",
  icon = <ArrowRight className="h-6 w-6 text-blue-900" />,
  onClick = () => {},
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="w-[350px] h-[250px] bg-white border-2 border-blue-900/10 hover:border-blue-900/20 transition-colors">
        <CardHeader className="space-y-2">
          <div className="w-12 h-12 rounded-full bg-blue-900/10 flex items-center justify-center">
            {icon}
          </div>
          <CardTitle className="text-xl font-semibold text-blue-900">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-blue-900/70 text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
