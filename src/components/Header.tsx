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
  logo?: string;
  onContactClick?: () => void;
}

const Header = ({
  logo = "Jessica Lorena",
  onContactClick = () => {},
}: HeaderProps) => {
  return (
    <div className="w-full h-20 px-6 bg-white border-b border-blue-900/10 flex items-center justify-between fixed top-0 z-50">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-serif text-blue-900">{logo}</h1>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#sobre"
              >
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Áreas de Atuação</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid gap-3">
                  <NavigationMenuLink
                    className="block p-3 hover:bg-blue-50 rounded-md"
                    href="#direito-trabalhista"
                  >
                    Direito Trabalhista
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="block p-3 hover:bg-blue-50 rounded-md"
                    href="#acordos"
                  >
                    Acordos e Negociações
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="block p-3 hover:bg-blue-50 rounded-md"
                    href="#consultoria"
                  >
                    Consultoria Empresarial
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
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
        className="bg-blue-900 hover:bg-blue-800 text-white"
      >
        <Phone className="w-4 h-4 mr-2" />
        Agende uma Consulta
      </Button>
    </div>
  );
};

export default Header;
