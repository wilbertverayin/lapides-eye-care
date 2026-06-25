import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Eye, Search, Zap, Heart, BriefcaseMedical } from "lucide-react";

const services = [
  {
    icon: <Eye className="h-7 w-7 text-primary" />,
    iconContainerClass: "bg-purple-100/70",
    title: "General Eye Consultation",
    description: "Comprehensive eye examinations and vision assessments for patients of all ages.",
    features: [
      "Complete vision testing",
      "Eye health evaluation",
      "Prescription updates",
      "Preventive care",
    ],
  },
  {
    icon: <Search className="h-7 w-7 text-blue-500" />,
    iconContainerClass: "bg-blue-100/70",
    title: "Cataract Screening & Surgery",
    description: "Advanced cataract diagnosis and state-of-the-art surgical treatment options.",
    features: [
      "Early detection",
      "Pre-surgical evaluation",
      "Modern surgical techniques",
      "Post-operative care",
    ],
  },
  {
    icon: <Zap className="h-7 w-7 text-yellow-500" />,
    iconContainerClass: "bg-yellow-100/70",
    title: "Laser Procedures",
    description: "Precision laser treatments for various eye conditions and vision correction.",
    features: [
      "Laser vision correction",
      "Retinal treatments",
      "Glaucoma management",
      "Advanced technology",
    ],
  },
  {
    icon: <Heart className="h-7 w-7 text-green-500 fill-green-500" />,
    iconContainerClass: "bg-green-100/70",
    title: "Eye Health Maintenance",
    description: "Ongoing care and monitoring to preserve optimal eye health and vision.",
    features: [
      "Regular check-ups",
      "Disease prevention",
      "Health monitoring",
      "Lifestyle guidance",
    ],
  },
  {
    icon: <BriefcaseMedical className="h-7 w-7 text-red-500" />,
    iconContainerClass: "bg-red-100/70",
    title: "HMO Eye Check-ups",
    description: "Comprehensive eye examinations covered under Maxicare HMO plans.",
    features: [
      "Maxicare coverage",
      "Routine examinations",
      "Health screenings",
      "Insurance processing",
    ],
  },
];

const Blob = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10",
      className
    )}
  />
);

export default function ServicesSection() {
  return (
    <section id="services" className="w-full relative py-24 sm:py-32 bg-white overflow-hidden">
      <Blob className="w-96 h-96 bg-blue-200 -top-16 right-0" />
      <Blob className="w-96 h-96 bg-purple-200 -bottom-32 -left-16" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Services Offered
            </h2>
            <p className="max-w-[700px] text-foreground/70 md:text-lg">
              Comprehensive eye care services designed to meet all your vision and eye health needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col p-8 bg-white/50 backdrop-blur-sm border border-purple-100/80 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="flex flex-col items-start gap-6 p-0 h-full">
                <div className={cn("w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-md", service.iconContainerClass)}>
                    {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-purple-100/80 w-full mt-auto">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 shrink-0 mt-[0.4rem]" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
