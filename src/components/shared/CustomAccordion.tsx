import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn/ui/accordion";
import Reveal from "../animations/reveal";

const CustomAccordion = () => {
  const data = [
    { id: 1, title: "How can I buy and sell crypto on Keshflip?", content: "You can buy and sell crypto through our platform by linking your wallet and following the steps in the trading section." },
    { id: 2, title: "Is Keshflip safe to use for transactions?", content: "Yes, Keshflip uses advanced security protocols to ensure safe and secure transactions." },
    { id: 3, title: "What are the fees for using Keshflip?", content: "Our platform charges minimal fees for transactions. You can find the fee structure in the pricing section." },
    { id: 4, title: "Can I send money internationally with Keshflip?", content: "Yes, you can send money internationally with competitive exchange rates." },
  ];

  return (
    <div>
      <Accordion type="single" collapsible className="border-none">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            className="border-b-0"
          >
              <Reveal delay={0.5}>
                <AccordionTrigger className="hover:no-underline lg:text-xl text-muted-foreground focus:no-underline">
                  {item.title}
                </AccordionTrigger>
              </Reveal>
            
            <AccordionContent className="text-lg text-muted-foreground/50">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
