import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Blob = ({ className }: { className?: string }) => (
  <div className={cn("absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10", className)} />
);

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
)

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
)

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center py-24 sm:py-32 md:py-40 overflow-hidden">
      
      <Blob className="w-72 h-72 bg-purple-300 top-[5%] left-[5%]" />
      <Blob className="w-72 h-72 bg-blue-200 top-[20%] right-[10%]" />
      <Blob className="w-72 h-72 bg-purple-200 bottom-[15%] right-[25%]" />
      <Blob className="w-96 h-96 bg-blue-300 bottom-[5%] left-[10%]" />

      <div className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm -z-10">
          <EyeIcon className="w-10 h-10 text-purple-400 opacity-60" />
      </div>
      <div className="absolute bottom-[10%] right-[10%] w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm -z-10" />

      <div className="container px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-tight">
              Jomel G. Lapides,<br /> MD, DPBO
            </h1>
            <p className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-cyan-500">
              Comprehensive Ophthalmology | Laser &amp; Cataract Surgery
            </p>
            <p className="max-w-lg mx-auto md:mx-0 text-foreground/80 md:text-lg">
              Board-certified ophthalmologist providing patient-centered eye care with expertise in advanced surgical procedures and comprehensive eye health solutions.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full font-bold text-lg px-8 py-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-primary-foreground transform hover:scale-105">
                <Link href="#contact">
                  Book an Appointment
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 p-2 bg-white/20 rounded-full shadow-2xl backdrop-blur-sm">
                <Image
                  src="/glasses.jpeg"
                  width={400}
                  height={400}
                  alt="A pair of stylish eyeglasses"
                  className="rounded-full object-cover w-full h-full"
                  data-ai-hint="eyeglasses table"
                />
                 <div className="absolute bottom-10 left-10 p-2 bg-white/30 rounded-full shadow-lg backdrop-blur-sm">
                     <HeartIcon className="w-6 h-6 text-blue-500" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
