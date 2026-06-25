"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WhyChooseUsSection() {
  const reasonsData = [
    {
      title: "Experience and Expertise",
      description: "With years of clinical experience in diagnosing and managing a wide range of eye conditions.",
    },
    {
      title: "Quality and Care",
      description: "We combine modern ophthalmic technology with heartfelt, personalized care for every patient.",
    },
    {
      title: "Tailored Eye Solutions",
      description: "From cataracts to diabetic retinopathy, your treatment plan is designed specifically for your needs.",
    },
    {
      title: "Convenience and Reliability",
      description: "On-time appointments, efficient processes, and a dedicated team—your time and vision matter.",
    },
    {
      title: "Customer Satisfaction",
      description: "We’re proud of the trust patients place in us. Clear vision, clear communication, and caring service are our promise.",
    },
  ];

  return (
    <section id="why-us" className="w-full py-24 sm:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image
              src="/slitlamp.jpeg"
              fill
              alt="Patient undergoing an eye examination with a phoropter"
              className="object-contain"
              data-ai-hint="eye exam"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter text-foreground">
              Why choose us?
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-3">
              {reasonsData.map((reason, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b-0 rounded-xl bg-secondary/30 transition-all hover:bg-secondary/60 shadow-sm">
                  <AccordionTrigger className="text-left no-underline hover:no-underline px-6 text-xl font-semibold text-foreground">
                    {reason.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="px-6 text-base text-foreground/80">{reason.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
