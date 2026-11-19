import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { doctor } from "@/content/doctor";

export const metadata: Metadata = {
  title: doctor.siteTitle,
  description: 'Comprehensive ophthalmology services in the Philippines, specializing in laser and cataract surgery. Book an appointment with Dr. Jomel G. Lapides.',
  keywords: ['ophthalmologist', 'eye doctor', 'cataract surgery', 'laser eye surgery', 'Jomel Lapides', 'eye care Philippines', 'eye clinic', 'Maxicare ophthalmologist'],
  authors: [{ name: doctor.name }],
  openGraph: {
    title: doctor.siteTitle,
    description: 'Expert eye care, from consultations to advanced laser and cataract surgery. Trust your vision to a board-certified ophthalmologist.',
    siteName: doctor.siteName,
    images: ['/jomellapides-operating.jpeg'],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: doctor.siteTitle,
    description: 'Expert eye care, from consultations to advanced laser and cataract surgery. Trust your vision to a board-certified ophthalmologist.',
    images: ['/jomellapides-operating.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
