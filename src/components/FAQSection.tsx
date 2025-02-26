import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQSectionProps {
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const defaultFaqs = [
    {
      question: "Quanto tempo tenho para entrar com uma ação trabalhista?",
      answer:
        "O prazo prescricional para ajuizar uma ação trabalhista é de 2 anos após o término do contrato de trabalho, para pleitear direitos dos últimos 5 anos do contrato.",
    },
    {
      question: "Quais documentos preciso levar para a consulta inicial?",
      answer:
        "Para a primeira consulta, é importante trazer: Carteira de Trabalho, RG, CPF, comprovante de residência, contracheques, termo de rescisão (se houver) e qualquer outro documento relacionado à relação de trabalho.",
    },
    {
      question: "Quanto custa uma consulta inicial?",
      answer:
        "A primeira consulta é gratuita. Nela, avaliaremos seu caso e explicaremos todas as possibilidades jurídicas disponíveis.",
    },
    {
      question: "Como funciona o pagamento dos honorários?",
      answer:
        "Os honorários são cobrados apenas em caso de êxito, geralmente como uma porcentagem do valor recebido na ação. As condições específicas serão discutidas durante a consulta.",
    },
    {
      question: "Quanto tempo dura um processo trabalhista?",
      answer:
        "A duração pode variar muito, dependendo da complexidade do caso e da região. Em média, pode levar de 6 meses a 2 anos, mas cada caso é único.",
    },
  ];

  const displayFaqs = faqs || defaultFaqs;

  return (
    <section className="w-full py-16 px-4 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Dúvidas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-blue-50/50 rounded-lg px-4"
            >
              <AccordionTrigger className="text-blue-900 hover:text-blue-800 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-blue-900/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
