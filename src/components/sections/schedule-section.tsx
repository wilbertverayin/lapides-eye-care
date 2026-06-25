import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone, Clock, Triangle } from "lucide-react";

const Building1Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 22V8.4C6 8.13478 6.10536 7.88043 6.29289 7.69289L9.69289 4.29289C9.88043 4.10536 10.1348 4 10.4 4H13.6C13.8652 4 14.1196 4.10536 14.3071 4.29289L17.7071 7.69289C17.8946 7.88043 18 8.13478 18 8.4V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 22V19C10 18.4477 10.4477 18 11 18H13C13.5523 18 14 18.4477 14 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Building2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 22V8.5L12 4.5L17 8.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H14V22H10V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HospitalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 22V10C6 9.44772 6.44772 9 7 9H17C17.5523 9 18 9.44772 18 10V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9V6C10 5.44772 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const clinics = [
  {
    icon: <Building1Icon className="h-10 w-10 text-gray-500" />,
    name: "Premiere Eye Referral Center (PERC)",
    tag: "Specialty Clinic",
    address: "YKM Bldg., UN Avenue cor. Alhambra St., Ermita, Manila",
    schedule: "Thursday (by appointment only)",
    note: null,
  },
  {
    icon: <Building2Icon className="h-10 w-10 text-gray-500" />,
    name: "Ideal Vision Center, SM MOA",
    tag: "Vision Center",
    address: "3rd Floor, SM Mall of Asia, Pasay City",
    schedule: "Sunday, 3-7 PM",
    note: null,
  },
  {
    icon: <HospitalIcon className="h-10 w-10 text-gray-500" />,
    name: "Maxicare Primary Care Clinics",
    tag: "HMO Clinic",
    address: "Multiple Locations (Cubao, Metroeast, Hemady, VV Soliven, Otis)",
    schedule: "Tuesday (Cubao & Metroeast), Friday (Hemady & VV Soliven), Saturday (Otis & VV Soliven)",
    note: "Maxicare HMO cardholders only",
  },
];

const Blob = ({ className }: { className?: string }) => (
    <div className={cn("absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10", className)} />
);

export default function ScheduleSection() {
  return (
    <section id="schedule" className="w-full relative bg-white py-24 sm:py-32 overflow-hidden">
        <Blob className="w-[40rem] h-[40rem] bg-blue-200 -top-32 -left-32" />
        <Blob className="w-[40rem] h-[40rem] bg-purple-200 -bottom-32 -right-32" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clinic Schedule & Locations
            </h2>
            <p className="max-w-[700px] text-foreground/70 md:text-lg">
              Find Dr. Lapides at multiple convenient locations throughout Metro Manila
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl">
          {clinics.map((clinic, index) => (
            <Card key={index} className="flex flex-col p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="flex flex-col items-center gap-4 p-0 h-full text-center">
                <div className="p-3 bg-slate-100 rounded-full">
                    {clinic.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {clinic.name}
                  </h3>
                  <div className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md">
                    {clinic.tag}
                  </div>
                </div>
                <div className="space-y-4 text-left w-full pt-6 mt-4 border-t border-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                        <p className="font-semibold text-foreground text-base">Address:</p>
                        <p className="text-foreground/80 text-sm">{clinic.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                        <p className="font-semibold text-foreground text-base">Schedule:</p>
                        <p className="text-foreground/80 text-sm">{clinic.schedule}</p>
                    </div>
                  </div>
                </div>

                {clinic.note && (
                  <div className="w-full mt-auto pt-4">
                    <div className="flex items-center justify-center gap-2 rounded-lg bg-purple-100/40 p-3 text-sm text-purple-800 font-medium">
                      <Triangle className="h-4 w-4 text-purple-500 fill-current" />
                      <span>{clinic.note}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24">
            <Card className="max-w-4xl mx-auto p-8 bg-white/60 backdrop-blur-sm border border-purple-100/80 rounded-3xl shadow-lg">
                <CardContent className="p-0 text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                        Need to Schedule an Appointment?
                    </h3>
                    <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                        Contact us directly to book your consultation at any of our convenient locations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-4 text-lg">
                        <a href="mailto:jglapides0225@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                            <span className="font-medium text-foreground hover:text-primary">jglapides0225@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-3">
                            <Phone className="h-6 w-6 text-primary" />
                            <span className="font-medium text-foreground">0963 080 3269</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
