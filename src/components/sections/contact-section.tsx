"use client";

import { useEffect, useRef, useState } from "react";
import { submitContactForm, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full font-bold text-lg py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-primary-foreground transform hover:scale-105 rounded-full"
    >
      {pending ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
          Sending...
        </>
      ) : (
        "Book Appointment"
      )}
    </Button>
  );
}

const Blob = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10",
      className
    )}
  />
);

export default function ContactSection() {
  const initialState: FormState = { message: "", errors: undefined, isSuccess: false };
  const [state, setState] = useState<FormState>(initialState);
  const [pending, setPending] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? "Success!" : "Error",
        description: state.message,
        variant: state.isSuccess ? "default" : "destructive",
      });
    }
    if (state.isSuccess) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(state, formData);
    setState(result);
    setPending(false);
  }

  return (
    <section id="contact" className="w-full relative bg-secondary/30 py-24 sm:py-32 overflow-hidden">
      <Blob className="w-[40rem] h-[40rem] bg-purple-200 -top-16 -left-32" />
      <Blob className="w-[40rem] h-[40rem] bg-blue-200 -bottom-16 -right-32" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="max-w-[700px] text-foreground/80 md:text-lg">
              Ready to take care of your vision? Get in touch to schedule your appointment
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-lg rounded-3xl p-8 space-y-8">
            <h3 className="text-2xl font-bold text-blue-800">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:jglapides0225@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                    jglapides0225@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-foreground/80">0963 080 3269</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Office Hours</h4>
                  <div className="text-foreground/80 space-y-1">
                    <p>Tuesday: Cubao & Metroeast Clinics</p>
                    <p>Thursday: PERC (by appointment)</p>
                    <p>Friday: Hemady & VV Soliven Clinics</p>
                    <p>Saturday: Otis & VV Soliven Clinics</p>
                    <p>Sunday: SM MOA (3-7 PM)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-100/40 rounded-xl p-6">
                 <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-blue-800 text-lg">Emergency Eye Care</h4>
                 </div>
              <p className="text-blue-900/80">
                For urgent eye care needs, please call our office number. We prioritize emergency cases and will do our best to accommodate you as soon as possible.
              </p>
            </div>
          </div>

          <Card className="shadow-2xl rounded-3xl border-2 border-cyan-200/50 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-700 mb-6">Book Appointment</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-semibold">Full Name <span className="text-destructive">*</span></Label>
                  <Input id="fullName" name="fullName" placeholder="Enter your full name" aria-label="Full Name" />
                  {state.errors?.fullName && <p className="text-destructive text-sm mt-1">{state.errors.fullName[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold">Email Address <span className="text-destructive">*</span></Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email address" aria-label="Email Address" />
                  {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="font-semibold">Mobile Number <span className="text-destructive">*</span></Label>
                  <Input id="mobile" name="mobile" type="tel" placeholder="Enter your mobile number" aria-label="Mobile Number" />
                  {state.errors?.mobile && <p className="text-destructive text-sm mt-1">{state.errors.mobile[0]}</p>}
                </div>
                <div className="space-y-2">
                   <Label htmlFor="message" className="font-semibold">Message</Label>
                   <Textarea id="message" name="message" placeholder="Tell us about your concerns or preferred appointment time..." rows={4} aria-label="Message"/>
                   {state.errors?.message && <p className="text-destructive text-sm mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton pending={pending} />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
