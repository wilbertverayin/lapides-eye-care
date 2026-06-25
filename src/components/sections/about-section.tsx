
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Blob = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-20",
      className
    )}
  />
);

export default function AboutSection() {
  const credentials = [
    "Board-Certified Ophthalmologist (MD, DPBO)",
    "Specialist in Comprehensive Eye Care",
    "Expert in Cataract & Laser Surgery",
    "HMO Network Provider (Maxicare)",
  ];

  return (
    <section id="about" className="relative w-full py-24 sm:py-32 overflow-hidden bg-white">
      <Blob className="w-[30rem] h-[30rem] bg-purple-200 top-0 -left-32" />
      <Blob className="w-[30rem] h-[30rem] bg-blue-200 bottom-0 -right-32" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-60 -z-10" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center items-center min-h-[400px]">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/jomellapides-operating.jpeg"
                alt="Dr. Jomel Lapides operating on a patient"
                fill
                className="object-cover"
                data-ai-hint="doctor operating"
              />
            </div>
            <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -bottom-8 -left-8 opacity-70 -z-10" />
          </div>
          
          <div className="space-y-8 z-10">
            <h2 className="text-5xl font-black tracking-tighter text-center md:text-left bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
              About Dr. Lapides
            </h2>
            <p className="text-lg text-foreground/80">
              Dr. Jomel G. Lapides is a board-certified ophthalmologist dedicated to providing exceptional, patient-centered eye care. With extensive expertise in comprehensive ophthalmology, he specializes in advanced cataract surgery, precision laser treatments, and general eye health maintenance.
            </p>
            <p className="text-lg text-foreground/80">
              His commitment to excellence and compassionate care ensures that each patient receives personalized treatment tailored to their unique needs and vision goals.
            </p>
            <Card className="bg-white/60 backdrop-blur-sm border-blue-100 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-800">
                  Professional Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {credentials.map((cred, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3 shrink-0" />
                      <span className="text-foreground/90">{cred}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
