import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2a1c5b] to-[#413a69] text-primary-foreground py-16 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white">
              {/* Column 1: Doctor's Info */}
              <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Dr. Jomel G. Lapides</h3>
                  <p className="text-white/80">Board-Certified Ophthalmologist</p>
                  <p className="text-white/80">Comprehensive Ophthalmology | Laser & Cataract Surgery</p>
              </div>

              {/* Column 2: Quick Contact */}
              <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-300">Quick Contact</h4>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-blue-300" />
                          <a href="mailto:jglapides0225@gmail.com" className="text-white/80 hover:text-white transition-colors">
                              jglapides0225@gmail.com
                          </a>
                      </li>
                      <li className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-blue-300" />
                          <span className="text-white/80">0963 080 3269</span>
                      </li>
                  </ul>
              </div>

              {/* Column 3: Clinic Hours */}
              <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-300">Clinic Hours</h4>
                  <div className="text-white/80 space-y-1 text-sm">
                      <p>Tuesday: Maxicare Clinics</p>
                      <p>Thursday: PERC (by appointment)</p>
                      <p>Friday: Maxicare Clinics</p>
                      <p>Saturday: Maxicare Clinics</p>
                      <p>Sunday: SM MOA (3-7 PM)</p>
                  </div>
              </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
                  <p>&copy; 2025 Dr. Jomel G. Lapides, MD, DPBO. All rights reserved.</p>
                  <p className="mt-4 md:mt-0">Professional eye care you can trust</p>
              </div>
              <div className="mt-6">
                <a href="https://visibleclinic.com" target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full hover:bg-white/20 transition-colors">
                    Powered by VisibleClinic
                </a>
              </div>
          </div>
      </div>
    </footer>
  );
}
