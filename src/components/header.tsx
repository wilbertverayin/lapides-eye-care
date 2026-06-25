"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#schedule", label: "Schedule" },
    { href: "#faq", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container flex h-20 items-center">
        <Link href="#hero" className="mr-6 flex items-center" onClick={closeMenu}>
          <span className="font-bold text-xl text-foreground">Dr. Jomel G. Lapides</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-8 text-base md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-foreground font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 rounded-full font-semibold px-6">
            <Link href="#contact">Book Appointment</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-background/90 backdrop-blur-sm">
              <Link href="#hero" className="mr-6 flex items-center space-x-2 mb-8" onClick={closeMenu}>
                <span className="font-bold text-xl">Dr. Jomel G. Lapides</span>
              </Link>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground/80 hover:text-foreground"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full bg-primary">
                  <Link href="#contact" onClick={closeMenu}>Book an Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
