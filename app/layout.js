// File 1: app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
  export const metadata = {
  metadataBase: new URL('https://zeyad-profile.vercel.app/'), // قم بتغيير هذا إلى دومين موقعك
  title: {
    default: 'Zeyad Maher | Frontend Developer',
    template: '%s | Zeyad Maher'
  },
  description: 'Professional Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio and projects.',
  keywords: ['Zeyad Maher', 'Frontend Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'Portfolio'],
  authors: [{ name: 'Zeyad Maher' }],
  creator: 'Zeyad Maher',
  publisher: 'Zeyad Maher',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zeyad-profile.vercel.app/', // قم بتغيير هذا إلى دومين موقعك
    siteName: 'Zeyad Maher Portfolio',
    title: 'Zeyad Maher | Frontend Developer',
    description: 'Professional Frontend Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg', // قم بإضافة صورة OG في مجلد public
        width: 1200,
        height: 630,
        alt: 'Zeyad Maher Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeyad Maher | Frontend Developer',
    description: 'Professional Frontend Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'], // نفس صورة OG
    creator: '@zeyadmaher', // قم بتغيير هذا إلى حساب تويتر الخاص بك
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
           <footer className="bg-gray-900 text-white py-8 mt-0">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-4">
            © 2025 Zeyad Maher. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 text-sm font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 text-sm font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300 text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}