import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceGrid from "./ServiceGrid";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  AlertCircle,
} from "lucide-react";
import FAQSection from "./FAQSection";
import WhatsAppButton from "./WhatsAppButton";

interface HomeProps {
  onContactSubmit?: (data: any) => void;
}

const Home = ({ onContactSubmit = () => {} }: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
   
        <HeroSection />
      

      <ServiceGrid />

      {/* Contact Section */}
      <section className="w-full py-16 px-4 bg-blue-50" id="contato">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Entre em Contato
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onContactSubmit(e);
                }}
                className="space-y-4"
              >
                <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-900 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    Todos os campos são obrigatórios. Retornaremos seu contato
                    em até 24 horas úteis.
                  </p>
                </div>
                <div>
                  <Input
                    placeholder="Nome completo"
                    className="border-blue-900/20"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="border-blue-900/20"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Telefone"
                    className="border-blue-900/20"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    className="min-h-[150px] border-blue-900/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-blue-900">
                    <MapPin className="h-5 w-5" />
                    <span>Campo Grande, MS</span>
                  </div>
                  <div className="flex items-center space-x-3 text-blue-900">
                    <Mail className="h-5 w-5" />
                    <span>contato@jessicalorena.adv.br</span>
                  </div>
                  <div className="flex items-center space-x-3 text-blue-900">
                    <Phone className="h-5 w-5" />
                    <span>(67) 99999-9999</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Redes Sociais
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239688.99449641895!2d-54.722941!3d-20.469777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b2b9f27%3A0xf5a8469ebc84d2c1!2sCampo%20Grande%2C%20MS!5e0!3m2!1sen!2sbr!4v1650000000000!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Jessica Lorena Advocacia. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
