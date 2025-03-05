import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

interface HeaderProps {
  logoSrc?: string;  // Agora a prop `logoSrc` aceita a URL do logo
  onContactClick?: () => void;
}

const Header = ({
  logoSrc = "/logo.svg",  // Caminho para o logo, que pode ser um arquivo local ou URL
  onContactClick = () => {},
}: HeaderProps) => {
  return (
    <div className="w-full h-20 px-8 bg-black border-b border-[#e3940f]/10 flex items-center justify-between fixed top-0 z-50">
      {/* Fundo gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/50 to-gray-900/30" />

      <div className="flex items-center space-x-8 z-10">
        {/* Logo como imagem */}
        <img
          src={logoSrc}
          alt="Logo"
          className="h-10 sm:h-12 object-contain"  // Logo com tamanho flexível
        />

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-white hover:text-[#e3940f] transition-colors duration-200`}
                href="#sobre"
              >
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-[#e3940f] transition-colors duration-200">
                Áreas de Atuação
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[350px] p-4 grid gap-3">
                  <NavigationMenuLink
                    className="block p-3 hover:bg-[#e3940f] rounded-md transition-all"
                    href="#direito-trabalhista"
                  >
                    Direito Trabalhista
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="block p-3 hover:bg-[#e3940f] rounded-md transition-all"
                    href="#acordos"
                  >
                    Acordos e Negociações
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="block p-3 hover:bg-[#e3940f] rounded-md transition-all"
                    href="#consultoria"
                  >
                    Consultoria Empresarial
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-white hover:text-[#e3940f] transition-colors duration-200`}
                href="#contato"
              >
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Button
        onClick={onContactClick}
        className="bg-[#e3940f] hover:bg-[#d68707] text-white py-2 px-6 rounded-full flex items-center transition-colors duration-200"
      >
        <Phone className="w-4 h-4 mr-2" />
        Agende uma Consulta
      </Button>
    </div>
  );
};

export default Header;
