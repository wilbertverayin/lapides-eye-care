"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "What services does Dr. Jomel Lapides Clinic offer?",
    answer:
      "We offer comprehensive eye exams, cataract evaluation and surgery, pterygium removal, diabetic eye screening, glaucoma check-ups, and more. Each service is tailored to your individual needs.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer:
      "No referral is needed. You may walk in or book an appointment directly through our clinic or website.",
  },
  {
    question: "How long does an eye consultation take?",
    answer:
      "An eye consultation usually lasts between 20 to 40 minutes, depending on your condition. For first-time patients or those requiring detailed tests, it may take a bit longer.",
  },
  {
    question: "Do you perform surgeries at your clinic?",
    answer:
      "Minor procedures may be done in-clinic. For major surgeries like cataract removal, we coordinate with accredited surgical centers for your safety and convenience.",
  },
];

const Blob = ({ className }: { className?: string }) => (
    <div
      className={cn(
        "absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10",
        className
      )}
    />
  );

export default function FaqSection() {
  return (
    <section id="faq" className="w-full relative bg-secondary/30 py-24 sm:py-32 overflow-hidden">
        <Blob className="w-[40rem] h-[40rem] bg-purple-200 -top-32 -left-32" />
        <Blob className="w-[40rem] h-[40rem] bg-blue-200 -bottom-32 -right-32" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-2">
                    <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        FAQs
                    </h2>
                    <p className="max-w-[700px] mx-auto lg:mx-0 text-foreground/80 md:text-lg">
                        We Have Answers, For Your Questions!
                    </p>
                </div>
                <Button asChild size="lg" className="rounded-full font-bold text-lg px-8 py-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-primary-foreground transform hover:scale-105">
                    <Link href="#contact">
                        Get Started
                    </Link>
                </Button>
            </div>
            <div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {faqData.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b-0 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm transition-all hover:bg-white/80">
                      <AccordionTrigger className="text-left no-underline hover:no-underline px-6 text-lg font-semibold text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="px-6 text-base text-foreground/80">{faq.answer}</p>
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
